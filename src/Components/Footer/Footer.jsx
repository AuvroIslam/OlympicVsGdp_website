
import gmail from '/src/assets//gmail.png';
import github from '/src/assets//github.png';
import facebook from '/src/assets/facebook.png';
const Footer = () => {
    return (
        <div>
          
            <div className="footer footer-center bg-[#443627] text-primary-content p-10 flex flex-col">
        <aside>
          <p className="font-bold">
            Oitijya Islam Auvro
          </p>
          <ul className="list-disc marker:text-[#D98324]">
            <li><span className="font-semibold text-[#D98324]">Gmail:</span> oitijya2002@gmail.com</li>
            <li><span className="font-semibold text-[#D98324]">Github:</span> github.com/AuvroIslam</li>

          </ul>
          <p className="mt-2">Copyright © 2025- All right reserved</p>
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a href="mailto:oitijya2002@gmail.com">
              <img src={gmail} className="w-6 h-6" alt="" />
            </a>
            <a href={github}>
                <img src="/src/assets//github.png" className="w-6 h-6" alt="" />
              </a>
              <a href={facebook}>
                <img src="/src/assets/facebook.png" className="w-6 h-6" alt="" />
              </a>
          </div>
        </nav>
      </div>
        </div>
    );
};

export default Footer;