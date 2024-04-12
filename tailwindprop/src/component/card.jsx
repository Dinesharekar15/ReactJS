import React from "react";

function Card({username, job="software developer",image}) {
    return (
        <header className="bg-gray-800 text-white p-4">
            <nav className="container mx-auto flex justify-between items-center">
                {/* Navigation Links */}
                <div className="flex space-x-4">
                    <a href="#home" className="hover:text-gray-400">Home</a>
                    <a href="#about" className="hover:text-gray-400">About</a>
                    <a href="#contact" className="hover:text-gray-400">Contact Us</a>
                    <a href="#github" className="hover:text-gray-400">GitHub</a>
                </div>
                {/* Buttons */}
                <div className="flex space-x-4">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
                        Login
                    </button>
                    <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
                        Get Started
                    </button>
                </div>
            </nav>
        </header>
    );
}

export default Card;