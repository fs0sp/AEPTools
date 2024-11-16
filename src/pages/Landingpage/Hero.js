function Hero() {
    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
                    {/* Main Heading */}
                    <h1 className="font-montserrat text-4xl md:text-6xl lg:text-7xl font-bold mb-8
                        bg-gradient-to-r from-blue-600 to-purple-600
                        bg-clip-text text-transparent
                        leading-tight max-w-5xl">
                        Simplify Your Adobe Experience Platform Workflow
                    </h1>

                    <p className="font-roboto text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl">
                        Powerful tools to streamline your AEP operations
                    </p>

                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 
                        text-white px-8 py-4 rounded-lg
                        font-semibold text-lg
                        transform transition-all duration-300
                        hover:shadow-lg hover:shadow-purple-500/25
                        hover:-translate-y-1 font-poppins
                        focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
                        Explore Tools
                    </button>

                    {/* Optional: Stats Section */}
                    <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-blue-600">500+</div>
                            <div className="text-gray-600">Active Users</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-blue-600">1000+</div>
                            <div className="text-gray-600">Workflows Created</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-blue-600">24/7</div>
                            <div className="text-gray-600">Support</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Optional: Decorative Elements */}
            <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-blue-50 to-transparent -z-10"></div>
            <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-purple-50 to-transparent -z-10"></div>
        </div>
    );
}

export default Hero;    