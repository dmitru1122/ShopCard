import React from "react";
import Logo from "../images/logo.svg";
import vkIcon from "../images/icon/vk.svg";
import facebookIcon from "../images/icon/facebook.svg";
import instagramIcon from "../images/icon/instagram.svg";
import "./footer.scss";

function LogoDescrioption() {
  return (
    <figure>
      <div className="footer-logo-conteiner text1-7">
        <img src={Logo} alt="logo" />{" "}
        <span style={{ paddingLeft: "0.5em" }}>Vab</span>
      </div>
      <div className="about-company">Descrioption</div>
    </figure>
  );
}

function SameLink() {
  return (
    <article className="footer-table">
      <div className="ft__tr">
        <div className="ft__th">General link</div>
        <div className="ft__td">About us</div>
        <div className="ft__td">Catalog</div>
        <div className="ft__td">Delivery</div>
        <div className="ft__td">Payment</div>
      </div>
      <div className="ft__tr">
        <div className="ft__th">Categories</div>
        <div className="ft__td">Man clothes</div>
        <div className="ft__td">Women clothes</div>
        <div className="ft__td">Baby clothes</div>
        {/* <div className='ft-td'>Choes</div> */}
      </div>
      <div className="ft__tr">
        <div className="ft__th">Useful links</div>
        <div className="ft__td">Table size</div>
        <div className="ft__td">Fashion blog</div>
        <div className="ft__td">Our mission</div>
      </div>
      <div className="ft__tr">
        <div className="ft__th">Social network</div>
        <div className="ft__td ft__icon">
          <a href="#0">
            <img src={vkIcon} title="vk.com" alt="vk.com" /> VK.com
          </a>
        </div>
        <div className="ft__td ft__icon">
          <a href="#0">
            <img src={facebookIcon} title="facebook" alt="facebook" /> Facebook
          </a>
        </div>
        <div className="ft__td ft__icon">
          <a href="#0">
            <img src={instagramIcon} alt="instagram" title="instagram" />
            Instagram
          </a>
        </div>
      </div>
    </article>
  );
}

function MobileDesign() {
  return (
    <div className="social-network">
      <div className="header">Social network</div>
      <div className="vk">
        <a href="#0">
          <img src={vkIcon} title="vk.com" alt="vk.com" /> VK.com
        </a>
      </div>
      <div className="facebook">
        <a href="#0">
          <img src={facebookIcon} title="facebook" alt="facebook" /> Facebook
        </a>
      </div>
      <div className="instagram">
        <a href="#0">
          <img src={instagramIcon} alt="instagram" title="instagram" />
          Instagram
        </a>
      </div>
    </div>
  );
}

function Footer(props) {
  const footerClass = "footer " + props.styleClass;

  return (
    <footer className={footerClass}>
      <div className="footer-top">
        <LogoDescrioption />
        <SameLink />
      </div>
      <div className="footer-mobile-design">
        <MobileDesign />
      </div>
      <div className="footer-buttom white-style-background">
        <div>All Check...</div>
        <div>Rules</div>
      </div>
    </footer>
  );
}

export default Footer;
