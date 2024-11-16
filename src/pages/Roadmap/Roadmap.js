import React from 'react';

function Roadmap() {
    return (
        <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center">
                    <h1 className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900">
                        Product Roadmap
                    </h1>
                    <p className="font-roboto text-xl md:text-2xl text-gray-600 mt-4">
                        A glance at what's available, in progress, and coming soon.
                    </p>
                </div>

                <div className="mt-16 space-y-10">
                    {/* Current Features Section */}
                    <div className="border-l-4 pl-4 border-gray-400">
                        <h2 className="font-montserrat text-2xl font-semibold text-gray-900 mb-4">Current Features</h2>
                        <ul className="space-y-3">
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
                    <div className="border-l-4 pl-4 border-yellow-500">
                        <h2 className="font-montserrat text-2xl font-semibold text-gray-900 mb-4">In Progress</h2>
                        <ul className="space-y-3">
                            <li className="text-lg text-gray-800">
                                <span className="font-semibold">Feature 1:</span> Improving data syncing with AEP
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
                    <div className="border-l-4 pl-4 border-blue-600">
                        <h2 className="font-montserrat text-2xl font-semibold text-gray-900 mb-4">Upcoming Features</h2>
                        <ul className="space-y-3">
                            <li className="text-lg text-gray-800">
                                <span className="font-semibold">Feature 1:</span> Enhanced analytics and reporting
                            </li>
                            <li className="text-lg text-gray-800">
                                <span className="font-semibold">Feature 2:</span> Real-time data processing improvements
                            </li>
                            <li className="text-lg text-gray-800">
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
