(function(){
  var app = angular.module('almoco', []);
  
  app.controller("AlmocoController", function(){
    this.restaurants = restaurantsList; 
  });

  var restaurantsList = [
  {
    "name": "El Tambo",
    "url": "images/resources/img1.jpg",
    "likes": 16,
    "dislikes": 5
  },
  {
    "name": "Fogão Mineiro",
    "url": "images/resources/img2.jpg",

    "likes": 0,
    "dislikes": 0
  },
  {
    "name": "McDonalds",
    "url": "images/resources/img3.jpg",

    "likes": 0,
    "dislikes": 0
  },
  {
    "name": "Burger King",
    "url": "images/resources/img4.jpg",

    "likes": 0,
    "dislikes": 0
  },
  {
    "name": "Five Guys",
    "url": "images/resources/img5.jpg",

    "likes": 0,
    "dislikes": 0
  },
  {
    "name": "Kaizen Sushi",
    "url": "images/resources/img6.jpg",

    "likes": 0,
    "dislikes": 0
  },
  {
    "name": "Aô Sushi Bar",
    "url": "images/resources/img7.jpg",

    "likes": 0,
    "dislikes": 0
  },
  {
    "name": "Burguer House",
    "url": "images/resources/img8.jpg",

    "likes": 0,
    "dislikes": 0
  },
  {
    "name": "Steak House ",
    "url": "images/resources/img9.jpg",

    "likes": 0,
    "dislikes": 0
  },
  {
    "name": "Coco Bambu",
    "url": "images/resources/img10.jpg",

    "likes": 0,
    "dislikes": 0
  }
];

})();

