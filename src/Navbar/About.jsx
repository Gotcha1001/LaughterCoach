import React from 'react';

export default function About() {
    return (
        <section className="relative p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 2xl:p-16 bg-gray-100 min-h-screen flex items-center justify-center">
            {/* Video Background */}
            <div className="absolute inset-0 overflow-hidden">
                <video
                    className="object-cover w-full h-full"
                    autoPlay
                    muted
                    loop
                >
                    <source src="https://cdn.pixabay.com/video/2021/03/03/66823-520427407_tiny.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-black opacity-50"></div> {/* Optional overlay */}
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto bg-white shadow-lg rounded-lg p-6 mb-6 max-w-4xl">
                {/* Title */}
                <div className="text-center font-serif text-4xl font-bold text-primary-950 mb-8 animate-bounce">
                    About Us
                </div>

                {/* Image Cards */}
                <div className="flex flex-col sm:flex-row justify-center space-y-8 sm:space-y-0 sm:space-x-8 mb-8">
                    {/* Image Card 1 */}
                    <div className="bg-black p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full sm:w-3/4 md:w-2/3 lg:w-2/5 xl:w-1/3 lg:h-80 xl:h-72 flex items-center justify-center">
                        <img
                            src="https://github.com/Gotcha1001/My-Images-for-sites-Wes/blob/main/laughbio3.jpg?raw=true"
                            alt="Laughter Therapy"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>

                    {/* Image Card 2 */}

                </div>

                {/* Content Cards */}
                <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-6 mb-8">
                    {/* Card 1: Heinrich's Expertise */}
                    <div className="bg-black text-white rounded-lg shadow-lg p-6 w-full sm:w-1/3 transition-transform transform hover:scale-105">
                        <h3 className="text-xl font-bold mb-4 text-center">Heinrich's Expertise</h3>
                        <p className="text-center">
                            With a Master's degree in Laughter Therapy, Heinrich is highly qualified to lead seminars and courses that teach the transformative power of laughter.
                        </p>
                    </div>

                    {/* Card 2: Global Impact */}
                    <div className="bg-black text-white rounded-lg shadow-lg p-6 w-full sm:w-1/3 transition-transform transform hover:scale-105">
                        <h3 className="text-xl font-bold mb-4 text-center">Global Impact</h3>
                        <p className="text-center">
                            Heinrich travels the world, bringing laughter to companies and communities through impactful seminars, conferences, and courses.
                        </p>
                    </div>

                    {/* Card 3: Positive Community Influence */}
                    <div className="bg-black text-white rounded-lg shadow-lg p-6 w-full sm:w-1/3 transition-transform transform hover:scale-105">
                        <h3 className="text-xl font-bold mb-4 text-center">Positive Community Influence</h3>
                        <p className="text-center">
                            Through LaughNow 101, Heinrich’s work is creating a ripple effect of joy, helping people rediscover happiness and improve their mental health.
                        </p>
                    </div>
                </div>
                {/* Image Cards */}
                <div className="flex flex-col sm:flex-row justify-center space-y-8 sm:space-y-0 sm:space-x-8 mb-8">
                    {/* Image Card 1 */}
                    <div className="bg-black p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full sm:w-3/4 md:w-2/3 lg:w-2/5 xl:w-1/3 lg:h-80 xl:h-72 flex items-center justify-center">
                        <img
                            src="https://images.pexels.com/photos/1958744/pexels-photo-1958744.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Laughter Therapy"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>

                    {/* Image Card 2 */}
                    <div className="bg-black p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full sm:w-3/4 md:w-2/3 lg:w-2/5 xl:w-1/3 lg:h-80 xl:h-72 flex items-center justify-center">
                        <img
                            src="https://images.pexels.com/photos/7142962/pexels-photo-7142962.jpeg?auto=compress&cs=tinysrgb&w=800"
                            alt="Laughter Therapy"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                    <div className="bg-black p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full sm:w-3/4 md:w-2/3 lg:w-2/5 xl:w-1/3 lg:h-80 xl:h-72 flex items-center justify-center">
                        <img
                            src="https://images.pexels.com/photos/2641773/pexels-photo-2641773.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Laughter Therapy"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                </div>
            </div>


        </section>
    );
}
