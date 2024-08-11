import React from 'react';

export default function Benefits() {

    const pdfUrl = 'https://raw.githubusercontent.com/Gotcha1001/My-Images-for-sites-Wes/main/Benefits%20of%20laughter.pdf';

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
            <div className="relative z-10 container mx-auto max-w-3xl  rounded-lg p-6 mb-6">
                {/* Title Section */}
                <div>
                    <h1 className="text-2xl font-serif font-bold mb-4 text-center text-gray-200 animate-bounce">Therapeutic Benefits of Laughter in Mental Health</h1>
                </div>

                {/* Download PDF Button */}
                <div className="flex justify-center mb-8">
                    <a
                        href={pdfUrl}
                        download
                        className="inline-block px-3 py-2 gradient-background2 text-white font-semibold rounded-lg shadow-neon transition-all duration-300 ease-in-out transform hover:scale-105  "
                    >
                        Download Therapeutic Benefits PDF
                    </a>
                </div>

                {/* Introduction Section */}
                <div>
                    <h2 className="text-xl font-semibold mb-4 text-center text-white">Introduction</h2>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 ">
                        {/* Card Content */}
                        {[
                            "In modern society, fierce competition and socioeconomic interaction stress the quality of life, causing a negative influence on a person’s mental health. Laughter is a positive sensation and seems to be a useful and healthy way to overcome stress.",
                            "Laughter therapy is a kind of cognitive-behavioral therapy that could make physical, psychological, and social relationships healthy, ultimately improving the quality of life. Laughter therapy, as a non-pharmacological, alternative treatment, has a positive effect on mental health and the immune system.",
                            "In addition, laughter therapy does not require specialized preparations, such as suitable facilities and equipment, and it is easily accessible and acceptable. For these reasons, the medical community has taken notice and attempted to include laughter therapy in more traditional therapies.",
                            "Decreasing stress-making hormones found in the blood, laughter can mitigate the effects of stress. Laughter decreases serum levels of cortisol, epinephrine, growth hormone, and 3,4-dihydrophenylacetic acid (a major dopamine catabolite), indicating a reversal of the stress response.",
                            "Depression is a disease where neurotransmitters in the brain, such as norepinephrine, dopamine, and serotonin, are reduced, and there is something wrong in the mood control circuit of the brain. Laughter can alter dopamine and serotonin activity.",
                            "Furthermore, endorphins secreted by laughter can help when people are uncomfortable or in a depressed mood. Laughter therapy is a noninvasive and non-pharmacological alternative treatment for stress and depression, representative cases that have a negative influence on mental health.",
                            "In conclusion, laughter therapy is effective and scientifically supported as a single or adjuvant therapy.",
                            "Review : Therapeutic Benefits of Laughter in Mental Health: A Theoretical Review JongEun Yim1 1Department of Physical Therapy, Sahmyook University, Seoul, Republic of Korea.",
                            "Keywords: alternative treatment; depression; laughter; mental health; stress Tohoku J. Exp. Med., 2016 July, 239 (3), 243-249. © 2016 Tohoku University Medical Press."
                        ].map((text, index) => (
                            <div key={index} className="bg-white shadow-lg rounded-lg p-6">
                                <p>{text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Laughter Theories Section */}
                <div>
                    <h2 className="text-xl font-semibold mb-4 text-center mt-4  zoom ">Laughter Theories</h2>
                    <ul className="list-disc list-inside text-white mb-4 text-center shadow-neon rounded-lg p-4 bg-black transition-all duration-300 ease-in-out transform hover:scale-105">
                        <li><strong>Arousal Theory:</strong> Stress increases arousal, while laughter reduces stress by easing arousal and tension.</li>
                        <li><strong>Discrepancy Theory:</strong> Laughter arises from recognizing a discrepancy between expectation and reality.</li>
                        <li><strong>Superiority Theory:</strong> Laughter occurs when people feel superior to others or when they see others in a lesser light.</li>
                    </ul>
                </div>

                {/* Categories of Laughter Section */}
                <div>
                    <h2 className="text-xl font-semibold mb-9 text-center  mt-8 zoom ">Categories of Laughter</h2>
                    <div className="flex flex-wrap justify-center gap-6 ">
                        {[
                            { title: "Spontaneous Laughter", description: "Triggered by external stimuli and positive emotions." },
                            { title: "Simulated Laughter", description: "Self-induced without specific reason, not elicited by humor." },
                            { title: "Stimulated Laughter", description: "Caused by physical contact or reflexive actions." },
                            { title: "Induced Laughter", description: "Result of specific drugs or substances." },
                            { title: "Pathological Laughter", description: "Associated with neurological diseases or psychiatric disorders." }
                        ].map((item, index) => (
                            <div key={index} className="bg-white shadow-lg rounded-lg p-6 max-w-xs w-full">
                                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                <p className="text-gray-700">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Physiological and Psychological Effects Section */}
                <div>
                    <h2 className="text-xl font-semibold mb-4 mt-4 text-center zoom ">Physiological and Psychological Effects of Laughter</h2>
                    <ul className="list-disc list-inside text-white mb-4 text-center shadow-neon rounded-lg p-3 bg-black transition-all duration-300 ease-in-out transform hover:scale-105 ">
                        <li>Exercises and relaxes muscles.</li>
                        <li>Improves respiration.</li>
                        <li>Stimulates circulation.</li>
                        <li>Decreases stress hormones.</li>
                        <li>Increases immune system’s defenses.</li>
                        <li>Elevates pain threshold and tolerance.</li>
                        <li>Enhances mental function.</li>
                    </ul>
                </div>

                {/* Summary of Benefits Section */}
                <div>
                    <h2 className="text-xl font-semibold mb-4 text-center zoom ">Summary of Benefits</h2>
                    <p className="text-gray-900 mb-4 mx-auto max-w-prose bg-white rounded-md p-3 transition-all duration-300 ease-in-out transform hover:scale-105 ">
                        Laughter therapy is a valuable tool in enhancing mental health and well-being. By integrating laughter
                        into daily life, individuals can experience reduced stress, improved mood, and a strengthened immune
                        system. The various theories and categories of laughter highlight its complex role in human emotions
                        and interactions. From spontaneous to pathological laughter, understanding these aspects can help in
                        utilizing laughter as a therapeutic method. Embracing laughter therapy can lead to significant improvements
                        in both physiological and psychological health, making it an accessible and effective complement to
                        traditional therapeutic approaches.
                    </p>
                </div>

                {/* Laughter as Medicine Section */}
                <div>
                    <h2 className="text-xl font-semibold mb-4 text-center zoom">Laughter as Medicine</h2>
                    <p className="text-gray-900 mb-4 mx-auto max-w-prose bg-white rounded-md p-3 transition-all duration-300 ease-in-out transform hover:scale-105">
                        Laughter is often considered the best medicine. It has a profound effect on mental and physical health,
                        making it a valuable tool for overall well-being. Integrating laughter into daily life can lead to
                        significant health benefits, including stress reduction and improved quality of life. As research
                        continues to explore the therapeutic potential of laughter, it is clear that incorporating laughter
                        therapy into various treatment plans can be a powerful and positive step towards holistic health
                        and wellness.
                    </p>
                </div>

                <div>

                    <div className="text-center mb-4 transition-all duration-300 ease-in-out transform hover:scale-105">
                        <img
                            src="https://images.pexels.com/photos/708440/pexels-photo-708440.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Laughter Therapy"
                            className="mx-auto rounded-lg shadow-lg"
                        />
                    </div>
                </div>

                {/* Mental Health Benefits Section */}
                <div>
                    <h2 className="text-xl font-semibold mb-4 text-center animate-bounce">Mental Health Benefits of Laughter</h2>
                    <p className="text-gray-900 mb-4 mx-auto max-w-prose bg-white rounded-md p-3 transition-all duration-300 ease-in-out transform hover:scale-105">
                        Laughter has been shown to have several mental health benefits. It can reduce symptoms of depression,
                        anxiety, and stress, providing a natural way to improve emotional well-being. By promoting a positive
                        outlook and reducing negative emotions, laughter contributes to overall mental health and resilience.
                        Engaging in laughter and humor can also strengthen social bonds and create a supportive environment
                        for individuals dealing with mental health challenges.
                    </p>
                </div>

                {/* Encouragement for Regular Laughter */}
                <div className="text-center mt-12">
                    <p className="text-lg font-semibold text-gray-400 zoom shadow-neon rounded-md p-4 bg-black">
                        Embrace laughter as a daily practice and discover its transformative effects on your mental and physical well-being!
                    </p>
                </div>
            </div>
        </section>
    );
}
