import React, { useEffect } from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/GitHub';
import '../Footer/Footer.css';
import Granim from 'granim';

function Footer() {
  useEffect(() => {
    new Granim({
      element: '#logo-canvas',
      direction: 'left-right',
      opacity: [1, 1],
      states: {
        'default-state': {
          gradients: [
            ['#ee9ca7', '#0f9b0f'],
            ['#ffdde1', '#ff9a9e'],
            ['#ff7b59', '#ff4d00'],
            ['#ff9a9e', '#ffdde1'],
            ['#ff4d00', '#ff7b59'],
            ['#ffdde1', '#ff9a9e'],
          ],
          transitionSpeed: 2000,
        },
      },
    });
  }, []);

  return (
    <div className="bloc-logo">
      <canvas id="logo-canvas" />

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
        <p>&copy; 2023 Viraj</p>
      </div>
    </div>
  );
}

export default Footer;
