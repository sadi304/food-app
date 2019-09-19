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
      <h4 className="food--name">{name}</h4>
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
        <h5>Ingredients:</h5>
        <div className="food--ingredients--items">
          {
            ingredients.map((ingredient, index) => (
              <div key={index}>
                <div>
                  <b>Name: </b>{ingredient.text}
                </div>
                <div>
                  <b>Quantity: </b> {ingredient.quantity}
                </div>
                <div>
                  <b>Measure: </b> {ingredient.measure}
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