import React from 'react'
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";
import {patientDetail} from '../data/patientDetail';

function DetailView() {
    return (
        <div className="flex flex-col h-screen">
            <header className="">
                <nav className="bg-gray-800">
                    <h2 className="text-white p-3 text-3xl">iMobile</h2>
                </nav>
            </header>
        <div className="flex-1 h-full overflow-scroll">
          <div>
            {patientDetail.patient.firstName} {patientDetail.patient.lastName}
            <a href="mailto:webmaster@example.com">Jon Doe</a>
            <BrowserView>
    <h1> This is rendered only in browser </h1>
    
</BrowserView>
<MobileView>
    <a href="tel:+919249960186">call</a>
    <a href="sms:1234&body=hi">Send an SMS</a>
</MobileView>
        </div>
        </div>
      </div>
        
    )
}

export default DetailView
