import React from 'react';

export default function Complimentary() {

    const pdfUrl = 'https://raw.githubusercontent.com/Gotcha1001/My-Images-for-sites-Wes/main/Complimentary%20Therapy%20OB%20MJ18%20(2).pdf';

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
                    <h1 className="text-3xl font-bold mb-4">Complimentary Therapy Overview</h1>
                </div>

                {/* Download PDF Button */}
                <div className="flex justify-center mb-6 opacity-100">
                    <a
                        href={pdfUrl}
                        download
                        className="inline-block px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition-all duration-300 ease-in-out"
                    >
                        Download PDF
                    </a>
                </div>



                {/* Images Section */}
                <div className="flex flex-col gap-6">
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img
                            src="https://github.com/Gotcha1001/My-Images-for-sites-Wes/blob/main/Comp.jpg?raw=true"
                            alt="Therapy"
                            className="object-contain w-full h-72 sm:h-80 md:h-96 rounded-md bg-black"
                        />
                    </div>
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img
                            src="https://github.com/Gotcha1001/My-Images-for-sites-Wes/blob/main/comp1.jpg?raw=true"
                            alt="Wellness"
                            className="object-contain w-full rounded-md p-4 bg-black h-96 sm:h-[500px] md:h-[600px] lg:h-[700px]"
                        />
                    </div>
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img
                            src="https://images.pexels.com/photos/1181292/pexels-photo-1181292.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Relaxation"
                            className="object-contain w-full h-72 sm:h-80 md:h-96 rounded-md bg-black"
                        />
                    </div>
                </div>
                {/* Write-up */}
                <div className="mb-6 text-center mt-4">
                    <p className="text-gray-700 text-lg">
                        Complimentary therapies are increasingly recognized for their benefits in supporting overall wellness. These therapies, such as aromatherapy, acupuncture, and mindfulness, complement traditional medical treatments and promote holistic healing. By incorporating these therapies, individuals can experience enhanced relaxation, improved emotional balance, and a greater sense of well-being. Discovering the synergy between traditional and complementary approaches can lead to a more comprehensive and effective path to health.
                    </p>
                </div>
            </div>
        </section>
    );
}
