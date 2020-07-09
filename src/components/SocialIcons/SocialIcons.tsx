import React from 'react';
import { FaInstagram, FaFacebookF, FaTripadvisor } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { motion } from 'framer-motion';

const SocialIcons = () => (
  <>
    <motion.a
      className="social-icon bg-facebook hover:bg-white hover:text-facebook"
      href="https://www.facebook.com/Studio-Eleni-Paros-426282504075994/"
      target="_blank"
      rel="noopener norefferer"
      aria-label="Facebook"
    >
      <FaFacebookF className="hover:text-facebook" size="24" title="Facebook" />
    </motion.a>
    <a
      className="social-icon bg-instagram hover:bg-white hover:text-instagram"
      href="https://instagram.com/studioseleniparos"
      target="_blank"
      rel="noopener norefferer"
      aria-label="Instagram"
    >
      <FaInstagram className="hover:text-instagram" size="24" title="Instagram" />
    </a>
    <a
      className="social-icon bg-tripadvisor hover:bg-white hover:text-tripadvisor"
      href="https://www.tripadvisor.com/Hotel_Review-g1190421-d3437250-Reviews-Helen_s_Minimal_Studios-Aliki_Paros_Cyclades_South_Aegean.html"
      target="_blank"
      rel="noopener norefferer"
      aria-label="TripAdvisor"
    >
      <FaTripadvisor className="hover:text-tripadvisor" size="24" title="TripAdvisor" />
    </a>
    <a
      className="social-icon bg-email hover:bg-white hover:text-email"
      href="mailto:info@helenstudios.com"
      target="_blank"
      rel="noopener norefferer"
      aria-label="Email"
    >
      <FiMail className="hover:text-email" size="24" title="e-mail" />
    </a>
  </>
);

export default SocialIcons;
