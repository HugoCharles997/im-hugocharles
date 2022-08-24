const txtAnim = document.querySelector(".title");
// const txtAnimTwo = document.querySelector(".sub-title");

                        // ANIM TITLE

// new Typewriter(txtAnim, {
//     loop: true
// })
// .changeDelay(100)
// .changeDeleteSpeed(15)
// .pauseFor(50)
// .typeString("Hello. <br></br>")
// .pauseFor(350)
// .changeDelay(40)
// .typeString("I am Hugo Charles, <br> ")
// .pauseFor(300)
// .typeString('<span style="color: #F4CFDF"><span style="background: #2E2E2E"><strong> Front-End developper</strong>.</span></span>')
// .pauseFor(800)
// .deleteChars(22)
// .typeString('<span style="color: #F4CFDF"><span style="background: #2E2E2E"> JavaScript developper.</span></span>')
// .pauseFor(800)
// .deleteChars(22)
// .typeString('<span style="color: #F4CFDF"><span style="background: #2E2E2E"> HTML and CSS developper.</span></span>')
// .pauseFor(800)
// .changeDeleteSpeed(1)
// .start()

new Typewriter(txtAnim, {
    loop: true
})
.changeDelay(100)
.changeDeleteSpeed(15)
.pauseFor(50)
.typeString("Hello. <br></br>")
.pauseFor(450)
.changeDelay(40)
.typeString("I am Hugo Charles, <br> ")
.pauseFor(300)
.typeString('<strong> <span style="color: #F4CFDF"> Front-End</span> developer.</strong>')
.pauseFor(800)
.deleteChars(21)
.typeString('<span style="color: #F4CFDF"> JavaScript</span> developer.')
.pauseFor(800)
.deleteChars(21)
.typeString('<span style="color: #F4CFDF"> HTML</span> and<span style="color: #F4CFDF"> CSS</span> developer.')
.pauseFor(800)
.changeDeleteSpeed(1)
.start()

                        // ANIM BTN


const btnAnimOne = document.getElementById("anim-socialmedia-one");
const btnAnimTwo = document.getElementById("anim-socialmedia-two");
const btnAnimThree = document.getElementById("anim-socialmedia-three");


setTimeout(() => {
    btnAnimOne.style.opacity = "1";
}, 1400);

setTimeout(() => {
    btnAnimTwo.style.opacity = "1";

}, 1800);

setTimeout(() => {
    btnAnimThree.style.opacity = "1";
}, 2200);


                                // ANIM MENU

const menuAnim = document.getElementById("sub-background-anim");
const menuShadowAnim = document.getElementById("shadow-background-anim");

setTimeout(() => {
    menuAnim.style.opacity = "1";
}, 5000);

setTimeout(() => {
    menuShadowAnim.style.opacity = "1";
}, 5300);

                                        // ANIM MUSIC BTN

const MusicBtnAnim = document.getElementById("music-background-anim")
const MusicShadowAnim = document.getElementById("music-shadow-anim")

setTimeout(() => {
    MusicBtnAnim.style.opacity = "1";
}, 5600);

setTimeout(() => {
    MusicShadowAnim.style.opacity = "1";
}, 5850);

                                    // LINE ANIM

const lineAnim = document.getElementById("line-home");

setTimeout(() => {
    lineAnim.style.opacity = "1";
}, 6500);


                        // MOUSEFOLLOWER

// document.body.addEventListener('mousemove', function(e) {
//     console.log(e.clientX);
//     console.log(e.clientY);
//     let target = document.querySelector(".mouse--follower");
//     target.style.left = e.clientX + 'px';
//     target.style.top = e.clientY + 'px';

// })

                // CIRCLE BTN

const text = document.getElementById('txt-btn-download');

text.innerHTML = text.innerText.split("").map(
    (char, i) =>
    `<span style="transform:rotate(${i * 15}deg)">${char}</span>`
).join("")

                        // CARD ANIM TYPEWRITER

const txtAnimCard = document.getElementById('card-title');

new Typewriter(txtAnimCard, {
    loop: true
})
.changeDelay(45)
.changeDeleteSpeed(10)
.pauseFor(50)
.typeString('For my <span style="color: #F4CFDF">programming</span> skills')
.pauseFor(1300)
.deleteChars(18)
.pauseFor(300)
.typeString('<span style="color: #F4CFDF">novative</span> ideas')
.pauseFor(1300)
.deleteChars(14)
.pauseFor(300)
.typeString('<span style="color: #F4CFDF">meticulous</span> work')
.pauseFor(1300)
.start()


                                    // BURGER


function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
}





