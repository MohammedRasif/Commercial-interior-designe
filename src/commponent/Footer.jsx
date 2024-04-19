
const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-gray-800 text-white">
                <aside>
                     <h1 className="text-4xl font-bold">RASIF</h1>
                    <p>RASIF Industries Ltd.<br/>Providing reliable tech since 1992</p>
                </aside> 
                <nav>
                    <h6 className="footer-title">Services</h6> 
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav> 
                <nav>
                    <h6 className="footer-title">CALL US</h6> 
                    <a className="link link-hover">+7(111)123456789</a>
                    <a className="link link-hover">+1(999)987654321</a>
                    <a className="link link-hover">+9(555)6541123987</a>
                </nav> 
                <nav>
                    <h6 className="footer-title">WRITE</h6> 
                    <a className="link link-hover">contact@rasif.com</a>
                    <a className="link link-hover">username@website.com</a>
                    <a className="link link-hover">rasif@gmail.com</a>
                </nav>
                <nav>
                    <h6 className="footer-title">VISIT</h6> 
                    <a className="link link-hover">1873 CUFL Road</a>
                    <a className="link link-hover">Bairag,Anowara,Chittagong</a>
                    <a className="link link-hover">BD</a>
                </nav>
                </footer>
        </div>
    );
};

export default Footer;