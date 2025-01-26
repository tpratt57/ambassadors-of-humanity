// DownloadFlyer Component
const flyerPDF = "#";

const DownloadFlyer = () => {
    return (
        <div id="download-flyer" className="container mx-auto mt-20 p-6 text-center ">
            <h1 className="text-5xl font-extrabold text-white">Download Our Flyer</h1>
            <p className="text-lg text-yellow-300 mt-4 max-w-3xl mx-auto">
                Help spread awareness by downloading and sharing our informational flyer.
            </p>
            <a href={flyerPDF} download className="mt-6 inline-block px-6 py-3 bg-pink-500 text-white font-bold rounded-lg shadow-lg hover:bg-green-700 transition-all">
                Download PDF
            </a>
        </div>
    );
};

export default DownloadFlyer;