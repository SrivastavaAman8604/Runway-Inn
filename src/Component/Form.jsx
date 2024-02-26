import React from 'react'

const Form = () => {
  return (
    <>
      <section className="testimonials">
            <div
            className="background bg-img bg-fixed section-padding pb-0"
            data-background="img/images/exterior/1.png"
            data-overlay-dark={6}
            >
            <div className="container">
                <div className="row">
                {/* Reservation */}
                <div className="col-md-5 mb-30 mt-30">
                    <p>
                    <i className="star-rating" />
                    <i className="star-rating" />
                    <i className="star-rating" />
                    <i className="star-rating" />
                    <i className="star-rating" />
                    </p>
                    <h5>
                    Each of our guest rooms feature a private bath, wi-fi, cable
                    television and include full breakfast.
                    </h5>
                    <div className="reservations mb-30">
                    <div className="icon color-1">
                        <span className="flaticon-call" />
                    </div>
                    <div className="text">
                        <p className="color-1">Reservation</p>{" "}
                        <a className="color-1" href="tel:855-100-4444">
                        93058 04900
                        </a>
                    </div>
                    </div>
                    <p>
                    <i className="ti-check" />
                    <small>Call us, it's toll-free.</small>
                    </p>
                </div>
                {/* Booking From */}
                <div className="col-md-5 offset-md-2">
                    <div className="booking-box">
                    <div className="head-box">
                        <h6>Rooms &amp; Suites</h6>
                        <h4>Hotel Booking Form</h4>
                    </div>
                    <div className="booking-inner clearfix">
                        <form action="https://duruthemes.com/demo/html/Runway Inn/demo2-light/rooms2.html" className="form1 clearfix"
                        >
                        <div className="row">
                            <div className="col-md-12">
                            <div className="input1_wrapper">
                                <label>Check in</label>
                                <div className="input1_inner">
                                <input
                                    type="text"
                                    className="form-control input datepicker"
                                    placeholder="Check in"
                                />
                                </div>
                            </div>
                            </div>
                            <div className="col-md-12">
                            <div className="input1_wrapper">
                                <label>Check out</label>
                                <div className="input1_inner">
                                <input
                                    type="text"
                                    className="form-control input datepicker"
                                    placeholder="Check out"
                                />
                                </div>
                            </div>
                            </div>
                            <div className="col-md-6">
                            <div className="select1_wrapper">
                                <label>Adults</label>
                                <div className="select1_inner">
                                <select
                                    className="select2 select"
                                    style={{ width: "100%" }}
                                >
                                    <option value={0}>Adults</option>
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                </select>
                                </div>
                            </div>
                            </div>
                            <div className="col-md-6">
                            <div className="select1_wrapper">
                                <label>Children</label>
                                <div className="select1_inner">
                                <select
                                    className="select2 select"
                                    style={{ width: "100%" }}
                                >
                                    <option value={0}>Children</option>
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                </select>
                                </div>
                            </div>
                            </div>
                            <div className="col-md-12">
                            <button type="submit" className="btn-form1-submit mt-15">
                                Check Availability
                            </button>
                            </div>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        {/* Clients */}
        {/* <section className="clients">
            <div className="container">
            <div className="row">
                <div className="col-md-7">
                <div className="owl-carousel owl-theme">
                    <div className="clients-logo">
                    <a href="#0">
                        <img src="img/clients/1.png" alt="" />
                    </a>
                    </div>
                    <div className="clients-logo">
                    <a href="#0">
                        <img src="img/clients/2.png" alt="" />
                    </a>
                    </div>
                    <div className="clients-logo">
                    <a href="#0">
                        <img src="img/clients/3.png" alt="" />
                    </a>
                    </div>
                    <div className="clients-logo">
                    <a href="#0">
                        <img src="img/clients/4.png" alt="" />
                    </a>
                    </div>
                    <div className="clients-logo">
                    <a href="#0">
                        <img src="img/clients/5.png" alt="" />
                    </a>
                    </div>
                    <div className="clients-logo">
                    <a href="#0">
                        <img src="img/clients/6.png" alt="" />
                    </a>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section> */}
    </>
  )
}

export default Form
