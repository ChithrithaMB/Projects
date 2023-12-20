import React from 'react';
import './home.css';
import ContactPhoneSharpIcon from '@mui/icons-material/ContactPhoneSharp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
const Home=()=>{
    return(
            <>
            <div className="pinkbc1">
            <button class="pinkbtn1 pinklogin"><Link to='/Login'>Login</Link></button>
            <button class="pinkbtn2 pinksignup"><Link to='/Registration'>Sign Up</Link></button>
            <button class="pinkbtn3 pinkaboutus"><Link to='/about'>About Us</Link></button>
            <div className="pinkh1">Bodhi Plus</div>
            <div className="pinkcolo1"></div>
            <div className="pinkcus1"><ContactPhoneSharpIcon/>
            <h3 id="pinkheadc1">Contact Us :  </h3></div>
                <p id="pinkp1">(+91) 9487609321</p>
                <p id="pinkpp1">0422-2466696</p>
            <hr class="pinknew1"></hr>
            <h3 id="pinkheadc2">Follow Us At :  </h3></div>
            <div className="pinkfb1"><LinkedInIcon/></div>
            <h3 id="pinkheadc3">https://www.linkedin.com/in/Bodhi Plus-105b112/</h3>
            <div className="pinkin1"><FacebookIcon/></div>
            <h3 id="pinkheadc4">@Bodhi Plus</h3>
            <div className="pinkem1"><InstagramIcon/></div>
            <h3 id="pinkheadc5">@Bodhi Plus</h3>
            <div class="pinkvl1"></div>
            <div class="pinkvl"></div>
            <div className="pinkcolo2"></div>
            
            <div className="pinkcard">
  <div className="pinkcontent">
    <div className="pinkfront">
      Welcome To Bodhi Plus
    </div>
    <div className="pinkback">
            <div className="pinkcon1">We are Determined </div>
            <div className="pinkcon2">For your Better Life.</div>
            <div className="pinkcon3">You can get the care</div>
            <div className="pinkcon4">You need 24/7 at Bodhi Plus.</div>
      
    </div>
  </div>
</div>
            </>
    )
}

export default Home;