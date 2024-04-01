import React,{useState} from 'react'

const Contact = () => {


    const [emailData, setEmailData] = useState({
      to: '',
      subject: '',
      text: '',
    });
    
    const handleChange = (e) => {
        setEmailData({ ...emailData, [e.target.name]: e.target.value });
    };
      
    const handleSubmit = async (e) => {
        e.preventDefault();
      
        try {
            const response = await fetch('http://localhost:3000/send-email', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(emailData),
            });
      
            if (response.ok) {
              console.log('Email sent successfully');
            } else {
              console.error('Failed to send email');
            }
          } catch (error) {
            console.error('Error sending email:', error);
        }

    }     
  return (
    <>
  <div
    className="banner-header section-padding valign bg-img bg-fixed"
    data-overlay-dark={6}
    data-background="img/images/banner/1.webp"
  >
        <div className="container">
        <div className="row">
            <div className="col-md-12 text-left caption mt-90">
                <span>
                    <i className="star-rating" />
                    <i className="star-rating" />
                    <i className="star-rating" />
                    <i className="star-rating" />
                    {/* <i className="star-rating" /> */}
                </span>
                <h5>Get in touch</h5>
                <h1>Contact Us</h1>
            </div>
        </div>
        </div>
    </div>
    {/* Contact */}
    <section className="contact section-padding">
        <div className="container">
        <div className="row mb-90">
            <div className="col-md-6 mb-60">
            <h3>The Runway Inn Luxury Hotel</h3>
            <p>
                The Runway Inn Luxury Hotel! Whether you have inquiries about
                reservations, special accommodations, or simply want to discuss how
                we can make your stay extraordinary, our team is here to assist.
                Connect with us via the provided contact details, and let us turn
                your visit into an unforgettable experience. Your comfort is our
                priority, and we look forward to hearing from you soon.
            </p>
            <div className="reservations mb-30">
                <div className="icon">
                <span className="flaticon-call" />
                </div>
                <div className="text">
                <p>Reservation</p> <a href="tel:855-100-4444">93058 04900</a>
                </div>
            </div>
            <div className="reservations mb-30">
                <div className="icon">
                <span className="flaticon-envelope" />
                </div>
                <div className="text">
                <p>Email Info</p>{" "}
                <a href="mailto:info@luxuryhotel.com">info@hotelrunwayinn.com</a>
                </div>
            </div>
            {/* <div class="reservations">
                    <div class="icon"><span class="flaticon-location-pin"></span></div>
                    <div class="text">
                        <p>Address</p> 1616 Broadway NY, New York 10001
                        <br>United States of America
                    </div>
                </div> */}
            </div>
            <div className="col-md-5 mb-30 offset-md-1">
            <h3>Get in touch</h3>
            <form method="post" className="contact__form" action="send-email.php" onSubmit={handleSubmit}>
                {/* form message */}
                <div className="row">
                <div className="col-12">
                    <div
                    className="alert alert-success contact__msg"
                    style={{ display: "none" }}
                    role="alert"
                    >
                    {" "}
                    Your message was sent successfully.{" "}
                    </div>
                </div>
                </div>
                {/* form elements */}
                <div className="row">
                <div className="col-md-6 form-group">
                    <input
                    name="name"
                    type="text"
                    placeholder="Your Name *"
                    required=""
                    />
                </div>
                <div className="col-md-6 form-group">
                    <input
                    name="email"
                    type="email"
                    placeholder="Your Email *"
                    required=""
                    />
                </div>
                <div className="col-md-6 form-group">
                    <input
                    name="phone"
                    type="text"
                    placeholder="Your Number *"
                    required=""
                    />
                </div>
                <div className="col-md-6 form-group">
                    <input
                    name="subject"
                    type="text"
                    placeholder="Subject *"
                    required=""
                    />
                </div>
                <div className="col-md-12 form-group">
                    <textarea
                    name="message"
                    id="message"
                    cols={30}
                    rows={4}
                    placeholder="Message *"
                    required=""
                    defaultValue={""}
                    />
                </div>
                <div className="col-md-12">
                    <button type="submit" className="butn-dark2">
                    <span>Send Message</span>
                    </button>
                </div>
                </div>
            </form>
            </div>
        </div>
        
        </div>
    </section>
    </>
    
  )
}

export default Contact;
