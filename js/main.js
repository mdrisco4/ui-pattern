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









//  NAME michae3975339

// Public Key  69be26d469c729fce76dafc0e7933d34

// Private Key  82f8e29ecde6f6c5421e8938a8a410da894103e9


const url = "https://developer.marvel.com/docs"

const ironManButton = document.querySelector("#ironman")

ironManButton.addEventListener("click", function() {
fetch(categoryUrl, {
    headers: {
        "x-api-key": "82f8e29ecde6f6c5421e8938a8a410da894103e9"
        }
    })
    .then(res => res.json())
    .then(ironMan => {
        document.querySelector(".ironManImage").setAttribute('src', (i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55))
        console.log("https://gateway.marvel.com:443/v1/public/characters?name=Iron%20Man&apikey=69be26d469c729fce76dafc0e7933d34.jpg")
        // document.querySelector(".randomCatImage").setAttribute('src', (catInfo[0].url))
    })

    function openHero(hero) {
        var i;
        var x = document.querySelector("hero");
        for (i = 0; i < x.length; i++) {
          x[i].style.display = "none";
        }
        document.getElementById(cityName).style.display = "block";
      }
      








// fetch(url)
//         .then(res => res.json())
//         .then(catInfo => {
//             // console.log(catInfo[0].url)

//             // document.querySelector(".randomCatImage").setAttribute('src', (catInfo[0].url))
//         })



