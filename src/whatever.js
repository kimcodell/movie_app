import React from "react";
import PropTypes from "prop-types";

function Food({name, picture, rating}) {
  return <div>
    <h2>I like {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src = {picture} alt = {name} />
  </div>
}

Food.propTypes = {
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.number.isRequired
};

const foodILike = [
  {
    id : 1,
    name : "삼겹살",
    image : "https://lh3.googleusercontent.com/proxy/d2ZHlb7nusw5jc-Pa5Bprx2BlU7mVZjitmhSKENKtT9XvrbpQSLWKU6WMHddjWnY9NDEu7gZmnDyLyIhomZz__prqL-sI1wA9XgQ-96Gtyc5sf_Rd3nhyomFeSiRBTuz-x_oNM5UzA",
    rating : 4.9
  },
  {
    id : 2,
    name : "한우",
    image : "https://th3.tmon.kr/thumbs/image/e29/cb6/ea7/efa1de9d0_700x700_95_FIT.jpg",
    rating : 4.8
  },
  {
    id : 3,
    name : "빵",
    image : "https://newsimg.hankookilbo.com/cms/articlerelease/2019/06/13/201906131771312569_8.jpg",
    rating : 4.7
  },
  {
    id : 4,
    name : "막국수",
    image : "https://lh3.googleusercontent.com/proxy/DEfJKNCTjQ7dggxeBc4fuvk_t8FgupKhKhUpSVyjqA9srilW0ITry5O9TD5uHomGxaCQ_Eig2rYRXcM1fm2gZHWwBDZ7YJeN8hTB0AcoJ2P4-glhC7gTODr0",
    rating : 4.9
  }
];

function Whatever() {
  return (
    <div className="App">
      {foodILike.map(dish => (<Food key = {dish.id} name = {dish.name} picture = {dish.image} rating = {dish.rating}/> ))}
    </div>
  );
}

export default Whatever;