import PropTypes from 'prop-types';

const TableauEmbed = ({ country }) => {
  // Create the Tableau URL with the correct workbook and view names
  const tableauUrl = `https://public.tableau.com/views/HostcountryAdvantage/${country.replace(/\s+/g, '')}?:showVizHome=no&:embed=true`;

  return (
    <div className='border-[#D98324] border-2 rounded-xl m-2'>
      <iframe
        title={`${country} Olympic Performance`}
        src={tableauUrl}
        width="100%"
        height="300"
        
        style={{
          border: 'none',
          borderRadius: '0.75rem'
        }}
        allowFullScreen
      />
    </div>
  );
};

TableauEmbed.propTypes = {
  country: PropTypes.string.isRequired,
};

export default TableauEmbed;