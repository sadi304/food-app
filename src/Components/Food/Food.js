import React from 'react';
import map from 'lodash/map'

import './Food.css';

const Food = ({
  name = '',
  imageUrl = '',
  ingredients = [],
  nutrients = {}
}) => (
  <div className="food">
    <div className="food--image">
      <img src={imageUrl} alt="Food" />
    </div>
    <div className="food--content">
      <h3 className="food--name">{name}</h3>
      <div className="food--nutrients">
        <h5>Nutrients: </h5>
        <div className="food--nutrients--items">
          {
            map(nutrients, (nutrient, key) => (
              <div key={key}>
                <div><b>{nutrient.label}</b></div>
                <div>{nutrient.quantity.toFixed(2)} {nutrient.unit}</div>
              </div>
            ))
          }
        </div>
      </div>
      <div className="food--ingredients">
        <h5>Step by Step (Ingredients):</h5>
        <ul className="food--ingredients--items">
          {
            ingredients.map((ingredient, index) => (
              <li key={index}>
                { ingredient }
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  </div>
)

export default Food;