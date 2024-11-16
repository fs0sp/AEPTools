function Navbar() {
    return (
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
                <h1 className="font-montserrat text-3xl text-white font-bold">AEP Tools.</h1>
                <div className="flex gap-6">
                    <h4 className="text-white text-lg cursor-pointer hover:text-blue-200 transition-colors duration-300">Tools</h4>
                    <h4 className="text-white text-lg cursor-pointer hover:text-blue-200 transition-colors duration-300">About</h4>
                    <h4 className="text-white text-lg cursor-pointer hover:text-blue-200 transition-colors duration-300">Docs</h4>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
