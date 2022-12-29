// import Logo  from './assets-img/'
import { Link } from "react-router-dom";

// import Footer from '../component/Footer';

import fb from '../assets-img/footer-icons/fb.webp';
import insta from '../assets-img/footer-icons/insta.webp';
import twitter from '../assets-img/footer-icons/twitter.webp';
import youTube from '../assets-img/footer-icons/you-tube.webp';

import react, {useEffect,useState} from 'react';

import logo from "../assets-img/logo/alogic-logo--mian.png";
import lcon from "../assets-img/logo/India-icon.png";
import Search_icon from "../assets-img/logo/Search-icon-main.png";
import User_icon from "../assets-img/logo/accounts-icon-user.png";
import Cart_icon from "../assets-img/logo/Cart-icon-buy.png";
import Responsive_bar from "../assets-img/logo/iconmonstr-menu-alogic.png";
import '../SCSS/App.scss';
import '../SCSS/comman.scss';


const navigation_bar = ['About','Support','Contact US','Privacy Policy','Terms and Conditions','Warranty Policy','Shipping Policy'] 
     

const Navigation = () => {

    const [show, steshow] = useState(true);

    const eventHandle = () => {
        steshow(!show);
      
    }

    useEffect( () => {
        const eventHandle = () => {
            steshow(false)
        }
    },show)

    return  (
        <div>
            <header>
                    <nav className="main-logo w-100 d-flex nav-bar">
                               <div className="responsive-bar d-md-none">
                                     <img onClick={eventHandle}  className="main-bar img-fluid" src={Responsive_bar} alt="Alogic-logo"/>
                               </div>
                                 <div className="text-center"> 
                                    <img  src={logo} className='alogic-logo w-100' alt="Alogic-logo"/>
                                 </div>
                                  
                                  { show ?  <ul className="list-item p-3 comman-main responsive-header m-0 ul-list">
                                    <li  className="comman-links pb-md-1 pb-1 responsive-width">
                                          <Link className="text-dark comman-color" to='/'> Shop</Link>
                                    </li>

                                    <li  className="comman-links pb-md-1 pb-1 responsive-width">
                                        <Link className="text-dark comman-color" to='/About'> About</Link>
                                    </li> 
                                    <li  className="comman-links pb-md-1 pb-1 responsive-width">
                                        <Link className="text-dark comman-color" to='/Support'>Support</Link>
                                    </li>
                                    <li  className="comman-links pb-1 pb-md-0 responsive-width">
                                        <Link className="text-dark comman-color" to='/More'>More</Link>
                                    </li>

                                    <div className="d-md-none row mt-5 text-white">
                                          <div className="col-12 col-sm-6 d-md-none">
                                                <div className="responsive-logo"> 
                                                    <img  src={logo} className='responsive-logo img-fluid' alt="Alogic-logo"/>
                                                    <p className="mt-2">© 2001-2021 ALOGIC, Inc. All rights reserved.</p>
                                               </div>
                                        
                                            <ul className="mt-3 p-0">
                                                {navigation_bar.map((new_bar) => {
                                                    return(
                                                        <li className="m-0">
                                                            <a className="text-white" href="#">{new_bar}</a>
                                                        </li> 
                                                    )
                                                })}

                                            </ul>
                                          </div>
                                          <div className="d-none col-sm-6 d-sm-block d-md-none">
                                            <div className="responsive-icons mr-right d-flex justify-content-center">
                                                <img className='img-fluid' src={fb} alt='facebook' />
                                                <img className='img-fluid' src={insta} alt='facebook' />
                                                <img className='img-fluid' src={twitter} alt='facebook' />
                                                <img className='img-fluid' src={youTube} alt='facebook' />
                                            </div> 
                                         </div>
                                    </div>
                            </ul> : null
                                  }

                                <div className="icon d-none d-md-block">
                                    <img className="img-fluid" src={lcon} alt="Alogic-icon-flag"/>
                                    <a href="#" className="text-dark">IND</a>
                                </div>

                <div className="icon-wapper d-flex nav-icons">
                    <img className="mr-main main-icon-width" src={Search_icon} alt="search"/>
                    <img className="mr-main main-icon-width" src={User_icon} alt="user"/>
                    <img className="mr-main main-icon-width" src={Cart_icon} alt="cart"/>
               </div>
                    </nav>
            </header>
        </div>
    )
}

export default Navigation;