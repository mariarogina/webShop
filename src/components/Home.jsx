import React from "react";
import Products from './Products'

const Home = () => {
  return (
    <div style={{width:'1100px', textAlign:"center", margin:"auto"}}>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
        
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src="/assets/img/main/pic1.png"
              alt="First goods"
              height="600px"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="/assets/img/main/pic2.png"
              alt="Second goods"
              height="600px"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="/assets/img/main/pic3.png"
              alt="Third goods"
              height="600px"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="/assets/img/main/pic4.png"
              alt="Fourth goods"
              height="600px"
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <Products/>
    </div>
  );
};

export default Home;
