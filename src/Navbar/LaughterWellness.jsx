import React from 'react';

export default function LaughterWellness() {

    const pdfUrl = 'https://raw.githubusercontent.com/Gotcha1001/My-Images-for-sites-Wes/main/Laughter%20Wellness%20Programmes%20PDF.pdf';

    return (
        <section className="relative p-8 bg-gray-100 min-h-screen flex items-center justify-center">
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
                {/* Title Section */}
                <div className="opacity-100 mb-6 text-center">
                    <h1 className="text-3xl font-bold mb-4">Laughter Wellness Programmes</h1>
                </div>

                {/* Download PDF Button */}
                <div className="flex justify-center mb-6 opacity-100">
                    <a
                        href={pdfUrl}
                        download
                        className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 ease-in-out"
                    >
                        Download PDF
                    </a>
                </div>

                {/* Write-up */}
                <div className="mb-6 text-center">
                    <p className="text-gray-700 text-lg">
                        Laughter has long been celebrated for its incredible health benefits. It acts as a natural stress reliever, enhances mood, and promotes overall well-being. Engaging in laughter not only provides immediate joy but also has lasting effects on mental and physical health. By incorporating laughter into daily routines, individuals can experience improved resilience, better interpersonal connections, and a more positive outlook on life.
                    </p>
                </div>

                {/* Images Section */}
                <div className="flex flex-wrap justify-center gap-4">
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-xs">
                        <img
                            src="https://images.pexels.com/photos/34950/pexels-photo.jpg"
                            alt="Laughter"
                            className="object-cover w-full h-48"
                        />
                    </div>
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-xs">
                        <img
                            src="https://images.pexels.com/photos/927451/pexels-photo-927451.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Joyful Moment"
                            className="object-cover w-full h-48"
                        />
                    </div>
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-xs">
                        <img
                            src="https://images.pexels.com/photos/2219118/pexels-photo-2219118.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Happy People"
                            className="object-cover w-full h-48"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
