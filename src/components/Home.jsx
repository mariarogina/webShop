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
              src="https://cdn.pixabay.com/photo/2017/12/17/12/01/crystal-3024105_960_720.jpg"
              alt="First goods"
              height="600px"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://cdn.pixabay.com/photo/2019/07/27/21/42/t-shirt-4367577_960_720.jpg"
              alt="Second goods"
              height="600px"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://cdn.pixabay.com/photo/2016/11/18/19/39/backpack-1836594_960_720.jpg"
              alt="Third goods"
              height="600px"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://cdn.pixabay.com/photo/2015/04/20/13/40/person-731476_960_720.jpg"
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
