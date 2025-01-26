// Donate Component
import paypalQR from "../assets/paypal-qr.png";
import zelleQR from "../assets/zelle-qr.png";
import venmoQR from "../assets/venmo-qr.png";

const Donate = () => {
    return (
        <div id="donation" className="container mx-auto mt-20 p-6 text-center ">
            <h1 className="text-5xl font-extrabold text-white">Support Our Mission</h1>
            <p className="text-lg text-yellow-300 mt-4 max-w-3xl mx-auto">
                Your contributions help provide legal assistance, resources, and support to immigrant families in need. Every donation makes a difference.
            </p>
            <div className="mt-6 flex flex-col md:flex-row justify-center items-center gap-8">
                <div className="p-4 border rounded-lg shadow-md bg-white text-center">
                    <h3 className="text-2xl font-bold text-gray-900">Donate via PayPal</h3>
                    <img src={paypalQR} alt="PayPal QR Code" className="w-40 mx-auto mt-4" />
                </div>
                <div className="p-4 border rounded-lg shadow-md bg-white text-center">
                    <h3 className="text-2xl font-bold text-gray-900">Donate via Zelle</h3>
                    <img src={zelleQR} alt="Zelle QR Code" className="w-40 mx-auto mt-4" />
                </div>
                <div className="p-4 border rounded-lg shadow-md bg-white text-center">
                    <h3 className="text-2xl font-bold text-gray-900">Donate via Venmo</h3>
                    <img src={venmoQR} alt="Venmo QR Code" className="w-40 mx-auto mt-4" />
                </div>
            </div>
        </div>
    );
};

export default Donate;