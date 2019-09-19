import React from 'react';

import './Food.css';

const Food = ({
  name = '',
  imageUrl = '',
  ingredients = [],
}) => (
  <div className="food">
    <div className="food--image">
      <img src={imageUrl} alt="Food" />
    </div>
    <div className="food--content">
      <h4 className="food--name">{name}</h4>
      <div className="food--ingredients">
        <h5>Food Ingredients:</h5>
        <div className="food--ingredients--items">
          {
            ingredients.map((item, index) => (
              <div key={index}>
                <div>
                  <b>Name: </b>{item.text}
                </div>
                <div>
                  <b>Quantity: </b> {item.quantity}
                </div>
                <div>
                  <b>Measure: </b> {item.measure}
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  </div>
)

export default Food;