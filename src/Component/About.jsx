import React from 'react'

const About = () => {
  return (
    <>
    <section className="rooms-page about section-padding2 imageabout ">
            <div className="container">
            <div className="row rev">
                {/* <img  src="img/New image/Vns_airport.jpg" className='mobimg mb-5'/> */}
                <div        
                className="col-md-8 mb-30 animate-box"
                data-animate-effect="fadeInUp"
                >
                 <div className="section-title abt">Discover comfort just outside Lal Bahadur Shastri International Airport in Varanasi</div>
                 <p>Welcome to Hotel Runway Inn,your gateway to Varanasi's spiritual allure! Step into modern elegance in rooms and suites, offering stunning views and a range of options from Economy to Maharaja Suite. Indulge in culinary delights at our restaurant Simply Benares or relax at our rooftop Aqua Lounge, where a swimming pool and scenic vistas await.</p>

                 <p>With a stellar <strong>4.5-star rating on Google</strong>, join us for an unforgettable stay marked by unparalleled comfort and satisfaction!</p>

                    <div className="reservations">
                        <div className="icon">
                        <span className="flaticon-call" />
                        </div>
                        <div className="text">
                        <p>Reservation</p> <a href="tel:93058 04900">93058 04900</a>
                        </div>
                    </div>
                </div>
                    {/* <img
                    src="img/1.jpg"
                    alt=""
                    className=""
                /><img
                src="img/2.jpg"
                alt=""
                className=""
            /> */}
                <div
                className="col col-md-4 animate-box"
                data-animate-effect="fadeInUp"
                >
                <img
                    src="img/1-Copy.jpg"
                    alt=""
                    className="mb-5"
                />  
                <img
                    src="img/vns1.png"
                    alt=""
                    className="ms-5 ps-5  mobview"
                />
                </div>
                
            </div>
            
            </div>
        </section>
    </>
  )
}

export default About
