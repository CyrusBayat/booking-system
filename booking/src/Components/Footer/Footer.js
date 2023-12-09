
import './Footer.css';
import logoWhiteImage from '../../Assits/logo-white.png';

const contacts = [
    { icon: <i className="fa-solid fa-location-dot"></i>, info: '678 Pisa Ave, Chicago, IL 60611', },
    { icon: <i className="fa-solid fa-phone"></i>, info: '(312) 593-2744', },
    { icon: <i className="fa-solid fa-envelope"></i>, info: 'customer@littlelemon.com', },
];


function Footer() {
    return (
        <footer>
            <div className="footer">
                <img
                    className="site-footer-logo"
                    src={logoWhiteImage}
                    alt="Little Lemon"
                />
                <div className="footer-contact">
                    <h4>Contact us</h4>
                    <address>
                        {contacts.map((contact, index) =>
                            <p key={index}>
                                {contact.icon} {contact.info}
                            </p>
                        )}
                    </address>
                </div>
                <div className="footer-social">
                    <h4>Connect with us</h4>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social" >
                        <i className="fa-brands fa-facebook"></i>
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="social" >
                        <i className="fa-brands fa-x-twitter"></i>
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social" >
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="social">
                        <i className="fa-brands fa-youtube"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;