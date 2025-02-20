import React from "react";
import "./HotelCard.css";

const HotelCard = () => {
  return (
    <div className="hotel-card-container">
      <div className="hotel-card">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvkZ5uLeTTnIi6Da2cjeRrvG50L1s8MJeehg&s"
          alt="Hotel Room"
          className="hotel-image"
        />
        <div className="hotel-content">
          <div className="hotel-header">
            <h2>Hotel Dark Moon</h2>
            <span className="hotel-price">$390/night</span>
          </div>
          <p className="hotel-location">Paris, France</p>
          <div className="hotel-rating">
            <span className="star-icon">⭐</span>
            <span>4.9</span>
            <span className="reviews">(6.8K reviews)</span>
          </div>
          <p className="hotel-description">
            Hotel Dark Moon, 100 metres from Front Beach, BaLi Motel Vung Tau
            offers accommodation with a garden, private parking, and a shared...
          </p>
          <div className="hotel-offers">
            <div className="offer-item">
              <span className="offer-icon"></span>
              <img src="https://img.icons8.com/?size=30&id=42364&format=png"/>
              <span>2 Bed</span>
            </div>
            <div className="offer-item">
              <span className="offer-icon"></span>
              <img src="https://img.icons8.com/?size=30&id=vOHNEerSEP2D&format=png"/>
              <span>Dinner</span>
            </div>
            <div className="offer-item">
              <span className="offer-icon"></span>
              <img src="https://img.icons8.com/?size=30&id=11485&format=png"/>
              <span>Hot Tub</span>
            </div>
            <div className="offer-item">
              <span className="offer-icon"></span>
              <img src="https://img.icons8.com/?size=30&id=7154&format=png"/>
              <span>1 AC</span>
            </div>
          </div>
          <button className="book-now">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;