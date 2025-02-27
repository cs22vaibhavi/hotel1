import React from 'react';
import './HotelApp.css';

const HotelApp = () => {
  return (
    <div className="app-container">
      <div className="header">
        <h3>Let's <br></br>Explore Hotels</h3>
        <img src="https://img.icons8.com/?size=30&id=59878&format=png&color=1A1A1A"/>
      </div>

      <div className="categories">
        <div className="category-item">
          <button><img src="https://img.icons8.com/?size=35&id=8280&format=png&color=1A1A1A"/></button>
          <span>Hotel</span>
        </div>
        <div className="category-item">
          <button><img src="https://img.icons8.com/?size=35&id=15869&format=png&color=1A1A1A"/></button>
          <span>Flight</span>
        </div>
        <div className="category-item">
          <button><img src="https://img.icons8.com/?size=35&id=42318&format=png&color=1A1A1A"/></button>
          <span>Place</span>
        </div>
        <div className="category-item">
          <button><img src="https://img.icons8.com/?size=35&id=AdSgGRnON0R9&format=png"/></button>
          <span>Food</span>
        </div>
      </div>

      <div className="hotel-section">
        <div className="hotel-section-header">
          <h2>Popular Hotels</h2>
          <button>See all</button>
        </div>

        <div className="hotel-card">
          <img src="https://www.hotelroyalblue.com/wp-content/uploads/2020/05/Royal-Blue_Deluxe-Room-with-Balcony-1.jpg" />
          <div className="hotel-card-content">
            <h3>Hotel Royal Blue</h3>
            <p>Zurich, Switzerland</p>
            <p>$480/night</p>
            <div className="ratings">
              <span>⭐ 4.5</span>
              <span>(6.8k)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hotel-section">
        <div className="hotel-section-header">
          <h2>Low Cost Hotels</h2>
        </div>

        <div className="hotel-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmPsZoaDrW1rKV4jc_pnA41gbaWCqwKtqTZQ&s "/>
          <div className="hotel-card-content">
            <h3>Warwick Grand Hotel</h3>
            <p>New York</p>
            <p>$400/night</p>
            <div className="ratings">
              <span>⭐ 5.0</span>
              <span>(26k)</span>
            </div>
          </div>
    

      <div className="bottom-nav">
        <button className="active">🏠</button>
        <button>❤️</button>
        <button>📄</button>
        <button>💬</button>
        <button>👤</button>
      </div>
    </div>
    </div>
    </div>
  );
};

export default HotelApp;