// I don't know if you are using babel or not to compile the JS so I've included an ES5 and ES6
// version. You may even want it in an IIFE if the script is directly added to the HTML and
// JS modules are not being used so I've included this as well.

// <----------- ES6 ----------->
// const people = [
//   'People',
//   'Community',
//   'Crowds',
//   'Family',
//   'Public',
//   'Citizens',
//   'Plants',
//   'Cats',
//   'Education',
//   'Culture',
//   'Detail',
//   'Typefaces',
//   'Tools',
//   'Robots',
//   'Dinosaurs',
//   'Learning'
// ];
  
// const object = [
//   'Place',
//   'Area',
//   'Research',
//   'Experiments',
//   'Printing',
//   'Hangouts',
//   'Vernacular',
//   'Process',
//   'Collaboration',
//   'Mapping',
//   'Co-design',
//   'Production',
//   'History',
//   'Archives',
//   'Photography',
//   'Typography'
// ];

// const places = [
//   'Local',
//   'Park',
//   'Town',
//   'City',
//   'Village',
//   'Pub',
//   'Café',
//   'Shops',
//   'Supermarket',
//   'Studio',
//   'Workshop',
//   'Neighbourhood',
//   'Canteen',
//   'Corner',
//   'Field',
//   'Home'
// ];

// const randomNum = length => Math.floor(Math.random() * length) + 0;

// const siteInfo = document.querySelector('.site-info');
// const sentence = document.createElement('p');

// const wordOne = people[randomNum(people.length)];
// const wordTwo = object[randomNum(object.length)];
// const wordThree = places[randomNum(places.length)];

// sentence.innerText = `${wordOne}, ${wordTwo} & ${wordThree}`

// siteInfo.prepend(sentence);

// <----------- ES5 ----------->
// var people = [
//   'People',
//   'Community',
//   'Crowds',
//   'Family',
//   'Public',
//   'Citizens',
//   'Plants',
//   'Cats',
//   'Education',
//   'Culture',
//   'Detail',
//   'Typefaces',
//   'Tools',
//   'Robots',
//   'Dinosaurs',
//   'Learning'
// ];
  
// var object = [
//   'Place',
//   'Area',
//   'Research',
//   'Experiments',
//   'Printing',
//   'Hangouts',
//   'Vernacular',
//   'Process',
//   'Collaboration',
//   'Mapping',
//   'Co-design',
//   'Production',
//   'History',
//   'Archives',
//   'Photography',
//   'Typography'
// ];

// var places = [
//   'Local',
//   'Park',
//   'Town',
//   'City',
//   'Village',
//   'Pub',
//   'Café',
//   'Shops',
//   'Supermarket',
//   'Studio',
//   'Workshop',
//   'Neighbourhood',
//   'Canteen',
//   'Corner',
//   'Field',
//   'Home'
// ];

// var randomNum = function randomNum(length) {
//   return Math.floor(Math.random() * length) + 0;
// };

// var siteInfo = document.querySelector(".site-info");
// var sentence = document.createElement("p");
// var wordOne = people[randomNum(people.length)];
// var wordTwo = object[randomNum(object.length)];
// var wordThree = places[randomNum(places.length)];

// sentence.innerText = ""
//   .concat(wordOne, ", ")
//   .concat(wordTwo, " & ")
//   .concat(wordThree);

// siteInfo.prepend(sentence);


// <----------- ES5 in an IIFE ----------->
(function () {
  var people = [
    'People',
    'Community',
    'Crowds',
    'Family',
    'Public',
    'Citizens',
    'Plants',
    'Cats',
    'Education',
    'Culture',
    'Detail',
    'Typefaces',
    'Tools',
    'Robots',
    'Dinosaurs',
    'Learning'
  ];
    
  var object = [
    'Place',
    'Area',
    'Research',
    'Experiments',
    'Printing',
    'Hangouts',
    'Vernacular',
    'Process',
    'Collaboration',
    'Mapping',
    'Co-design',
    'Production',
    'History',
    'Archives',
    'Photography',
    'Typography'
  ];

  var places = [
    'Local',
    'Park',
    'Town',
    'City',
    'Village',
    'Pub',
    'Café',
    'Shops',
    'Supermarket',
    'Studio',
    'Workshop',
    'Neighbourhood',
    'Canteen',
    'Corner',
    'Field',
    'Home'
  ];

    var randomNum = function randomNum(length) {
      return Math.floor(Math.random() * length) + 0;
    };
  
    var siteInfo = document.querySelector(".site-info");
    var sentence = document.createElement("p");
    var wordOne = people[randomNum(people.length)];
    var wordTwo = object[randomNum(object.length)];
    var wordThree = places[randomNum(places.length)];

    sentence.innerText = ""
      .concat(wordOne, ", ")
      .concat(wordTwo, " & ")
      .concat('the ' + wordThree);

    siteInfo.prepend(sentence);
})();
  
