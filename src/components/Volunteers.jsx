// Volunteers Component
const Volunteers = () => {
    return (
        <div id="volunteers" className="container mx-auto mt-20 p-6 text-center ">
            <h1 className="text-5xl font-extrabold text-white">Get Involved as a Volunteer</h1>
            <p className="text-lg text-yellow-300 mt-4 max-w-3xl mx-auto">
                Join us in making a difference. Volunteers play a vital role in providing support, advocacy, and resources to immigrant families in need.
            </p>
            <p className="text-lg text-yellow-300 mt-4 max-w-3xl mx-auto">
                Whether it's offering legal assistance, spreading awareness, or helping with community outreach, your time and dedication can help change lives.
            </p>
            <button className="mt-6 px-6 py-3 bg-pink-500 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition-all">
                Sign Up to Volunteer
            </button>
        </div>
    );
};

export default Volunteers;
