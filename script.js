// ANIMATE HERO SECTION

const loader = document.getElementById("spinner")

const ani0 = document.getElementById("animate-nav")
const ani1 = document.getElementById("animate-this1")
const ani2 = document.getElementById("animate-this2")
const ani3 = document.getElementById("header-description")
const ani4 = document.getElementById("animate-this4")
const ani5 = document.getElementById("animate-this5")

const hero1 = document.getElementById("element-to-animate1")
const hero2 = document.getElementById("element-to-animate2")
const hero3 = document.getElementById("element-to-animate3")
const hero4 = document.getElementById("element-to-animate4")
const hero5 = document.getElementById("element-to-animate5")
const hero6 = document.getElementById("element-to-animate6")
const hero7 = document.getElementById("f-that-logo")
const hero8 = document.getElementById("element-to-animate8")
const hero9 = document.getElementById("element-to-animate9")


document.addEventListener("DOMContentLoaded", function(){
    
    setTimeout(function() {document.body.style.position = "relative" }, 300)
    setTimeout(function() {loader.classList.add("hide-loader")}, 300)
    setTimeout(function() {ani0.classList.add("fade")},300);
    setTimeout(function() {ani1.classList.add("faded-hero")},400);
    setTimeout(function() {ani2.classList.add("faded-hero")},700);
    setTimeout(function() {ani3.classList.add("faded-hero")},1000);
    setTimeout(function() {ani4.classList.add("fade")},1300);
    setTimeout(function() {ani5.classList.add("fade")},1600);

    
    setTimeout(function() {hero1.classList.add("faded-hero");},500);
    setTimeout(function() {hero2.classList.add("faded-hero");},900);
    setTimeout(function() {hero3.classList.add("faded-hero");},1200);
    setTimeout(function() {hero4.classList.add("fade-headline-div");},1600);
    setTimeout(function() {hero5.classList.add("faded-description");},2000);
    setTimeout(function() {hero6.classList.add("fade");},2500);
    setTimeout(function() {hero7.classList.add("fade-logo");},2700);
    setTimeout(function() {hero8.classList.add("fade");},2700);
    setTimeout(function() {hero9.classList.add("shine");},3000);

}, false)


// ANIMATE LOGO ON SCROLL

function rotate() {
  const img = document.getElementById("sign");
  img.classList.add("rotated-logo");
  setTimeout(function(){ img.classList.add("rotated-back")}, 900);
  setTimeout(function(){ img.classList.remove("rotated-logo")}, 1500);
  setTimeout(function(){ img.classList.remove("rotated-back")}, 1500);
  
  }

window.onscroll = function() {myLogoFunction()};

const anchor = document.getElementById("logo-link");   
const header = document.getElementById("logo");
const rotateLogo = document.getElementById("sign");
const sticky = header.offsetTop;

function myLogoFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    anchor.setAttribute('href','#hero-section');
    rotateLogo.classList.add("sign");
  } else {
    header.classList.remove("sticky");
    anchor.setAttribute('href','https://www.damgrela.com/');
    rotateLogo.classList.remove("sign");
  }
}


// COPY MY EMAIL 

const myEmailBtnTop = document.getElementById('myEmailTop')
const myEmailBtnMob = document.getElementById('myEmailMob')
const myEmailBtnBot = document.getElementById('myEmailBot')

function getEmail() {
  const email = myEmailBtnTop.getAttribute('href')
  const shortEmail = email.substring(7)
  copyToClipboard(shortEmail)
  
  const tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "e-mail copied";
}

myEmailBtnTop.addEventListener("click",getEmail)
myEmailBtnMob.addEventListener("click", getEmail)
myEmailBtnBot.addEventListener("click", getEmail)



// Copies the email variable to clipboard
function copyToClipboard(text) {
const dummy = document.createElement("input");
document.body.appendChild(dummy);
dummy.setAttribute('value', text);
dummy.select();
document.execCommand('copy');
document.body.removeChild(dummy);
}

function outFunc() {
const tooltip = document.getElementById("myTooltip");
tooltip.innerHTML = "copy to clipboard";
}

function ShowSecond()
{
const show = document.getElementById("show-email");
show.className="email-copied";
setTimeout(function(){ show.className="show"; }, 3000);
setTimeout(function() { show.className="hide"; }, 4000);

}

function ShowMobile()
{
const show = document.getElementById("email-mobile");
show.className="email-mobile";
setTimeout(function(){ show.className="email-mobile-out"; }, 3000);
setTimeout(function() { show.className="hide"; }, 4000);

}



  // INTERSECTION OBSERVER
 

// Options docs: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options
const options = {
  root: null, // use the document's viewport as the container
  rootMargin: '0px', // % or px - offsets added to each side of the intersection 
  threshold: 0.1 // percentage of the target element which is visible
}
const playThis = document.querySelectorAll('.observer-play');
// Callback docs: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Targeting_an_element_to_be_observed
let callback = (entries) => { 
	entries.forEach(entry => {
		
		// If entry (box) is visible - according with the params set in `options`
		// then adds `isVisible` class to box
		// otherwise removes `isVisible` class
		
		if(entry.isIntersecting) {
			entry.target.classList.add('isVisible');
		} 

	});
}

// Create the intersection observer instance by calling its constructor and passing it a
// callback function to be run whenever a threshold is crossed in one direction or the other:
let observer = new IntersectionObserver(callback, options);


	playThis.forEach(snap => { observer.observe(snap) });