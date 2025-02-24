import { useEffect } from 'react';
import PropTypes from 'prop-types';

const TableauEmbedBig = ({Dashboard}) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    script.async = true;
    document.body.appendChild(script);

    const divElement = document.getElementById('viz1740349661735');
    const vizElement = divElement.getElementsByTagName('object')[0];
    
    // Adjust height calculations
    if (divElement.offsetWidth > 800) {
      vizElement.style.width = '100%';
      vizElement.style.height = '600px';
    } else if (divElement.offsetWidth > 500) {
      vizElement.style.width = '100%';
      vizElement.style.height = '600px';
    } else {
      vizElement.style.width = '100%';
      vizElement.style.height = '600px';
    }

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
    className='tableauPlaceholder border-[#D98324] border-2 rounded-xl m-2 w-full'
    id='viz1740349661735'
    style={{ 
      position: 'relative', 
      width: '100%',
      height: '600px',
      maxHeight: '600px',
      overflow: 'hidden',
      display: 'block'
    }}
  >
      <noscript>
        <a href='#'>
          <img 
            alt='missing Dashboard'
            src={`https://public.tableau.com/static/images/${Dashboard}/1_rss.png`}
            style={{ border: 'none', width: '100%', height: 'auto' }}
          />
        </a>
      </noscript>
      <object 
        className='tableauViz' 
        style={{ 
          width: '100%', 
          height: '600px',
          minHeight: '600px',
          maxHeight: '600px'
        }}
      >
        <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
        <param name='embed_code_version' value='3' />
        <param name='site_root' value='' />
        <param name='name' value={Dashboard.slice(3)} />
        <param name='tabs' value='no' />
        <param name='toolbar' value='no' />
        <param 
          name='static_image'
          value={`https://public.tableau.com/static/images/GD/${Dashboard}/1.png`}
        />
      
        <param name='animate_transition' value='yes' />
        <param name='display_static_image' value='yes' />
        <param name='display_spinner' value='yes' />
        <param name='display_overlay' value='yes' />
        <param name='display_count' value='yes' />
        <param name='language' value='en-US' />
        <param name='filter' value='publish=yes' />
        <param name='showVizHome' value='no' />
        <param name='showTabs' value='no' />
        <param name='showShareOptions' value='no' />
        <param name='showDownloadButton' value='no' />
        <param name='showFullscreenButton' value='no' />
        <param name='showNewTabButton' value='no' />
        <param name='hideToolbar' value='true' />
        <param name='showWorkbook' value='no' />
        <param name='showEditButton' value='no' />
        <param name='showReloadButton' value='no' />
      </object>
    </div>
  );
};
TableauEmbedBig.propTypes = {
  Dashboard: PropTypes.string.isRequired,
};

export default TableauEmbedBig;
