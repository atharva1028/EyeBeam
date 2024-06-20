import React from 'react';
import { useParams, Link } from 'react-router-dom';
import MyNavbar from './MyNavbar';
import NavbarComponent from './NavbarComponent';
import cardData from '../Data/cardData';
import '../style/CardNext.css'

const CardNext = () => {
  const { id } = useParams();
  const cardId = parseInt(id);
  const card = cardData.find(card => card.id === cardId);

  if (!card) {
    return <div>Card not found</div>;
  }

  const handleImageClick = (index) => {
    localStorage.setItem('clickedImageIndex', index);
  };

  return (
    <>
      <MyNavbar />
      <NavbarComponent />
      <div className="container">
        <div className='d-flex justify-content-center'>
        <h1 id='txt'>{card.title}</h1>
        </div>
        <div className="row">
          {card.images.map((image, index) => (
            <div className="col-4 pt-2" key={index}>
              <div className='card card-1'>
                <div className='card-body'>
                <Link to={`/Buy`} onClick={() => handleImageClick(image)}>
                <img src={image} className="img-fluid" alt={`${card.title} ${index + 1}`} />
              </Link>
                </div>
              
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CardNext;
