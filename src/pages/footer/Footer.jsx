import React from 'react'
import "./Footer.css"

export default function Footer() {
  return <div className="footer">
     
      <div className="footerLeft">
          <p>All Rights Reserved by Institute of Science and Technology © Copyright 1993 - {new Date().getFullYear()}</p>
      </div>
      <div className="footerRight">
          <p>Concept & front-end developed by <a className="footerLink" target="_blank" href="https://mazharul-islam.web.app/">Mazharul Islam</a></p>
          <p>Functionality & back-end developed by <a className="footerLink" target="_blank" href="https://mahmudsizan.000webhostapp.com/">Sizan Mahmud</a></p>
      </div>

  </div>

}
