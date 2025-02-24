
import { scrollToSection } from '../Utilities/scrollUtils';
const Navbar = () => {
    return (
        <div>
           
            <div className="navbar bg-base-200  flex-col md:flex-row border-b-2 border-[#443627]">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl font-bold text-[#443627] ">GDP vs Olympic Performance Analysis</a>
                </div>
                <div className="flex-none">
                    
                       
                <button className="btn  bg-[#EFDCAB] border-[#D98324] shadow-none text-[#D98324] " onClick={()=>{scrollToSection("scrolled_here")}}>Dashboards</button>
                       

                    
                </div>
            </div>
      
        </div>
    );
};

export default Navbar;