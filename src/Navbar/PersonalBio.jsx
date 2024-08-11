export default function PersonalBio() {

    const pdfUrl = 'https://raw.githubusercontent.com/Gotcha1001/My-Images-for-sites-Wes/main/Personal%20Bio%20-%20Heinrich%20Visser.pdf';
    const audioUrl = 'https://raw.githubusercontent.com/Gotcha1001/My-Images-for-sites-Wes/main/Audio-fighting-depression-with-laughter-yoga-heinrich-visser.mp3';

    return (
        <section className="relative py-12 bg-gray-100 overflow-hidden">
            {/* Background Video */}
            <div className="absolute inset-0 z-[0]">
                <video
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                >
                    <source src="https://cdn.pixabay.com/video/2022/11/26/140582-775389269_tiny.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>



            {/* <div className="absolute inset-0 overflow-hidden">
                <video
                    className="object-cover w-full h-full"
                    autoPlay
                    muted
                    loop
                >
                    <source src="https://cdn.pixabay.com/video/2021/03/03/66823-520427407_tiny.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-black opacity-50"></div> 
            </div> */}

            <div className="relative container mx-auto px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-8 text-green-500">Personal Bio</h2>

                <h1 className="text-4xl font-extrabold text-center mb-9 text-white ">Meet Heinrich</h1>

                <div className="flex justify-center mb-8 zoom">
                    <img
                        src="https://github.com/Gotcha1001/My-Images-for-sites-Wes/blob/main/laughbio3.jpg?raw=true"
                        alt="Heinrich"
                        className="w-1/2 md:w-1/3 h-auto object-cover rounded-full shadow-lg"
                    />
                </div>
                <div className="flex justify-center mb-8">
                    <a
                        href={pdfUrl}
                        download
                        className="inline-block px-3 py-2 bg-black  opacity-90 text-white font-semibold rounded-lg shadow-sky "
                    >
                        Download Personal Bio - Heinrich Visser
                    </a>
                </div>
                {/* Audio Player */}
                <div className="flex justify-center mb-8">
                    <div className="relative w-full max-w-md p-4 gradient-background2 rounded-lg shadow-neon">
                        <audio controls className="w-full rounded-lg  ">
                            <source src={audioUrl} type="audio/mpeg" />
                            Your browser does not support the audio element.
                        </audio>
                        {/* Add any additional controls or styling elements here if needed */}
                    </div>
                </div>





                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
                    <div className="gradient-background2 text-white p-6 rounded-lg  transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-black opacity-80 hover:opacity-100">
                        <h3 className="text-xl font-semibold mb-4 text-center">Corporate Wellness & Professional Development</h3>
                        <p className="text-center">
                            <span className="text-blue-800 text-4xl">✓</span> Corporate wellness and professional development
                        </p>
                    </div>
                    <div className="gradient-background2 text-white p-6 rounded-lg  transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-black opacity-80 hover:opacity-100">
                        <h3 className="text-xl font-semibold mb-4 text-center">Staff Stress Relief Workshops</h3>
                        <p className="text-center">
                            <span className="text-blue-800 text-4xl">✓</span> Staff stress relief and appreciation workshops
                        </p>
                    </div>
                    <div className="gradient-background2 text-white p-6 rounded-lg  transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-black opacity-80 hover:opacity-100">
                        <h3 className="text-xl font-semibold mb-4 text-center">Team Building</h3>
                        <p className="text-center">
                            <span className="text-blue-800 text-4xl">✓</span> Team building
                        </p>
                    </div>
                    <div className="gradient-background2 text-white p-6 rounded-lg  transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-black opacity-80 hover:opacity-100">
                        <h3 className="text-xl font-semibold mb-4 text-center">Certified Laughter Coach Training</h3>
                        <p className="text-center" animate-spin>
                            <span className=" text-blue-800 text-4xl ">✓</span> Internationally recognized for certified Laughter Coach training seminars
                        </p>
                    </div>
                    <div className="gradient-background2 text-white p-6 rounded-lg  transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-black opacity-80 hover:opacity-100">
                        <h3 className="text-xl font-semibold mb-4 text-center">Conference Speaking</h3>
                        <p className="text-center">
                            <span className="text-blue-800 text-4xl">✓</span> Conference speaking
                        </p>
                    </div>
                    <div className="gradient-background2 text-white p-6 rounded-lg  transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-black opacity-80 hover:opacity-100">
                        <h3 className="text-xl font-semibold mb-4 text-center">Fun Laughter Workshops</h3>
                        <p className="text-center">
                            <span className="text-blue-800 text-4xl">✓</span> Workshops and seminars on Fun Laughter in the Workplace
                        </p>
                    </div>

                </div>

                <div className="flex justify-center mb-8">
                    <div className="w-full max-w-4xl shadow-neon">
                        <img
                            src="https://github.com/Gotcha1001/My-Images-for-sites-Wes/blob/main/cert.jpg?raw=true"
                            alt="Image 1"
                            className="w-full h-auto object-cover rounded-lg shadow-lg"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
                    <div className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-black  opacity-80 hover:opacity-100 ">
                        <p>
                            Heinrich Visser is an internationally recognised and certified laughter coach and public conference speaker. He was awarded the International Laughter Ambassadorship from Laughter Yoga International in October 2020, where only two awards have been given to two people on the African continent.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-black  opacity-80 hover:opacity-100">
                        <p>
                            Since 2008 Heinrich has facilitated laughter workshops for the corporate world. Speaking at local and international conferences, he has delivered workshops to bring health, happiness, and joy to individuals and organisations in South Africa, and internationally.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-black  opacity-80 hover:opacity-100">
                        <p>
                            Heinrich trained with the Founder of the Laughter Yoga movement, Dr. Madan Kataria, for his Teachers Certification in Bangalore, India. He is a registered member of Laughter Yoga International and has over 14 years’ experience as a corporate laughter facilitator.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-black  opacity-80 hover:opacity-100">
                        <p>
                            With a reputation as an expert in corporate laughter wellness and well-being, his aim is to help clients and students to reconnect with the power of laughter to bring better wellness, peak performance, and overall well-being into their lives.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-black  opacity-80 hover:opacity-100">
                        <p>
                            Heinrich is passionate about making a positive difference to every person, company, and community he works with. He is professional, caring, and cheerful, providing consistency and fun laughter coaching services and training. He is committed to excellence in his work, always meeting and exceeding clients’ expectations.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-black  opacity-80 hover:opacity-100">
                        <p>
                            Laughter coaching workshops will encourage more reinvention into your company and introduce a new perception into their journey towards greatness for the company and their private lives. Heinrich works nationwide and has national clients.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col items-center space-y-8 mt-12">
                    <div className="w-full max-w-md">
                        <img
                            src="https://images.pexels.com/photos/1115680/pexels-photo-1115680.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Image 1"
                            className="w-full h-auto object-cover rounded-lg shadow-neon"
                        />
                    </div>

                    <div className="w-full max-w-md">
                        <img
                            src="https://github.com/Gotcha1001/My-Images-for-sites-Wes/blob/main/laugh2bio.jpg?raw=true"
                            alt="Image 2"
                            className="w-full h-auto object-cover rounded-lg shadow-lg zoom"
                        />
                    </div>
                </div>

                <div className="flex flex-col items-center space-y-4 mt-12">
                    <a href="tel:+27610910748" className="text-xl font-semibold text-primary-900 flex items-center space-x-2">
                        <i className="fas fa-phone-alt text-primary-900 text-4xl horizontal-spin"></i>
                        <span>061 0910748</span>
                    </a>

                    <a href="mailto:hvisserclyt@gmail.com" className="text-xl font-semibold text-primary-900 flex items-center space-x-2">
                        <i className="fas fa-envelope text-primary-900 text-4xl horizontal-spin"></i>
                        <span>hvisserclyt@gmail.com</span>
                    </a>

                    <a href="https://linkedin.com/in/heinrich-visser-29887547" target="_blank" rel="noopener noreferrer" className="text-xl font-semibold flex items-center space-x-2">
                        <svg className="w-10 h-10 horizontal-spin" fill="#0A66C2" viewBox="0 0 24 24">
                            <path d="M19.5 3h-15C3.67 3 3 3.67 3 4.5v15c0 .83.67 1.5 1.5 1.5h15c.83 0 1.5-.67 1.5-1.5v-15c0-.83-.67-1.5-1.5-1.5zM8 17H5v-9h3v9zm-1.5-10.5c-1.09 0-1.5-.77-1.5-1.5S5.41 3 6.5 3s1.5.77 1.5 1.5-1.08 1.5-1.5 1.5zM19 17h-3v-4.5c0-1.07-.03-2.43-1.5-2.43-1.5 0-1.73 1.14-1.73 2.32V17h-3v-9h2.93c.04.5.2.93.54 1.3.8-.83 1.95-1.3 3.35-1.3 3.35V17h3z"></path>
                        </svg>
                        <span>LinkedIn</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
