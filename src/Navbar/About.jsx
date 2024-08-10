export default function About() {
    return (
        <section className="p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 2xl:p-16 bg-gray-100">
            {/* Title */}
            <div className="text-center font-serif text-4xl font-bold text-primary-950 mb-8">
                About Us
            </div>

            {/* Image Card */}
            <div className="flex justify-center mb-8">
                <div className="bg-black p-4 rounded-lg shadow-lg w-4/5 sm:w-3/4 md:w-2/3 lg:w-2/5 xl:w-1/3 lg:h-80 xl:h-72 flex items-center justify-center">
                    <img
                        src="https://images.pexels.com/photos/7142962/pexels-photo-7142962.jpeg?auto=compress&cs=tinysrgb&w=800"
                        alt="Laughter Therapy"
                        className="w-full h-full object-contain"
                    />
                </div>
            </div>

            {/* Content Cards */}
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-6 mb-8">
                {/* Card 1: Heinrich's Expertise */}
                <div className="bg-black text-yellow-500 rounded-lg shadow-lg p-6 w-full sm:w-1/3">
                    <h3 className="text-xl font-bold mb-4 text-center">Heinrich's Expertise</h3>
                    <p className="text-center">
                        With a Master's degree in Laughter Therapy, Heinrich is highly qualified to lead seminars and courses that teach the transformative power of laughter.
                    </p>
                </div>

                {/* Card 2: Global Impact */}
                <div className="bg-black text-yellow-500 rounded-lg shadow-lg p-6 w-full sm:w-1/3">
                    <h3 className="text-xl font-bold mb-4 text-center">Global Impact</h3>
                    <p className="text-center">
                        Heinrich travels the world, bringing laughter to companies and communities through impactful seminars, conferences, and courses.
                    </p>
                </div>

                {/* Card 3: Positive Community Influence */}
                <div className="bg-black text-yellow-500 rounded-lg shadow-lg p-6 w-full sm:w-1/3">
                    <h3 className="text-xl font-bold mb-4 text-center">Positive Community Influence</h3>
                    <p className="text-center">
                        Through LaughNow 101, Heinrich’s work is creating a ripple effect of joy, helping people rediscover happiness and improve their mental health.
                    </p>
                </div>
            </div>
        </section>
    );
}
