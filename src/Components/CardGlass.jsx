import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/CardGlass.css'
const CardLayout = () => {
  const cards = [
    { id: 1, image: '../public/images/card-img-1.png', title: 'Eyeglasses' },
    { id: 2, image: '../public/images/card-img-2.png', title: 'Sunglasses' },
    { id: 3, image: '../public/images/card-img-3.png', title: 'Screenglasses' },
    { id: 4, image: '../public/images/card-img-4.png', title: 'Contact Lenses' },
    { id: 5, image: '../public/images/card-img-5.png', title: 'Power Sunglasses' },
    { id: 6, image: '../public/images/card-img-6.png', title: 'ProgressiveLens' },
  ];

  return (
    
    <div className="container-fluid" style={{backgroundColor: '#F5F5F5'}}>
        <div className="container pt-3 pb-3">
      <div className="row">
        {cards.map(card => (
          <div className="col-md-2 col-2" key={card.id}>
            <div className="card card-1">
            <Link to={`/Card/${card.id}`}> <img src={card.image} className="card-img-top p-2" alt={card.title} /></Link>
              <h6 id='text' className='text-center'>{card.title}</h6>

            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default CardLayout;
