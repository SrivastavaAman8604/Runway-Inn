import React from 'react'

const Gallery = () => {
  return (
    <>
  <div
    className="banner-header section-padding valign bg-img bg-fixed"
    data-overlay-dark={6}
    data-background="img/images/banner/1.webp"
  >
    <div className="container">
      <div className="row">
        <div className="col-md-12 caption mt-90">
          <span>
            <i className="star-rating" />
            <i className="star-rating" />
            <i className="star-rating" />
            <i className="star-rating" />
          </span>
          <h5>The Runway Inn Hotel</h5>
          <h1>Gallery</h1>
        </div>
      </div>
    </div>
  </div>
  {/* Image Gallery */}
  <section className="section-padding">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="section-subtitle">Images</div>
          <div className="section-title">Image Gallery</div>
        </div>
        {/* 3 columns */}
        <div className="col-md-4 gallery-item">
          <a href="img/images/Business class edited/IMG_3104.1 - Copy.JPG" title="" className="img-zoom">
            <div className="gallery-box">
              <div className="gallery-img">
                {" "}
                <img
                  src="img/images/Business class edited/IMG_3104.1 - Copy.JPG"
                  className="img-fluid mx-auto d-block"
                  alt="work-img"
                />{" "}
              </div>
            </div>
          </a>
        </div>
        <div className="col-md-4 gallery-item">
          <a href="img/images/Family Suite Edited/1-1.jpg" title="" className="img-zoom">
            <div className="gallery-box">
              <div className="gallery-img">
                {" "}
                <img
                  src="img/images/Family Suite Edited/1-1.jpg"
                  className="img-fluid mx-auto d-block"
                  alt="work-img"
                />{" "}
              </div>
            </div>
          </a>
        </div>
        <div className="col-md-4 gallery-item">
          <a href="img/rooms/resturant1.png" title="" className="img-zoom">
            <div className="gallery-box">
              <div className="gallery-img">
                {" "}
                <img
                  src="img/rooms/resturant1.png"
                  className="img-fluid mx-auto d-block"
                  alt="work-img"
                />{" "}
              </div>
            </div>
          </a>
        </div>
        {/* 2 columns */}
        <div className="col-md-6 gallery-item">
          <a href="img/images/Premium Economy/8.webp" title="" className="img-zoom">
            <div className="gallery-box">
              <div className="gallery-img">
                {" "}
                <img
                  src="img/images/Premium Economy/8.webp"
                  className="img-fluid mx-auto d-block"
                  alt="work-img"
                />{" "}
              </div>
            </div>
          </a>
        </div>
        <div className="col-md-6 gallery-item">
          <a href="img/images/Maharaja Suite Edited/17-1-min.webp" title="" className="img-zoom">
            <div className="gallery-box">
              <div className="gallery-img">
                {" "}
                <img
                  src="img/images/Maharaja Suite Edited/17-1-min.webp"
                  className="img-fluid mx-auto d-block"
                  alt="work-img"
                />{" "}
              </div>
            </div>
          </a>
        </div>
        {/* 3 columns */}
        <div className="col-md-4 gallery-item">
          <a href="img/images/Pool Area Edited/3-1.png" title="" className="img-zoom">
            <div className="gallery-box">
              <div className="gallery-img">
                {" "}
                <img
                  src="img/images/Pool Area Edited/3-1.png"
                  className="img-fluid mx-auto d-block"
                  alt="work-img"
                />{" "}
              </div>
            </div>
          </a>
        </div>
        <div className="col-md-4 gallery-item">
          <a href="img/images/reception/18-1.webp" title="" className="img-zoom">
            <div className="gallery-box">
              <div className="gallery-img">
                {" "}
                <img
                  src="img/images/reception/18-1.webp"
                  className="img-fluid mx-auto d-block"
                  alt="work-img"
                />{" "}
              </div>
            </div>
          </a>
        </div>
        <div className="col-md-4 gallery-item">
          <a href="img/rooms/10.jpg" title="" className="img-zoom">
            <div className="gallery-box">
              <div className="gallery-img">
                {" "}
                <img
                  src="img/slider/banner-4.webp"
                  className="img-fluid mx-auto d-block"
                  alt="work-img"
                />{" "}
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</>

  )
}

export default Gallery
