import React from 'react';

export default function Services() {
    return (
        <section className="relative p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 2xl:p-16 bg-gray-100">
            {/* Video Background */}
            <video
                autoPlay
                loop
                muted
                className="absolute inset-0 w-full h-full object-cover z-0"
            >
                <source src="https://cdn.pixabay.com/video/2022/11/26/140582-775389269_tiny.mp4" type="video/mp4" />
                {/* Add a fallback for non-supporting browsers */}
                Your browser does not support the video tag.
            </video>

            {/* Overlay to darken the video */}
            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

            {/* Content */}
            <div className="relative z-20 ">
                {/* Title */}
                <div className="text-center font-serif text-4xl  font-bold text-primary-950 mb-8 rounded-lg gradient-background2 mx-auto w-full sm:w-3/4 md:w-2/3 lg:w-1/2 p-3  transition-transform transform hover:scale-105 zoom">
                    Our Services
                </div>

                {/* Service Images Flexbox */}
                <div className="flex flex-col items-center lg:flex-row lg:justify-center lg:space-x-8 mb-8">
                    <div className="bg-black bg-opacity-50 p-2 rounded-lg flex items-center justify-center shadow-sky transition-transform transform hover:scale-105  ">
                        <img
                            src="https://github.com/Gotcha1001/My-Images-for-sites-Wes/blob/main/laugh1services.jpg?raw=true"
                            alt="Service Image 2"
                            className="w-3/4 h-auto object-cover rounded-lg"
                        />
                    </div>

                    <div className="bg-black bg-opacity-50 p-4 rounded-lg shadow-lg flex items-center justify-center mt-6 lg:mt-0 transition-transform transform hover:scale-105  ">
                        <img
                            src="https://images.pexels.com/photos/3856033/pexels-photo-3856033.jpeg?auto=compress&cs=tinysrgb&w=800"
                            alt="Service Image 3"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                </div>

                {/* Service Packages Grid */}
                <div className="flex flex-col items-center gap-8 mb-8">
                    {/* Package 1: 2-Day Conferences */}
                    <div className="bg-black bg-opacity-50 text-yellow-500 rounded-lg shadow-lg p-6 w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 transition-transform transform hover:scale-105 ">
                        <h3 className="text-2xl font-bold mb-4 text-center">2-Day Conferences</h3>
                        <p className="text-center">
                            Experience 2 full days of laughter therapy with Heinrich's engaging and transformative conferences. Ideal for corporate teams and large gatherings. Team building, 2-Day certified Laughter Coach Training Seminars.
                        </p>
                    </div>

                    {/* Package 2: Startup Icebreakers */}
                    <div className="bg-black bg-opacity-50 text-yellow-500 rounded-lg shadow-lg p-6 w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 transition-transform transform hover:scale-105 ">
                        <h3 className="text-2xl font-bold mb-4 text-center">Startup Icebreakers</h3>
                        <p className="text-center">
                            Perfect for small businesses, this package offers customized icebreakers to kickstart team building and foster a positive work environment.
                        </p>
                    </div>

                    {/* Package 3: Old Age Home Services */}
                    <div className="bg-black bg-opacity-50 text-yellow-500 rounded-lg shadow-lg p-6 w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 transition-transform transform hover:scale-105 ">
                        <h3 className="text-2xl font-bold mb-4 text-center">Old Age Home Services</h3>
                        <p className="text-center">
                            Heinrich provides specialized laughter therapy sessions for old age homes, bringing joy and improving the well-being of elderly residents.
                        </p>
                    </div>

                    {/* Package 4: Large Conferences */}
                    <div className="bg-black bg-opacity-50 text-yellow-500 rounded-lg shadow-lg p-6 w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 transition-transform transform hover:scale-105 ">
                        <h3 className="text-2xl font-bold mb-4 text-center">Large Conferences</h3>
                        <p className="text-center">
                            For major corporate events and international conferences, Heinrich delivers keynote sessions that leave a lasting impression on audiences.
                        </p>
                    </div>
                </div>

                {/* Smaller Image, Email, and Phone Number */}
                <div className="flex flex-col items-center space-y-6 mt-8">
                    <div className="bg-black bg-opacity-50 p-4 rounded-lg shadow-lg flex items-center justify-center transition-transform transform hover:scale-105 ">
                        <img
                            src="https://images.pexels.com/photos/1115680/pexels-photo-1115680.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Service Image 2"
                            className="w-1/2 h-auto object-cover rounded-lg"
                        />
                    </div>

                    {/* Contact Information Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8 justify-center">
                        {/* Email Card */}
                        <div className="gradient-background2 bg-opacity-50 text-yellow-500 rounded-lg shadow-lg p-6 text-center transition-transform transform hover:scale-105 ">
                            <h3 className="text-xl font-bold mb-2">Email Us:</h3>
                            <a href="mailto:hvisserclyt@gmail.com" className="underline text-white">
                                hvisserclyt@gmail.com
                            </a>
                        </div>

                        {/* Phone Number Card */}
                        <div className="gradient-background2 bg-opacity-80 text-yellow-500 rounded-lg shadow-lg p-6 text-center transition-transform transform hover:scale-105 hover:bg-black hover:bg-opacity-100">
                            <h3 className="text-xl font-bold mb-2">Call Us:</h3>
                            <a href="tel:+27610910748" className="underline text-white">
                                061 0910748
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}