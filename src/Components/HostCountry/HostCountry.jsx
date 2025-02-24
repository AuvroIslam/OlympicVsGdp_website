import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import TableauEmbed from '../Tableau/TableauEmbed';

const HostCountry = ({hostedCountry}) => {
    const {country, host_place, economic_situation, olympic_performance} = hostedCountry;
    const [imageSrc, setImageSrc] = useState('');

    useEffect(() => {
        // Dynamic import of image
        const imageUrl = new URL(`../../assets/${country}.jpg`, import.meta.url).href;
        setImageSrc(imageUrl);
    }, [country]);

    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm h-[500px]">
                <figure className='my-0 mt-4 h-[200px]'>
                    <img 
                        className="rounded-xl w-6/7 mx-auto h-full"
                        src={imageSrc}
                        alt={host_place} 
                    />
                </figure>
                <div className="card-body">
    <h2 className="card-title">{`${host_place}-Olympics`}</h2>
    <p>{economic_situation}</p>
    <div className="card-actions justify-end">
     
<button className="btn  bg-[#D98324] border-[#D98324] shadow-none text-[#F2F6D0]" onClick={()=>document.getElementById(`${country}Modal`).showModal()}>Performance</button>
<dialog id={`${country}Modal`} className="modal modal-bottom sm:modal-middle">
  <div className="modal-box bg-[#FFF8E6]">
    
    <TableauEmbed country={country} />
    <p className="py-4">{olympic_performance}</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn  bg-[#D98324] border-[#D98324] shadow-none text-[#F2F6D0]">Close</button>
      </form>
    </div>
  </div>
</dialog>
    </div>
  </div>
</div>
        </div>
    );
};

HostCountry.propTypes = {
    hostedCountry: PropTypes.shape({
        country: PropTypes.string.isRequired,
        host_place: PropTypes.string.isRequired,
        economic_situation: PropTypes.string.isRequired,
        olympic_performance: PropTypes.string.isRequired,
    }).isRequired,
};

export default HostCountry;

