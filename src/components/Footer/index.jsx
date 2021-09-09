import React from 'react';
import './style.css';
import { FaFacebookF, FaTwitter, FaYoutube, FaPinterestP } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';

function Footer(props) {
  return (
    <div className="footerRoot">
      <div className="container">
        <div className="logo">
          {/* <img src="./pet-shop.png" alt="logo-shop" className="footer-logo" /> */}
          <span className="footer-logo">Pet Shop</span>
        </div>
        <div className="footer-body">
          <div className="footer-column">
            <p className="footer-title">ABOUT PETFINDER</p>
            <ul className="footer-list-items">
              <li className="item-row">About Petfinder</li>
              <li className="item-row">FAQs</li>
              <li className="item-row">Contact Us</li>
              <li className="item-row">Terms of Service</li>
            </ul>
          </div>
          <div className="footer-column">
            <p className="footer-title">PET ADOPTION</p>
            <ul className="footer-list-items">
              <li className="item-row">Dog Adoption</li>
              <li className="item-row">Cat Adoption</li>
              <li className="item-row">Other Pet Adoption</li>
              <li className="item-row">Happy Tails Pet Adoption</li>
            </ul>
          </div>
          <div className="footer-column">
            <p className="footer-title">PET CARE TOPICS</p>
            <ul className="footer-list-items">
              <li className="item-row">Dog Care</li>
              <li className="item-row">Cat Care</li>
              <li className="item-row">Helping Pets</li>
              <li className="item-row">All Pet Care</li>
            </ul>
          </div>
          <div className="footer-column">
            <p className="footer-title">SITE MAP</p>
            <ul className="footer-list-items">
              <li className="item-row">Official store</li>
              <li className="item-row">Live Stock</li>
              <li className="item-row">Distributors</li>
              <li className="item-row">Descripstion</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-contact">
        <div className="footer-contact-container">
          <div className="about-shop">©2021 PetShop - Make by Van Sinh</div>
          <div className="social-shop">
            <div className="social">
              <FaFacebookF />
            </div>
            <div className="social">
              <FaTwitter />
            </div>
            <div className="social">
              <FaYoutube />
            </div>
            <div className="social">
              <GrInstagram />
            </div>
            <div className="social">
              <FaPinterestP />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
