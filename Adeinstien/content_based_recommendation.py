import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.metrics import jaccard_score
from sklearn.preprocessing import MultiLabelBinarizer
import numpy as np
import pickle
import json

# Load the TF-IDF vectorizer
with open('model/content_based_model/tfidf_vectorizer.pkl', 'rb') as f:
    tfidf = pickle.load(f)

# Load the TF-IDF matrix
with open('model/content_based_model/tfidf_matrix.pkl', 'rb') as f:
    tfidf_matrix = pickle.load(f)

# Load the DataFrame
with open('model/content_based_model/product_data.pkl', 'rb') as f:
    df = pickle.load(f)

# Function to compute Jaccard similarity
def jaccard_similarity(query, corpus):
    mlb = MultiLabelBinarizer()
    query_set = set(query.split())
    corpus_sets = [set(doc.split()) for doc in corpus]
    binarized_corpus = mlb.fit_transform(corpus_sets)
    binarized_query = mlb.transform([query_set])
    jaccard_similarities = [jaccard_score(binarized_query[0], doc, average='binary') for doc in binarized_corpus]
    return np.array(jaccard_similarities)

# Function to recommend products
def recommend_products(description, n=5):
    # Vectorize the user input description
    query_vec = tfidf.transform([description])

    # Compute cosine similarity
    cosine_sim = cosine_similarity(query_vec, tfidf_matrix).flatten()

    # Compute Jaccard similarity
    jaccard_sim = jaccard_similarity(description, df['Combined'])

    # Combine the similarities
    combined_similarity = 0.5 * cosine_sim + 0.5 * jaccard_sim

    # Get top n recommendations
    top_indices = combined_similarity.argsort()[-n:][::-1]

    # Create a list of dictionaries for JSON output
    recommendations = [
        {"product_name": df['Product Name'].iloc[i], "url": df['Product Url'].iloc[i]}
        for i in top_indices
    ]
    
    return recommendations

