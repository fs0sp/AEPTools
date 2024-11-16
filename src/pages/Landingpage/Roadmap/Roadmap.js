import React from 'react';

function Roadmap() {
    return (
        <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center">
                    <h1 className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900">
                        Product Roadmap
                    </h1>
                    <p className="font-roboto text-xl md:text-2xl text-gray-600 mt-4">
                        Check out what's in progress, what's coming next, and the features available now!
                    </p>
                </div>

                <div className="mt-16">
                    {/* Current Features Section */}
                    <div className="bg-gradient-to-r from-green-400 to-green-500 rounded-lg p-8 mb-12">
                        <h2 className="font-montserrat text-3xl font-semibold text-gray-900">Current Features</h2>
                        <ul className="mt-6 space-y-4">
                            <li className="text-lg text-gray-800">
                                <span className="font-semibold">Feature 1:</span> Seamless integration with AEP data sources
                            </li>
                            <li className="text-lg text-gray-800">
                                <span className="font-semibold">Feature 2:</span> Real-time audience segmentation
                            </li>
                            <li className="text-lg text-gray-800">
                                <span className="font-semibold">Feature 3:</span> Multi-channel campaign optimization
                            </li>
                        </ul>
                    </div>

                    {/* In Progress Section */}
                    <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg p-8 mb-12">
                        <h2 className="font-montserrat text-3xl font-semibold text-gray-900">In Progress</h2>
                        <ul className="mt-6 space-y-4">
                            <li className="text-lg text-gray-800">
                                <span className="font-semibold">Feature 1:</span> Improving data syncing with Adobe Experience Platform
                            </li>
                            <li className="text-lg text-gray-800">
                                <span className="font-semibold">Feature 2:</span> Customizable user dashboards
                            </li>
                            <li className="text-lg text-gray-800">
                                <span className="font-semibold">Feature 3:</span> Integration with third-party data sources
                            </li>
                        </ul>
                    </div>

                    {/* Upcoming Features Section */}
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8">
                        <h2 className="font-montserrat text-3xl font-semibold text-white">Upcoming Features</h2>
                        <ul className="mt-6 space-y-4">
                            <li className="text-lg text-white">
                                <span className="font-semibold">Feature 1:</span> Enhanced analytics and reporting
                            </li>
                            <li className="text-lg text-white">
                                <span className="font-semibold">Feature 2:</span> Real-time data processing improvements
                            </li>
                            <li className="text-lg text-white">
                                <span className="font-semibold">Feature 3:</span> Automated data pipeline management
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Roadmap;
