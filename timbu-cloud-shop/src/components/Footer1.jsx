import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-darkBlue text-white py-8 mt-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <h3 className="font-bold mb-2">About Us</h3>
          <ul>
            <li><a href="#" className="hover:text-lightBlue">Services</a></li>
            <li><a href="#" className="hover:text-lightBlue">Our Team</a></li>
            <li><a href="#" className="hover:text-lightBlue">Partners</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Company</h3>
          <ul>
            <li><a href="#" className="hover:text-lightBlue">Contact</a></li>
            <li><a href="#" className="hover:text-lightBlue">Client</a></li>
            <li><a href="#" className="hover:text-lightBlue">Employment</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Enquiries</h3>
          <ul>
            <li><a href="#" className="hover:text-lightBlue">Prices</a></li>
            <li><a href="#" className="hover:text-lightBlue">Warranty</a></li>
            <li><a href="#" className="hover:text-lightBlue">Customer Service</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Follow Us</h3>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-lightBlue">@timbudevices</a></li>
            <li><a href="#" className="hover:text-lightBlue"><i className="fab fa-tiktok"></i></a></li>
            <li><a href="#" className="hover:text-lightBlue"><i className="fab fa-instagram"></i></a></li>
            <li><a href="#" className="hover:text-lightBlue"><i className="fab fa-facebook"></i></a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react'
import styles from './c_frame81.module.css'
const CFrame81 = (props) => {
  return (
    <div className={styles['frame']}>
      <img
        src="./assets/27110.svg"
        alt="rectangle"
        width={1440}
        height={605}
        className={styles['rectangle']}
        />
      <img
        src="./assets/27111.svg"
        alt="line"
        width={1294}
        height={1}
        className={styles['line']}
        />
      <div className={styles['text']}>
        <p className={styles['text01']}>About Us</p>
      </div>
      <div className={styles['text02']}>
        <p className={styles['text03']}>Company</p>
      </div>
      <div className={styles['text04']}>
        <p className={styles['text05']}>Enquiries</p>
      </div>
      <div className={styles['text06']}>
        <p className={styles['text07']}>Services</p>
      </div>
      <div className={styles['text08']}>
        <p className={styles['text09']}>Contact</p>
      </div>
      <div className={styles['text10']}>
        <p className={styles['text11']}>Customer Service</p>
      </div>
      <div className={styles['text12']}>
        <p className={styles['text13']}>Prices</p>
      </div>
      <div className={styles['text14']}>
        <p className={styles['text15']}>Our Team</p>
      </div>
      <div className={styles['text16']}>
        <p className={styles['text17']}>Client</p>
      </div>
      <div className={styles['text18']}>
        <p className={styles['text19']}>Warranty</p>
      </div>
      <div className={styles['text20']}>
        <p className={styles['text21']}>Partners</p>
      </div>
      <div className={styles['text22']}>
        <p className={styles['text23']}>Employment</p>
      </div>
      <div className={styles['text24']}>
        <p className={styles['text25']}>Follow Us</p>
      </div>
      <div className={styles['text26']}>
        <p className={styles['text27']}>@timbudevices</p>
      </div>
      <img
        src="./assets/27126.svg"
        alt="frame"
        width={50}
        height={50}
        className={styles['frame1']}
        />
      <img
        src="./assets/27132.svg"
        alt="frame"
        width={50}
        height={50}
        className={styles['frame2']}
        />
      <div className={styles['text28']}>
        <p className={styles['text29']}>TechDepot</p>
      </div>
    </div>
  )
}
export default CFrame81