

const Setup = () => {
    return (
        <div className="py-12">
            <div className="w-full md:w-3/4 flex flex-col justify-center items-center mx-auto  rounded-lg border-2 border-[#D98324]">
    <div className="hero bg-base-200 rounded-lg p-4">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
                <h1 className="text-3xl md:text-5xl font-bold text-[#443627]">📝 Setup Instructions:</h1>
                <ul className="list-disc mx-4 md:mx-8 my-4 marker:text-[#443627]">
                    <li className="font-semibold ">Clone the repository, install dependencies, and run the model in Jupyter Notebooks or Google Colab for testing and further development.</li>
                    <li className="font-semibold ">You can get the scrapped data <a className="link text-[#D98324]" href="https://github.com/AuvroIslam/Olympic-vs-Gdp/tree/main/data">here.</a></li>
                    <li className="font-semibold ">For more details, check out the <a className="link text-[#D98324]" href="https://github.com/AuvroIslam/Olympic-vs-Gdp">full documentation.</a></li>
                    
                </ul>
               
            </div>
        </div>
    </div>



</div>
        </div>
    );
};

export default Setup;