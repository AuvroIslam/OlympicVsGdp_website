import { useEffect } from 'react';
import PropTypes from 'prop-types';

const TableauEmbed = ({country}) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    script.async = true;
    document.body.appendChild(script);

    // Add this part to handle the visualization sizing
    const divElement = document.getElementById('viz1740341585631');
    const vizElement = divElement.getElementsByTagName('object')[0];
    vizElement.style.width = '100%';
    // Calculate height based on width to maintain aspect ratio
    vizElement.style.height = (divElement.offsetWidth * 0.5) + 'px';

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className='tableauPlaceholder border-[#D98324]  border-2 rounded-xl m-2'
      id='viz1740341585631'
      style={{ 
        position: 'relative', 
        width: '100%', 
        height: '300px', // Reduced height
        maxHeight: '100vh', // Ensure it doesn't exceed viewport height
        overflow: 'hidden' // Prevent scrolling
        
      }}
    >
      <noscript>
        <a href='#'>
          <img 
            alt=' '
            src={`https://public.tableau.com/static/images/Ho/HostcountryAdvantage/${country.replace(/\s+/g, '')}/1_rss.png`}
            style={{ border: 'none', width: '100%', height: 'auto' }}
          />
        </a>
      </noscript>
      <object 
        className='tableauViz' 
        style={{ 
          width: '100%', 
          height: '100%',
          minHeight: '250px', // Minimum height
          maxHeight: '300px' // Maximum height
        }}
      >
        <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
        <param name='embed_code_version' value='3' />
        <param name='site_root' value='' />
        <param name='name' value={`HostcountryAdvantage/${country.replace(/\s+/g, '')}`}/>
        <param name='tabs' value='no' /> {/* Changed to 'no' to save space */}
        <param name='toolbar' value='no' /> {/* Changed to 'no' to save space */}
        <param 
          name='static_image'
          value={`https://public.tableau.com/static/images/Ho/HostcountryAdvantage/${country.replace(/\s+/g, '')}/1.png`}
        />
        <param name='animate_transition' value='yes' />
        <param name='display_static_image' value='yes' />
        <param name='display_spinner' value='yes' />
        <param name='display_overlay' value='yes' />
        <param name='display_count' value='yes' />
        <param name='language' value='en-US' />
        <param name='filter' value='publish=yes' />
      
      </object>
    </div>
  );
};

TableauEmbed.propTypes = {
  country: PropTypes.string.isRequired,
};

export default TableauEmbed;