import React from 'react';

export default function Services() {
    return (
        <section className="p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 2xl:p-16 bg-gray-100">
            {/* Title */}
            <div className="text-center font-serif text-4xl font-bold text-primary-950 mb-8">
                Our Services
            </div>

            {/* Service Images Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="bg-black p-4 rounded-lg shadow-lg flex items-center justify-center">
                    <img
                        src="https://images.pexels.com/photos/5935229/pexels-photo-5935229.jpeg?auto=compress&cs=tinysrgb&w=800"
                        alt="Service Image 1"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>
                <div className="bg-black p-4 rounded-lg shadow-lg flex items-center justify-center">
                    <img
                        src="https://images.pexels.com/photos/1181408/pexels-photo-1181408.jpeg?auto=compress&cs=tinysrgb&w=800"
                        alt="Service Image 2"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>
                <div className="bg-black p-4 rounded-lg shadow-lg flex items-center justify-center">
                    <img
                        src="https://images.pexels.com/photos/3856033/pexels-photo-3856033.jpeg?auto=compress&cs=tinysrgb&w=800"
                        alt="Service Image 3"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>
            </div>

            {/* Service Packages */}
            <div className="flex flex-col space-y-8">
                {/* Package 1: 1-Day Conferences */}
                <div className="bg-black text-yellow-500 rounded-lg shadow-lg p-6">
                    <h3 className="text-2xl font-bold mb-4 text-center">1-Day Conferences</h3>
                    <p className="text-center">
                        Experience a full day of laughter therapy with Heinrich's engaging and transformative 1-day conferences. Ideal for corporate teams and large gatherings.
                    </p>
                </div>

                {/* Package 2: Startup Icebreakers */}
                <div className="bg-black text-yellow-500 rounded-lg shadow-lg p-6">
                    <h3 className="text-2xl font-bold mb-4 text-center">Startup Icebreakers</h3>
                    <p className="text-center">
                        Perfect for small businesses, this package offers customized icebreakers to kickstart team building and foster a positive work environment.
                    </p>
                </div>

                {/* Package 3: Old Age Home Services */}
                <div className="bg-black text-yellow-500 rounded-lg shadow-lg p-6">
                    <h3 className="text-2xl font-bold mb-4 text-center">Old Age Home Services</h3>
                    <p className="text-center">
                        Heinrich provides specialized laughter therapy sessions for old age homes, bringing joy and improving the well-being of elderly residents.
                    </p>
                </div>

                {/* Package 4: Large Conferences */}
                <div className="bg-black text-yellow-500 rounded-lg shadow-lg p-6">
                    <h3 className="text-2xl font-bold mb-4 text-center">Large Conferences</h3>
                    <p className="text-center">
                        For major corporate events and international conferences, Heinrich delivers keynote sessions that leave a lasting impression on audiences.
                    </p>
                </div>
            </div>
        </section>
    );
}
