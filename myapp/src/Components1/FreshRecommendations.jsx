import React from 'react';
import './FreshRecommendations.css';

const recommendations = [
  {
    id: 1,
    imageUrl: "https://4.imimg.com/data4/FH/WW/ANDROID-39594064/product-500x500.jpeg",
    title: '14,500',
    description: '2 Bds - 2 Ba - 900 ft2',
    location: 'Makhmalabad, nashik 422004',
    
  },
  {
    id: 2,
    imageUrl: "https://www.jiomart.com/images/product/original/rv6hqakhsb/gmj-autoparts-accessories-3-spoke-steering-wheel-for-made-indian-fit-willy-jeep-product-images-orv6hqakhsb-p601804179-1-202410011512.jpg?im=Resize=(420,420)",
    title: '₹2,500',
    description: 'Willys steering wheel jeep spare parts',
    location: 'MARATHWADA CHOWK, BALAPUR HO',
    
  },
  {
    id: 3,
    imageUrl:"https://havitsmart.com/cdn/shop/files/2_33fa65f5-746c-4479-be58-c344700e807c_700x700.jpg?v=1734593496",
    title: '₹349',
    description: 'All type of brand new Bluetooth speaker...',
    location: 'SAMUDRAPUR MAHARASHTRA',
    
  },
  {
    id: 4,
    imageUrl:"https://apollo.olx.in/v1/files/dk699cxt2bnp-IN/image;s=360x0",
    title: '₹30,000',
    description: 'Selling my 6 month old Samsung need...',
    location: 'SAMUDRAPUR MIDC, MAHARASHTRA',
    
  },
];

const FreshRecommendations = () => {
  return (
    <div className="fresh-recommendations">
      <h3>Fresh recommendations</h3>
      <div className="recommendation-grid">
        {recommendations.map((recommendation) => (
          <div key={recommendation.id} className="recommendation-card">
            <img src={recommendation.imageUrl} alt={recommendation.title} />
            <div className="recommendation-card-content">
              <h3>{recommendation.title}</h3>
              <p>{recommendation.description}</p>
              <p>{recommendation.location}</p>
            </div>
            <div className="recommendation-card-footer">
              <span>{recommendation.date}</span>
              <button>♡</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FreshRecommendations;