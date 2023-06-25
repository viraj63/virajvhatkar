import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/GitHub';
import '../Footer/Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
      <a href="https://www.instagram.com/viraj_vhatkar.6/">
          <InstagramIcon />
        </a>
        <a href="https://twitter.com/VirajVhatkar">
          <TwitterIcon />
        </a>
        <a href="https://www.linkedin.com/in/viraj-vhatkar">
          <LinkedInIcon />
        </a>
        <a href="https://github.com/viraj63">
          <YouTubeIcon />
        </a>
      </div>
      <p>
        &copy; 2023 Viraj Viraj
      </p>
    </div>
  );
}

export default Footer;