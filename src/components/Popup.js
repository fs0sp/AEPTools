import React from 'react';

// ToolDetails Component
function ToolDetails({ title, description, link }) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-1/2 md:w-1/3 xl:w-1/4 mb-6 flex flex-col justify-between">
            <h2 className="text-xl font-semibold text-blue-600 mb-3">{title}</h2>
            <p className="text-gray-600 mb-4">{description}</p>

            <a
                href={link} // This will be the navigation link for the tool
                className="w-min inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-6 rounded-lg text-lg font-semibold transform transition-all duration-300 hover:scale-105 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            >
               view
            </a>
        </div>
    );
}

// Popup Component
function Popup({ onClose }) {
    return (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-lg w-[900px] p-8">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-600 font-semibold text-2xl hover:text-gray-900"
                >
                    &times;
                </button>
                <h1 className="text-2xl font-semibold text-blue-600 mb-6">Available Tools.</h1>

                {/* Tools List */}
                <div className="flex flex-wrap justify-between gap-4">
                    <ToolDetails
                        title="Segmentation Time Change"
                        description="Manage and adjust the timing for your segmentation jobs seamlessly with this tool."
                        link="/segmentation-time-change" // Add the navigation link for this tool
                    />
                    <ToolDetails
                        title="User Data Integration"
                        description="Efficiently integrate user data across multiple platforms with this powerful tool."
                        link="/user-data-integration" // Add the navigation link for this tool
                    />
                    <ToolDetails
                        title="Analytics Dashboard"
                        description="Visualize and analyze your segmentation and audience data in real time."
                        link="/analytics-dashboard" // Add the navigation link for this tool
                    />
                    <ToolDetails
                        title="Campaign Automation"
                        description="Automate your marketing campaigns for enhanced efficiency and performance."
                        link="/campaign-automation" // Add the navigation link for this tool
                    />
                </div>

                {/* Close Button */}
                <div className="mt-6 flex justify-end">
                    <button
                        onClick={onClose}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-6 rounded-lg hover:bg-purple-700 transition duration-200"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Popup;
