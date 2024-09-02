
const GenAi = () => {
    return (
        <div className="px-20 py-10">
            <h1 className="text-center text-5xl font-bold">Smart GenAI Video Creation</h1>
            <div className="w-full flex justify-center">
                <img src='genai.jpg' alt="genai" width={500} height={500}/>
            </div>
            <h1 className="text-3xl font-bold">Generate Your Ad</h1>
            <p className="text-lg text-gray-500 mt-3">Enter your product link below to generate a personalized AI advertisement.</p>
            <div className="my-6">
                <input type="text" id="large-input" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base " placeholder="Enter your product link"/>
            </div>
            <button type="button" className="w-32 text-white bg-purple-700 hover:bg-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 my-2">Submit</button>
        </div>
    )
}

export default GenAi;