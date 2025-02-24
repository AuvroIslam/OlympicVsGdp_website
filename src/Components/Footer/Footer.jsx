import gmail from '../../assets/gmail.png';
import github from '../../assets/github.png';
import facebook from '../../assets/facebook.png';

const Footer = () => {
    const socialLinks = {
        email: 'oitijya2002@gmail.com',
        github: 'https://github.com/AuvroIslam',
        facebook: 'https://facebook.com/YourProfile' // Replace with your Facebook profile
    };

    return (
        <div>
            <div className="footer footer-center bg-[#443627] text-primary-content p-10 flex flex-col">
                <aside>
                    <p className="font-bold">
                        Oitijya Islam Auvro
                    </p>
                    <ul className="list-disc marker:text-[#D98324]">
                        <li>
                            <span className="font-semibold text-[#D98324]">Gmail:</span>
                            <a 
                                href={`mailto:${socialLinks.email}`}
                                className="hover:text-[#D98324] ml-1"
                            > 
                                {socialLinks.email}
                            </a>
                        </li>
                        <li>
                            <span className="font-semibold text-[#D98324]">Github:</span>
                            <a 
                                href={socialLinks.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#D98324] ml-1"
                            > 
                                github.com/AuvroIslam
                            </a>
                        </li>
                    </ul>
                    <p className="mt-2">
                        Copyright © {new Date().getFullYear()} - All rights reserved
                    </p>
                </aside>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <a 
                            href={`mailto:${socialLinks.email}`}
                            className="hover:opacity-80 transition-opacity"
                        >
                            <img 
                                src={gmail} 
                                className="w-6 h-6" 
                                alt="Gmail" 
                            />
                        </a>
                        <a 
                            href={socialLinks.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:opacity-80 transition-opacity"
                        >
                            <img 
                                src={github} 
                                className="w-6 h-6" 
                                alt="GitHub" 
                            />
                        </a>
                        <a 
                            href={socialLinks.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:opacity-80 transition-opacity"
                        >
                            <img 
                                src={facebook} 
                                className="w-6 h-6" 
                                alt="Facebook" 
                            />
                        </a>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Footer;