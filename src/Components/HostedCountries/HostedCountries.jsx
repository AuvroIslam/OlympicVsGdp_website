import { useState, useEffect } from 'react';
import HostCountry from '../HostCountry/HostCountry';
import hostedCountriesData from '../../assets/hosted_countries.json';

const HostedCountries = () => {
    const [hostedCountries, setHostedCountries] = useState([]);
    
    useEffect(() => {
        setHostedCountries(hostedCountriesData);
    }, []);

    return (
        <div className='grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {
                hostedCountries.map((hostedCountry,index) => (
                    <HostCountry key={index} hostedCountry={hostedCountry} />
                ))
            }
        </div>
    );
};

export default HostedCountries;