import React from "react";
import "./index.css";
import logo from "../images/logo.png"
import {Image} from 'semantic-ui-react'

function Footer() {
  return (

    <div class="main-footer">
      <div class="container">
        <div class="row">
          <div class="column-img">
            <Image src={logo} />
          </div>
          <div class="column">
            <h3>ΥΠΟΥΡΓΕΙΟ ΕΡΓΑΣΙΑΣ</h3>
            <h4 class="list-unstyled">
              <li>2105555555</li>
              <li>Αθήνα, Αττική</li>
              <li>Παπασταύρου 21</li>
            </h4>
          </div>
          <div class="column">
            <h3>KATI ALLO</h3>
            <h4 class="list-unstyled">
              <li>new data</li>
              <li>other new data</li>
              <li>Aristofani eisai kavla</li>
            </h4>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Footer;