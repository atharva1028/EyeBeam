import React from 'react';
import { useEffect, useState } from 'react';
import MyNavbar from './MyNavbar';
import NavbarComponent from './NavbarComponent';
import '../style/CardBuy.css'
const CardBuy = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const items = localStorage.getItem('clickedImageIndex');
    if (items) {
      setItems(items);
    }
  }, []);
  return (
    <>
      <MyNavbar />
      <NavbarComponent />
      <div className='row container'>
        <div className='col-md-6'>
          <div className="card">
            <div className="card-body" style={{marginBottom: '67px'}}>
              <img src={items} className="img-fluid" alt="image" />
              <h2 className='text-center pt-2 pb-2'> Vincent Chase</h2>
              <h4>Blue Full Rim Aviator</h4>
              <h4>Size : Medium</h4>
              <h5>₹2000(₹2000 with GST)</h5>
              <div className='ps-5 pt-3 pb-3 mt-4 limited'>
                <h5>Limited Period Offer</h5>
                <h5>
                  Get Free BLU Screen or Progressive Lenses!</h5>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-6'>
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="card shadow-sm">
                <div className="card-body">
                  <div>
                    <p className="fw-bold">Payment Details</p>
                    <p className="text-muted mb-3">Complete your purchase by providing your payment details</p>
                  </div>
                  <form>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label fw-bold">Email address</label>
                      <input id="email" className="form-control" type="email" defaultValue="luke@skywalker.com" />
                    </div>
                    <div>
                      <label className="form-label fw-bold">Card details</label>
                      <div className="d-flex align-items-center justify-content-between border rounded p-2">
                        <div className="fab fa-cc-visa"></div>
                        <input type="text" className="form-control" placeholder="Card Details" />
                        <div className="d-flex w-50">
                          <input type="text" className="form-control me-2" placeholder="MM/YY" />
                          <input type="password" maxLength="3" className="form-control" placeholder="CVV" />
                        </div>
                      </div>
                    </div>
                    <div className="my-3">
                      <label htmlFor="cardholder-name" className="form-label fw-bold">Cardholder name</label>
                      <input id="cardholder-name" className="form-control" type="text" />
                    </div>
                    <div>
                      <label className="form-label fw-bold mb-3">Billing address</label>
                      <select className="form-select mb-3" aria-label="Country">
                        <option defaultValue hidden>United States</option>
                        <option value="1">India</option>
                        <option value="2">Australia</option>
                        <option value="3">Canada</option>
                      </select>
                      <div className="d-flex mb-3">
                        <input className="form-control me-2" type="text" placeholder="ZIP" />
                        <input className="form-control" type="text" placeholder="State" />
                      </div>
                      
                      <div className="d-flex flex-column text-muted">
                        
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <p className="fw-bold mb-0">Total</p>
                          <p className="fw-bold mb-0"><span className="fas fa-dollar-sign"></span>35.80</p>
                        </div>
                        <button type="button" className="btn btn-primary mt-2">
                          Pay<span className="fas fa-dollar-sign px-1"></span>35.80
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


    </>
  )
}

export default CardBuy
