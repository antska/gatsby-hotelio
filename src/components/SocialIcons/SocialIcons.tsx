import React from 'react';
import { FaInstagram, FaFacebookF, FaTripadvisor } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const SocialIcons = () => (
  <>
    <a
      className="social-icon bg-facebook"
      href="https://www.facebook.com/Studio-Eleni-Paros-426282504075994/"
      target="_blank"
      rel="noopener norefferer"
      aria-label="Facebook"
    >
      <FaFacebookF className="inline-block" title="Facebook" />
    </a>
    <a
      className="social-icon bg-instagram"
      href="https://instagram.com/studioseleniparos"
      target="_blank"
      rel="noopener norefferer"
      aria-label="Instagram"
    >
      <FaInstagram className="inline-block" title="Instagram" />
    </a>
    <a
      className="social-icon bg-tripadvisor"
      href="https://www.tripadvisor.com/Hotel_Review-g1190421-d3437250-Reviews-Helen_s_Minimal_Studios-Aliki_Paros_Cyclades_South_Aegean.html"
      target="_blank"
      rel="noopener norefferer"
      aria-label="TripAdvisor"
    >
      <FaTripadvisor className="inline-block" title="TripAdvisor" />
    </a>
    <a
      className="social-icon bg-email"
      href="mailto:info@helenstudios.com"
      target="_blank"
      rel="noopener norefferer"
      aria-label="Email"
    >
      <FiMail className="inline-block" title="e-mail" />
    </a>
  </>
);

export default SocialIcons;
