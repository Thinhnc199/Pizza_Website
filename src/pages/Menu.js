import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../styles/Menu.css";

const URL = 'https://64acf320b470006a5ec50e25.mockapi.io/users';

const Menu = () => {

  const [products, setProducts] = useState([]);
  const [detailPopup, setDetailPopup] = useState(null);


  const getListProduct = async () => {
    const res = await axios.get(`${URL}`);
    if (res.status === 200) {
      setProducts(res.data);
    }
  }

  useEffect(() => {
    getListProduct();
  }, []);

  // popup
  const handleViewPopup = (product) => {
    setDetailPopup(product);
  }

  const handleClosePopup = () => {
    setDetailPopup(null);
  }


  return (
    <div className="container">
      {products && products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt={product.id} />
          <h3>{product.name}</h3>
          <button onClick={() => handleViewPopup(product)}>View Details</button>
        </div>
      ))}

      {detailPopup && (
        <div className="popup">
          <div className="popup-content">
            <div>
              <span className='close' onClick={handleClosePopup}>
                &times;
              </span>
              <img src={detailPopup.image} alt={detailPopup.id} />
              <h2> {detailPopup.name}</h2>
              <p>Price: {detailPopup.price}</p>
              <p> {detailPopup.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;