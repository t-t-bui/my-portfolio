import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../styles/footer.css';

export default function Footer() {
  return (
    <footer className="footer text-white px-6 py-4 w-full">
        <div className='container'>
            <div className='footer-text'>
                &copy; 2025 Tri Bui. All rights reserved.
            </div>
            <div className='social-icons'>
                <a href="https://www.instagram.com/t_t_bui/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                <a href="https://www.linkedin.com/in/tri-bui-9b050777/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
            </div>
        </div>
    </footer>
  );
}