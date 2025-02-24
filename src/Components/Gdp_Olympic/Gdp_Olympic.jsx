import TableauEmbedBig from "../Tableau/TableauEmbedBig";


const Gdp_Olympic = () => {
    return (
        
        <div id="scrolled_here"> 
             <div className="flex justify-center">  <h3 className="font-bold text-3xl p-4 mt-20 text-[#443627] rounded-xl border-2 border-[#D98324] bg-[#EFDCAB]">Global Olympic Achievement Dashboard: Medals, Maps, and Trends</h3></div>
           
           <div className="w-6/7 mx-auto h-[300] py-5">
               <TableauEmbedBig Dashboard={'Su/Summer_OlympicMedals/Dashboard1'}></TableauEmbedBig>
           </div>
            <div className="flex justify-center">  <h3 className="font-bold text-3xl p-4 mt-20 text-[#443627] rounded-xl border-2 border-[#D98324] bg-[#EFDCAB]">Economic Resources and Olympic Results: A Global Perspective</h3></div>
           
        <div className="w-6/7 mx-auto h-[300] py-5">
            <TableauEmbedBig Dashboard={'GD/GDPvsPerformance/Dashboard2'}></TableauEmbedBig>
        </div>
        {/* key-findings */}
        <div>
        <div className="w-full md:w-3/4 flex flex-col justify-center items-center mx-auto my-12 rounded-lg border-2 border-[#D98324]">
    <div className="hero bg-base-200 rounded-lg p-4">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={`${import.meta.env.BASE_URL}src/assets/coolDude.jpg`} className="w-1/2 max-w-xs md:max-w-sm rounded-xl shadow-2xl" />
        <div className="text-center lg:text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-[#443627]">Key Findings</h1>
          <ul className="list-disc mx-4 md:mx-8 my-4 marker:text-[#443627]">
            <li className="font-semibold text-[#D98324]">
              The USA consistently performs well even without hosting the Olympics.
            </li>
            
            <li>
              <span className="font-semibold text-[#D98324]">Strong Olympic performances: </span> 
              Include Italy, Australia, Germany, China, and Russia, while no Middle Eastern nation has shown consistent success.
            </li>
            
            <li>
              <span className="font-semibold text-[#D98324]">GDP&apos;s correlation with Olympic success:</span>
              <ul className="list-disc ml-6 marker:text-[#443627]">
                <li>Despite having one of the highest GDP per capita, Norway and Switzerland do not perform exceptionally well.</li>
                <li>Conversely, countries like Brazil, Ukraine, and Russia have achieved strong Olympic results despite lower GDP per capita.</li>
              </ul>
            </li>
            
            <li>
              <span className="font-semibold text-[#D98324]">Home advantage: </span>
              France leveraged the home advantage the most, winning its highest medal count when hosting the Olympics.
            </li>
            
            <li>
              <span className="font-semibold text-[#D98324]">Economic Impact: </span>
              Hosting the Olympics does not show a significant long-term impact on GDP growth.
            </li>
          </ul>
          <div className="flex justify-center lg:justify-start items-center gap-8">
            <a href="https://public.tableau.com/views/Summer_OlympicMedals/Dashboard1">
              <button className="btn bg-white border-[#D98324] border-2 text-[#D98324]">
                Dashboard-1
              </button>
            </a>
            <a href="https://public.tableau.com/views/GDPvsPerformance/Dashboard2">
              <button className="btn bg-white border-[#D98324] border-2 text-[#D98324]">
                Dashboard-2
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
        </div>
        </div>
    );
};

export default Gdp_Olympic;