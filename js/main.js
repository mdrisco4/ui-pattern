// function heroDivs() {
//     for (i = 1; i < 8001; i++) {
//         var createDiv = document.createElement('div');
//         createDiv.className = "square"
//         document.querySelector('.controls').appendChild(createDiv);
//         createDiv.addEventListener('mouseover', function(evt){
//             evt.preventDefault();
//             evt.target.style.background = document.querySelector('#color-field').value
//         })
//     }
// }
// makeDivs()

// document.querySelectorAll(".hero").onclick = function (pageName, elmnt, color) {
//     // Hide all elements with class="tabcontent" by default */
//     var i, tabcontent, tablinks;
//     alert("hi")
//     hero = document.querySelectorAll(".content");
//     for (i = 0; i < content.length; i++) {
//       content[i].style.display = "none";
//     }





// function openPage(pageName, elmnt, color) {
//     // Hide all elements with class="tabcontent" by default */
//     var i, tabcontent, tablinks;
//     hero = document.querySelectorAll(".content");
//     for (i = 0; i < content.length; i++) {
//       content[i].style.display = "none";
//     }






// // Remove the background color of all tablinks/buttons
// content = document.querySelectorAll(".hero");
// for (i = 0; i < hero.length; i++) {
//   hero[i].style.backgroundColor = "";
// }

// // Show the specific tab content
// document.querySelector(pageName).style.display = "block";

// // Add the specific color to the button used to open the tab content
// elmnt.style.backgroundColor = color;
// }

// // Get the element with id="defaultOpen" and click on it
// document.querySelector("#defaultOpen").click();

console.log(Date());
console.log()

// console.log(Timestamp(System.currentTimeMillis()))

// var PRIV_KEY = "82f8e29ecde6f6c5421e8938a8a410da894103e9";
// var PUBLIC_KEY = "69be26d469c729fce76dafc0e7933d34";

// function getMarvelResponse() {

//   // you need a new ts every request                                                                                    
//   var ts = new Date().getTime();
//   var hash = CryptoJS.MD5(ts + PRIV_KEY + PUBLIC_KEY).toString();
  
//   // the api deals a lot in ids rather than just the strings you want to use
//   var characterId = '1009718'; // wolverine                                                                             


//   var url = 'http://gateway.marvel.com:80/v1/public/comics';

//   console.log(url);
//   $.getJSON(url, {
//     ts: ts,
//     apikey: PUBLIC_KEY,
//     hash: hash,
//     characters: characterId
//     })
//     .done(function(data) {
//       // sort of a long dump you will need to sort through
//       console.log(data);
//     })
//     .fail(function(err){
//       // the error codes are listed on the dev site
//       console.log(err);
//     });
// };

// getMarvelResponse();
// @Villanuevand




//  NAME michae3975339

publicKey = "69be26d469c729fce76dafc0e7933d34"

privateKey = "82f8e29ecde6f6c5421e8938a8a410da894103e9"

// library(digest)
// hash <- digest(paste0(ts, privateKey, publicKey), algo="md5")
// console.log(hash)

const url = "https://developer.marvel.com/docs/v1/public/characters"
const testurl = "https://gateway.marvel.com:443/v1/public/characters?name=iron%20man&apikey=69be26d469c729fce76dafc0e7933d34"
const ironManButton = document.querySelector("#tab1")

ironManButton.addEventListener("click", function() {
fetch(testurl, {
    headers: {
        "x-api-key": "69be26d469c729fce76dafc0e7933d34"
        }
    })
    .then(res => res.json())
    .then(res => {
        // document.querySelector(".ironManImage").setAttribute('src', (i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55))
        console.log(res)
        // document.querySelector(".randomCatImage").setAttribute('src', (catInfo[0].url))
    })
})
// console.log("gateway.marvel.com:443/v1/public/characters?name=iron%20man&apikey=69be26d469c729fce76dafc0e7933d34")

// function openHero(hero) {
    //     var i;
    //     var x = document.querySelector("hero");
    //     for (i = 0; i < x.length; i++) {
    //       x[i].style.display = "none";
    //     }
    //     document.getElementById(cityName).style.display = "block";
    //   }
      








// fetch(url)
//         .then(res => res.json())
//         .then(catInfo => {
//             // console.log(catInfo[0].url)

//             // document.querySelector(".randomCatImage").setAttribute('src', (catInfo[0].url))
//         })



