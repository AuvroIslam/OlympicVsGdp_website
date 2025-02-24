import TableauEmbedBig from '../Tableau/TableauEmbedBig';
import coolDude from '../../assets/coolDude.jpg';

const Gdp_Olympic = () => {
  return (
    <div id="scrolled_here" className="container mx-auto px-4">
      {/* First Dashboard Section */}
      <section className="mb-20">
        <div className="flex justify-center mb-8">
          <h3 className="font-bold text-3xl p-4 text-[#443627] rounded-xl border-2 border-[#D98324] bg-[#EFDCAB]">
            Global Olympic Achievement Dashboard: Medals, Maps, and Trends
          </h3>
        </div>
        <div className="w-full">
          <TableauEmbedBig Dashboard={'Su/Summer_OlympicMedals/Dashboard1'} />
        </div>
      </section>

      {/* Second Dashboard Section */}
      <section className="mb-20">
        <div className="flex justify-center mb-8">
          <h3 className="font-bold text-3xl p-4 text-[#443627] rounded-xl border-2 border-[#D98324] bg-[#EFDCAB]">
            Economic Resources and Olympic Results: A Global Perspective
          </h3>
        </div>
        <div className="w-full">
          <TableauEmbedBig Dashboard={'GD/GDPvsPerformance/Dashboard2'} />
        </div>
      </section>

      {/* Key Findings Section */}
      <section className="mb-20">
        <div className="w-3/4 mx-auto rounded-lg border-2 border-[#D98324] ">
          <div className="hero bg-base-200 rounded-lg p-4">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img
                src={coolDude}
                className="w-full lg:w-1/2 max-w-xs md:max-w-sm rounded-xl shadow-2xl mb-8 lg:mb-0"
                alt="Cool Dude"
              />
              <div className="text-center lg:text-left">
                <h1 className="text-3xl md:text-5xl font-bold text-[#443627] mb-6">
                  Key Findings
                </h1>
                <ul className="list-disc mx-4 md:mx-8 my-4 marker:text-[#443627] space-y-4">

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
                <div className="flex justify-center lg:justify-start items-center gap-8 mt-8">
                  <a href="https://public.tableau.com/views/Summer_OlympicMedals/Dashboard1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="btn bg-white border-[#D98324] border-2 text-[#D98324] hover:bg-[#D98324] hover:text-white transition-colors">
                      Dashboard-1
                    </button>
                  </a>
                  <a href="https://public.tableau.com/views/GDPvsPerformance/Dashboard2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="btn bg-white border-[#D98324] border-2 text-[#D98324] hover:bg-[#D98324] hover:text-white transition-colors">
                      Dashboard-2
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gdp_Olympic;