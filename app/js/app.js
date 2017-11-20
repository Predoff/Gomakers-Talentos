(function(){
  var app = angular.module('almoco-da-firma', []);

  app.controller("AlmocoController", function(){
    this.restaurants = restaurantsList; 

    this.tab = 1;
    this.currentIndexRestaurant = 0;

    this.selectTab = function(setTab) { 
      this.tab = setTab; 
    };

    this.isSelected = function(checkTab) {
      return this.tab === checkTab;
    };

    this.like = function(x) {
      this.restaurants[this.currentIndexRestaurant].likes++;
      this.setNextRestaurant();
    };

    this.dislike = function() {
      this.restaurants[this.currentIndexRestaurant].dislikes++;
      this.setNextRestaurant();
    };

    this.setNextRestaurant = function() {
      console.log(this.restaurants.length);
      if(this.restaurants.length - 1 === this.currentIndexRestaurant) {
        this.currentIndexRestaurant = 0;
      }
      else {
        this.currentIndexRestaurant++;
      }
    };

    this.currentRestaurant = function(indexRestaurant) {
      return this.currentIndexRestaurant === indexRestaurant;
    };

  });

  var restaurantsList = [
  {
    "name": "Fogão Mineiro",
    "url": "images/img2.jpg",

    "likes": 0,
    "dislikes": 10
  },
  {
    "name": "Burger King",
    "url": "images/img4.jpg",

    "likes": 0,
    "dislikes": 0
  },
  {
    "name": "Five Guys",
    "url": "images/img5.jpg",

    "likes": 0,
    "dislikes": 0
  },
  {
    "name": "Kaizen Sushi",
    "url": "images/img6.jpg",

    "likes": 0,
    "dislikes": 0
  },
  {
    "name": "Aô Sushi Bar",
    "url": "images/img7.jpg",

    "likes": 0,
    "dislikes": 0
  },
  {
    "name": "Burguer House",
    "url": "images/img8.jpg",

    "likes": 0,
    "dislikes": 0
  },
  {
    "name": "Steak House ",
    "url": "images/img9.jpg",

    "likes": 0,
    "dislikes": 0
  },
  {
    "name": "Coco Bambu",
    "url": "images/img10.jpg",

    "likes": 0,
    "dislikes": 3
  }
];
  
 })();
 /*
  {
    "name": "El Tambo",
    "url": "images/resources/img1.jpg",
    "likes": 16,
    "dislikes": 5
  },
  {
    "name": "McDonalds",
    "url": "images/resources/img3.jpg",

    "likes": 0,
    "dislikes": 0
  },
  */


