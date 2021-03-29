import React, { useState } from 'react';
import { Link } from 'gatsby';

import { useHeader } from '../../hooks/useHeader';

const NavBar = () => {
  const header = useHeader();
  const [open, setOpen] = useState(false);

  const navHidden = !open ? 'xs:hidden sm:hidden lg:flex lg:justify-end md:mr-4' : '';
  const burgerOpen = open
    ? 'fixed w-full h-100 inset-0 z-40 overflow-hidden flex justify-center items-center bg-white animation-fadeIn animation-linear animation-once xs:flex-col'
    : '';

  return (
    <div className={`w-full text-gray-700 bg-white nav top-nav`}>
      <div className="flex flex-col w-full lg:items-center lg:justify-between lg:flex-row">
        <div className="flex flex-row items-center justify-between xs:p-4">
          <>
            <Link to="/" className="w-32 h-auto align-middle ml-8 xs:ml-0 z-50">
              <img src={header.datoCmsHome.miniLogo.url} alt="Logo" title="Logo" />
            </Link>

            <button
              className="lg:hidden rounded-lg focus:outline-none focus:shadow-outline z-50"
              onClick={() => setOpen(!open)}
            >
              <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                <path
                  className={`${open ? 'hidden' : ''}`}
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
                <path
                  className={`${!open ? 'hidden' : ''}`}
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </>
        </div>
        <nav className={`${navHidden} ${burgerOpen} flex flex-grow pb-4 justify-center items-center md:pb-0 xs:pb-2`}>
          {header.allDatoCmsMenu.edges.map(
            ({ node: menuItem }, key: number) =>
              menuItem.mainMenu && (
                <div
                  key={`menuItem_${key}`}
                  className="px-4 py-2 text-sm text-gray-900 rounded-lg md:mt-0 focus:outline-none focus:shadow-outline hover:text-helens-blue transition-all duration-300 uppercase font-light xs:p-5 xs:text-3xl xs:px-2 md:text-4xl lg:p-4 lg:text-base"
                >
                  <Link to={menuItem.url}>{menuItem.label}</Link>
                </div>
              )
          )}
          <a href="https://reservations.bookoncloud.com/welcome/studioeleniparos?lang=en&channelId=website" rel="noreferrer noopener" className={`${burgerOpen ? 'absolute bottom-0 mb-4' : ''}`}>
            <button className="border border-helens-blue bg-helens-blue hover:bg-gray-900 transition-all duration-500 text-white flex rounded-sm px-4 py-2 text-center uppercase items-center ml-2">
              <svg className="svg-icon h-6 w-6 inline-block mr-2 align-top" viewBox="0 0 20 20">
                <path
                  fill="#FFFFFF"
                  d="M16.254,3.399h-0.695V3.052c0-0.576-0.467-1.042-1.041-1.042c-0.576,0-1.043,0.467-1.043,1.042v0.347H6.526V3.052c0-0.576-0.467-1.042-1.042-1.042S4.441,2.476,4.441,3.052v0.347H3.747c-0.768,0-1.39,0.622-1.39,1.39v11.813c0,0.768,0.622,1.39,1.39,1.39h12.507c0.768,0,1.391-0.622,1.391-1.39V4.789C17.645,4.021,17.021,3.399,16.254,3.399z M14.17,3.052c0-0.192,0.154-0.348,0.348-0.348c0.191,0,0.348,0.156,0.348,0.348v0.347H14.17V3.052z M5.136,3.052c0-0.192,0.156-0.348,0.348-0.348S5.831,2.86,5.831,3.052v0.347H5.136V3.052z M16.949,16.602c0,0.384-0.311,0.694-0.695,0.694H3.747c-0.384,0-0.695-0.311-0.695-0.694V7.568h13.897V16.602z M16.949,6.874H3.052V4.789c0-0.383,0.311-0.695,0.695-0.695h12.507c0.385,0,0.695,0.312,0.695,0.695V6.874z M5.484,11.737c0.576,0,1.042-0.467,1.042-1.042c0-0.576-0.467-1.043-1.042-1.043s-1.042,0.467-1.042,1.043C4.441,11.271,4.908,11.737,5.484,11.737z M5.484,10.348c0.192,0,0.347,0.155,0.347,0.348c0,0.191-0.155,0.348-0.347,0.348s-0.348-0.156-0.348-0.348C5.136,10.503,5.292,10.348,5.484,10.348z M14.518,11.737c0.574,0,1.041-0.467,1.041-1.042c0-0.576-0.467-1.043-1.041-1.043c-0.576,0-1.043,0.467-1.043,1.043C13.475,11.271,13.941,11.737,14.518,11.737z M14.518,10.348c0.191,0,0.348,0.155,0.348,0.348c0,0.191-0.156,0.348-0.348,0.348c-0.193,0-0.348-0.156-0.348-0.348C14.17,10.503,14.324,10.348,14.518,10.348z M14.518,15.212c0.574,0,1.041-0.467,1.041-1.043c0-0.575-0.467-1.042-1.041-1.042c-0.576,0-1.043,0.467-1.043,1.042C13.475,14.745,13.941,15.212,14.518,15.212z M14.518,13.822c0.191,0,0.348,0.155,0.348,0.347c0,0.192-0.156,0.348-0.348,0.348c-0.193,0-0.348-0.155-0.348-0.348C14.17,13.978,14.324,13.822,14.518,13.822z M10,15.212c0.575,0,1.042-0.467,1.042-1.043c0-0.575-0.467-1.042-1.042-1.042c-0.576,0-1.042,0.467-1.042,1.042C8.958,14.745,9.425,15.212,10,15.212z M10,13.822c0.192,0,0.348,0.155,0.348,0.347c0,0.192-0.156,0.348-0.348,0.348s-0.348-0.155-0.348-0.348C9.653,13.978,9.809,13.822,10,13.822z M5.484,15.212c0.576,0,1.042-0.467,1.042-1.043c0-0.575-0.467-1.042-1.042-1.042s-1.042,0.467-1.042,1.042C4.441,14.745,4.908,15.212,5.484,15.212z M5.484,13.822c0.192,0,0.347,0.155,0.347,0.347c0,0.192-0.155,0.348-0.347,0.348s-0.348-0.155-0.348-0.348C5.136,13.978,5.292,13.822,5.484,13.822z M10,11.737c0.575,0,1.042-0.467,1.042-1.042c0-0.576-0.467-1.043-1.042-1.043c-0.576,0-1.042,0.467-1.042,1.043C8.958,11.271,9.425,11.737,10,11.737z M10,10.348c0.192,0,0.348,0.155,0.348,0.348c0,0.191-0.156,0.348-0.348,0.348s-0.348-0.156-0.348-0.348C9.653,10.503,9.809,10.348,10,10.348z"
                ></path>
              </svg>
              <span className="font-light xs:text-xl lg:text-base">Book Now</span>
            </button>
          </a>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
