import React from 'react';
import { FaInstagram, FaFacebookF, FaTripadvisor } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const SocialIcons = () => (
  <>
    <a
      className="social-icon bg-facebook hover:bg-white hover:text-facebook"
      href="https://www.facebook.com/Studio-Eleni-Paros-426282504075994/"
      target="_blank"
      rel="noopener norefferer"
      aria-label="Facebook"
      data-sal="fade"
      data-sal-duration="700"
      data-sal-delay="100"
      data-sal-easing="easeInSine"
    >
      <FaFacebookF className="hover:text-facebook" size="24" title="Facebook" />
    </a>
    <a
      className="social-icon bg-instagram hover:bg-white hover:text-instagram"
      href="https://instagram.com/studioseleniparos"
      target="_blank"
      rel="noopener norefferer"
      aria-label="Instagram"
      data-sal="fade"
      data-sal-duration="700"
      data-sal-delay="200"
      data-sal-easing="easeInSine"
    >
      <FaInstagram className="hover:text-instagram" size="24" title="Instagram" />
    </a>
    <a
      className="social-icon bg-tripadvisor hover:bg-white hover:text-tripadvisor"
      href="https://www.tripadvisor.com/Hotel_Review-g1190421-d3437250-Reviews-Helen_s_Minimal_Studios-Aliki_Paros_Cyclades_South_Aegean.html"
      target="_blank"
      rel="noopener norefferer"
      aria-label="TripAdvisor"
      data-sal="fade"
      data-sal-duration="700"
      data-sal-delay="300"
      data-sal-easing="easeInSine"
    >
      <FaTripadvisor className="hover:text-tripadvisor" size="24" title="TripAdvisor" />
    </a>
    <a
      className="social-icon bg-email hover:bg-white hover:text-email"
      href="mailto:info@helenstudios.com"
      target="_blank"
      rel="noopener norefferer"
      aria-label="Email"
      data-sal="fade"
      data-sal-duration="700"
      data-sal-delay="400"
      data-sal-easing="easeInSine"
    >
      <FiMail className="hover:text-email" size="24" title="e-mail" />
    </a>
  </>
);

export default SocialIcons;
