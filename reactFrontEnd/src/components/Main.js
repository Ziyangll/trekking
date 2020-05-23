import React, {useState} from 'react';
import layout from '../layout.svg';

import { Link, useHistory } from "react-router-dom";

const Main = () => {

    const [joined, setJoined] = useState("");
    const history = useHistory();


    const join = (e) =>{
        e.preventDefault();
        if(joined !== ""){
            let today = new Date();
            let date = today.getFullYear()+ '-' +(today.getMonth()+1) + '-' + today.getDate();
            history.push(`/thanks/${joined}`, date );
        }

    }



    return(
        <React.Fragment>
            <header>
                <img src={layout} />
                <div>
                    <h1>We design &amp; create <br/> trekking trips.</h1>
                    <p>Get away from the hustle and bustle of city life, explore what the nature has to offer. Trekking Team will let you know the destination, packing list. So jet off and explore nature! </p>
                    <Link to="/contact">Explore now</Link>
                </div>
          
            </header>


            <main>
                <section className="services">
                     <h2>Why you should go on a trekking trip with Trekker?</h2>

                     <div className="service-container">
                         <div className="services-card service-one"></div>
                         <div className="service-description">

                            <h3>Reconnect with nature</h3>
                            <div>Trekker makes it easy to plan out your next outdoor adventure by giving you all the tools you need through a click of a button.</div>

                         </div>
                    </div>



                    <div className="service-container">
                      
                      <div className="services-card service-two"></div>
                      <div className="service-description">
                          <h3>Know what to pack</h3>
                          <div>Trekker cuts the hassle and prepares your backpack for you. So you can never leave unprepared! 
</div>
                      </div>
                    </div>



                    <div className="service-container">
                        <div className="services-card service-three"></div>
                        <div className="service-description">
                            <h3>Navigate Trails like a pro</h3>
                            <div>Trekker lets you see local trails around you and can even view points of interests and rest stops. </div>
                        </div>
                      
                    </div>
                </section>

                <section>
                    <h2>Join our newsletter to get the latest trends.</h2>

                    <form className="newsletter" onSubmit={join}>
                        <input type="email" placeholder="Your email goes here" onChange={(e) => setJoined(e.target.value)} />
                        <input type="submit"  value="Join Now!"/>
                    </form>

                </section>
            </main>


        </React.Fragment>
    )
}


export default Main;