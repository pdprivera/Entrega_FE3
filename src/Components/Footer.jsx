import React from 'react'
import { useContextGlobal } from './utils/global.context';
import iconFacebook from '/images/ico-facebook.png'
import iconInstagram from '/images/ico-instagram.png'
import iconTiktok from '/images/ico-tiktok.png'
import iconWhatsapp from '/images/ico-whatsapp.png'

const Footer = () => {

  const { state, changeTheme } = useContextGlobal();
  const { theme } = state;


  return (
    <footer className={theme}>
        <p>Powered by</p>
        <img src="./images/DH.png" alt='DH-logo' />
        <div className="iconBox">
          <img className="iconFooter"  src={iconFacebook}alt='fc-logo' />
          <img className="iconFooter"  src={iconInstagram}alt='ig-logo' />
          <img className="iconFooter"  src={iconTiktok}alt='tt-logo' />
          <img className="iconFooter"  src={iconWhatsapp}alt='wh-logo' />
        </div>
    </footer>
  )
}

export default Footer
