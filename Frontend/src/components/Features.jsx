const Features = () => {
    return (
        <div className="my-10">
            <h1 className="text-center text-5xl font-bold">Explore Features</h1>
            <div className="flex mx-14">
                <div className="flex p-10">
                    <div className="flex flex-col px-4">
                        <p className="text-2xl font-bold">Smart GenAI Video Creation</p>
                        <p className="text-lg text-gray-500">Automatically generate engaging advertisement videos with AI-powered tools.</p>
                        <a href='/genai' type="button" className="w-32 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border-2 border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10">Learn more</a>
                    </div>
                    <img src="img1.jpg" alt="placeholder" className="h-[200px] w-40" />
                </div>
                <div className="flex p-10 ">
                    <div className="flex flex-col px-4">
                        <p className="text-2xl font-bold">Recommendation System Based Ad Creation</p>
                        <p className="text-lg text-gray-500">Automatically generate engaging advertisement videos with AI-powered tools.</p>
                        <button type="button" className="w-32 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border-2 border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10">Learn more</button>
                    </div>
                    <img src="img1.jpg" alt="placeholder" className="h-[200px] w-40" />
                </div>
                <div className="flex p-10">
                    <div className="flex flex-col px-4">
                        <p className="text-2xl font-bold">Reinforcement Learning Based Ad Creation</p>
                        <p className="text-lg text-gray-500">Automatically generate engaging advertisement videos with AI-powered tools.</p>
                        <button type="button" className="w-32 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border-2 border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10">Learn more</button>
                    </div>
                    <img src="img1.jpg" alt="placeholder" className="h-[200px] w-40" />
                </div>
            </div>
        </div>
    )
}

export default Features;