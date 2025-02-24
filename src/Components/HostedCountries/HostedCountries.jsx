import  { useEffect, useState } from 'react';
import HostCountry from '../HostCountry/HostCountry';


const HostedCountries = () => {
    const [hostedCountries, setHostedCountries] = useState([]);
    useEffect(() => {
        const fetchHostedCountries = async () => {
            const response = await fetch('/src/assets/hosted_countries.json');
            const data = await response.json();
            setHostedCountries(data);
        };
        fetchHostedCountries();
       
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