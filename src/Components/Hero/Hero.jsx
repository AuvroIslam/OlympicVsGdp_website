import backgroundPic from '/src/assets/rio-stadium-watch.png'
import { scrollToSection } from '../Utilities/scrollUtils';
const Hero = () => {
    return (
        <div className="w-3/4 mx-auto h-1/2 py-20">
            <div
  className="hero min-h-screen rounded-xl "
  style={{
    backgroundImage: `url(${backgroundPic})`

  }}>
  <div className="hero-overlay rounded-xl"></div>
  <div className="hero-content text-neutral-content text-center ">
    <div className="max-w-md ">
      <h1 className="mb-5 text-3xl font-semibold text-[#EFDCAB]">GDP & Olympic Performance Analysis</h1>
      <p className="mb-5">
      This project analyzes how GDP influences Olympic success and the economic impact of hosting the Games using data visualization.
      </p>
      <button className="btn  bg-[#EFDCAB] border-[#D98324] shadow-none text-[#D98324]" onClick={()=>{scrollToSection("scrolled_here")}}>Dashboards</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Hero;