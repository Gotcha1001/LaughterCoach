import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
    return (
        <section className="p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 2xl:p-16 bg-gray-100">
            <div className="text-center font-serif text-4xl font-bold text-primary-950 mb-8">
                Contact Us
            </div>

            <div className="flex justify-center mb-8">
                <img
                    src="https://images.pexels.com/photos/207489/pexels-photo-207489.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Placeholder Image"
                    className="rounded-lg shadow-lg"
                />
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-6 mb-8">
                {/* Banking Details Card */}
                <div className="bg-black text-yellow-500 rounded-lg shadow-lg p-6 w-full sm:w-1/3">
                    <h3 className="text-xl font-bold mb-4 text-center">Banking Details</h3>
                    <p className="mb-2">1234 5678 9101 1121 - Fake Bank</p>
                    <p className="mb-2">Account Name: John Doe</p>
                    <p className="mb-2">SWIFT Code: FAKE1234</p>
                </div>

                {/* Address Card */}
                <div className="bg-black text-yellow-500 rounded-lg shadow-lg p-6 w-full sm:w-1/3">
                    <h3 className="text-xl font-bold mb-4 text-center">Address</h3>
                    <p className="mb-2">1234 Fake Street</p>
                    <p className="mb-2">Fictionland, FL 56789</p>
                </div>

                {/* Contact Info Card */}
                <div className="bg-black text-yellow-500 rounded-lg shadow-lg p-6 w-full sm:w-1/3">
                    <h3 className="text-xl font-bold mb-4 text-center">Contact Information</h3>
                    <p className="mb-2">
                        Telephone: <a href="tel:+1234567890" className="text-yellow-300 hover:underline">(123) 456-7890</a>
                    </p>
                    <p className="mb-2">
                        Email: <a href="mailto:fakeemail@example.com" className="text-yellow-300 hover:underline">fakeemail@example.com</a>
                    </p>
                </div>
            </div>

            <div className="flex justify-center space-x-4 mb-8">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebook size={40} className="text-blue-600 hover:opacity-75" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={40} className="text-pink-600 hover:opacity-75" />
                </a>
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp size={40} className="text-green-600 hover:opacity-75" />
                </a>
            </div>
        </section>
    );
}
