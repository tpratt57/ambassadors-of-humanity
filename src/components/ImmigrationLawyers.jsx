// ImmigrationLawyers Component
const ImmigrationLawyers = () => {
    return (
        <div id="immigration-lawyers" className="container mx-auto mt-20 p-6 text-center ">
            <h1 className="text-5xl font-extrabold text-white">Immigration Lawyers</h1>
            <p className="text-lg text-yellow-300 mt-4 max-w-3xl mx-auto">
                We connect individuals with trusted immigration lawyers who can provide legal assistance with visas, green cards, asylum cases, and more.
            </p>
            <div className="mt-6 space-y-4">
                <div className="p-4 border rounded-lg shadow-md bg-white">
                    <h3 className="text-2xl font-bold text-gray-900">John Doe, Esq.</h3>
                    <p className="text-gray-700">Specialty: Family Immigration, Green Cards</p>
                    <p className="text-gray-700">Location: New York, NY</p>
                </div>
                <div className="p-4 border rounded-lg shadow-md bg-white">
                    <h3 className="text-2xl font-bold text-gray-900">Jane Smith, Esq.</h3>
                    <p className="text-gray-700">Specialty: Asylum & Deportation Defense</p>
                    <p className="text-gray-700">Location: Los Angeles, CA</p>
                </div>
            </div>
        </div>
    );
};

export default ImmigrationLawyers;
