import '../../styles/footer.css';
import SocialLinks from './SocialLinks';

function Footer() {

  const currentYear = new Date().getFullYear()
  console.log(`Copyright © ${currentYear}`);
    
  return (
    <footer>
      <p>© {currentYear} Copyright • All Rights Reserved</p>
      <SocialLinks />
    </footer>
  )
}

export default Footer;
