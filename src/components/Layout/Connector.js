import React, { useEffect, useState } from "react";
import Settings from "../../modules/Settings";

import Header from "../Header";
// import Footer from "../Footer";

// const GET_STARTED_DISALLOWED_ROUTES = [
//     "/account",
// ];

// const shouldGetStaredBeBlocked = path => GET_STARTED_DISALLOWED_ROUTES.some(item => path.startsWith(item));


const Layout = (props) => {
    


    const [color, setColor] = useState('zl_light_theme_active');
   
    useEffect(() => {
        if(typeof window !== 'undefined') {
            setColor(localStorage.getItem("themColor"));
        }
      }, []);

    const themHandler = (val) => {
        setColor(val ? 'zl_light_theme_active' : 'zl_page_dark_mode');
        if(typeof window !== 'undefined') { 
            localStorage.setItem("themColor", val ? 'zl_light_theme_active' : 'zl_page_dark_mode');
        }
    }
    
    const url = window.location.pathname;
    const title = url.split('/')[1]


        return (
            <div className={`zl_all_pages_content ${ color === null ? 'zl_light_theme_active' : color }`}>
                <Header title={title}/>
                <div className="zl_all_pages_inner_content">
                    {props.location.pathname === "/settings" ? <Settings themHandler={themHandler} /> : props.children}
                </div>
                {/* <Footer /> */}
            </div>
        );
    
}

export default Layout;
