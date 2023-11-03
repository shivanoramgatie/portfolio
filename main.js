// SMOOTHSCROLL
const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// REVEAL ANIMATIONS
gsap.fromTo(
  ".hero-text",
  {
    clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
    opacity: 0,
    y: 200,
  },
  {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    opacity: 1,
    duration: 1,
    stagger: 0.1,
    y: 0,
    ease: "expo.out",
  }
);

gsap.fromTo(
  ".logo-text, .menu, .mail",
  {
    ease: "expo.out",
    opacity: 0,
    stagger: 0.5,
    y: 20,
  },
  {
    duration: 1.5,
    delay: 0.6,
    opacity: 1,
    stagger: 0.5,
    ease: "power4.inOut",
    y: 0,
  }
);

const scroll = new SplitType(".scroll");

gsap.from(".hero-arrow", {
  y: -40,
  duration: 1.4,
  ease: "expo.out",
  opacity: 0,
  delay: 0.6,
});

gsap.from(".char", {
  y: 40,
  stagger: 0.015,
  duration: 0.7,
  ease: "expo.out",
  opacity: 0,
  delay: 0.7,
});

// REVEAL ANIMATIONS ABOUT
gsap.from(".netherlands g path", {
  ease: "slow(0.7,0.7,false)",
  stagger: 0.03,
  y: 2000,
  duration: 0.5,
});

gsap.from(".about-box", {
  ease: "slow(0.7,0.7,false)",
  stagger: 0.03,
  x: -20,
  duration: 0.5,
  opacity: 0,
  delay: 0.9,
});

// MENU TOGGLE
const menu = document.querySelector(".menu-toggle");
const menuItems = document.querySelectorAll(".menu-box-two ul div a li");
const hamburger = document.querySelector(".menu");
const closeButton = document.querySelector(".close-button");
const socialButtons = document.querySelectorAll(".menu-socials svg");
const menuContact = document.querySelectorAll(
  ".menu-box-one h1, .menu-box-one p, .menu-box-one div"
);
const closeClick = document.querySelector(".menu-box-two a");
const closeClickMenu = document.querySelector(".menu-box-two .contact-menu");

let menuOpen = false;

gsap.set(menu, {
  y: "-100vh",
  scaleY: 0,
});

gsap.set(menuItems, {
  yPercent: 100,
});

const navTl = gsap.timeline({
  defaults: {
    ease: "power3.out",
    duration: 0.8,
    delay: 0,
  },
});

navTl
  .to(menu, {
    y: 0,
    scaleY: 1,
  })
  .fromTo(
    closeButton,
    {
      rotation: 1440,
      opacity: 0,
    },
    {
      rotation: 0,
      opacity: 1,
    },
    "<"
  )
  .to(
    menuItems,
    {
      yPercent: 0,
      stagger: 0.05,
    },
    "-=0.6"
  )
  .fromTo(
    socialButtons,
    {
      y: 25,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      stagger: 0.04,
    },
    "-=0.5"
  )
  .from(
    menuContact,
    {
      y: 30,
      opacity: 0,
      stagger: 0.03,
    },
    "-=0.8"
  );

navTl.pause();

hamburger.addEventListener("click", () => {
  if (!menuOpen) {
    navTl.play();
    menuOpen = true;
  } else {
    navTl.reverse();
    menuOpen = false;
  }
});

closeButton.addEventListener("click", () => {
  if (menuOpen) {
    navTl.reverse();
    menuOpen = false;
  }
});

closeClick.addEventListener("click", () => {
  if (menuOpen) {
    navTl.reverse();
    menuOpen = false;
  }
});

closeClickMenu.addEventListener("click", () => {
  if (menuOpen) {
    navTl.reverse();
    menuOpen = false;
  }
});

window.addEventListener("load", () => {
  menu.classList.remove("menu-hidden");
});

// PARALLAX
let mm = gsap.matchMedia();

mm.add("(min-width: 1175px", () => {
  gsap.to(".about-more", {
    yPercent: -20,
    ease: "none",
    scrollTrigger: {
      trigger: ".container-two",
      scrub: true,
    },
  });

  gsap.to(".about-section", {
    yPercent: 60,
    ease: "none",
    scrollTrigger: {
      trigger: ".container-two",
      scrub: true,
    },
  });

  gsap.to(".service-more", {
    yPercent: -90,
    ease: "none",
    scrollTrigger: {
      trigger: ".container-three",
      scrub: true,
    },
  });

  gsap.to(".service-section", {
    yPercent: -20,
    ease: "none",
    scrollTrigger: {
      trigger: ".container-three",
      scrub: true,
    },
  });
});

// SCROLL ANIMATIONS
gsap.registerPlugin(ScrollTrigger);

const splitTypes = document.querySelectorAll(".fade");

splitTypes.forEach((char, i) => {
  const text = new SplitType(char, { types: "chars, words" });

  gsap.from(text.chars, {
    scrollTrigger: {
      trigger: char,
      start: "top 90%",
      end: "top 35%",
      scrub: true,
      markers: false,
    },
    opacity: 0.1,
    stagger: 0.05,
  });
});

const splitTypesReveal = document.querySelectorAll(".reveal");

splitTypesReveal.forEach((char, i) => {
  const text = new SplitType(char, { types: "chars, words" });

  gsap.from(text.chars, {
    scrollTrigger: {
      trigger: char,
      start: "top 90%",
      end: "top 35%",
      scrub: false,
      markers: false,
    },
    duration: 0.2,
    y: 200,
    stagger: 0.03,
    opacity: 0,
  });
});

let project = gsap.timeline({
  scrollTrigger: {
    trigger: ".project",
    start: "top center",
    end: "bottom center",
    scrub: false,
    markers: false,
  },
});

project.from(".project", {
  y: 60,
  opacity: 0,
  duration: 0.5,
  ease: "power4.out",
});

let tlBoxLeft = gsap.timeline({
  scrollTrigger: {
    trigger: ".boxleft",
    start: "top center",
    end: "bottom center",
    scrub: false,
    markers: false,
  },
});

tlBoxLeft.from(".boxleft", {
  x: -200,
  rotation: -45,
  opacity: 0,
  stagger: 0.3,
  duration: 0.5,
  ease: "power4.out",
});

let tlBoxRight = gsap.timeline({
  scrollTrigger: {
    trigger: ".boxright",
    start: "10% 80%",
    end: "bottom center",
    scrub: false,
    markers: false,
  },
});

tlBoxLeft.from(
  ".boxright",
  {
    x: 200,
    rotation: -45,
    opacity: 0,
    stagger: 0.3,
    duration: 0.5,
    ease: "power4.out",
  },
  "-=0.9"
);

let tlAbout = gsap.timeline({
  scrollTrigger: {
    trigger: ".about-more",
    start: "top 80%",
    end: "bottom center",
    scrub: false,
    markers: false,
  },
});

tlAbout.from(".about-more", {
  x: 200,
  rotation: -45,
  opacity: 0,
  stagger: 0.3,
  duration: 0.5,
  ease: "power4.out",
});

let tlService = gsap.timeline({
  scrollTrigger: {
    trigger: ".service-more",
    start: "top 80%",
    end: "bottom center",
    scrub: false,
    markers: false,
  },
});

tlService.from(".service-more", {
  x: -200,
  rotation: 45,
  opacity: 0,
  stagger: 0.3,
  duration: 0.5,
  ease: "power4.out",
});

let tlServiceSection = gsap.timeline({
  scrollTrigger: {
    trigger: ".service-section",
    start: "top 80%",
    end: "bottom center",
    scrub: false,
    markers: false,
  },
});

tlServiceSection.from(".service-section", {
  x: 200,
  rotation: -20,
  opacity: 0,
  stagger: 0.3,
  duration: 0.5,
  ease: "power4.out",
});

let hobbieOne = gsap.timeline({
  scrollTrigger: {
    trigger: ".hobby-box-one",
    start: "top center",
    end: "bottom center",
    scrub: false,
    markers: false,
  },
});

hobbieOne.from(".hobby-box-one", {
  y: 60,
  opacity: 0,
  duration: 0.5,
  ease: "power4.out",
});

let hobbieTwo = gsap.timeline({
  scrollTrigger: {
    trigger: ".hobby-box-two",
    start: "top center",
    end: "bottom center",
    scrub: false,
    markers: false,
  },
});

hobbieTwo.from(".hobby-box-two", {
  y: 60,
  opacity: 0,
  duration: 0.5,
  ease: "power4.out",
});

let why = gsap.timeline({
  scrollTrigger: {
    trigger: ".why",
    start: "top center",
    end: "bottom center",
    scrub: false,
    markers: false,
  },
});

why.from(".why", {
  x: 600,
  opacity: 0,
  duration: 0.5,
  stagger: 0.05,
  ease: "power4.out",
});

let whyMe = gsap.timeline({
  scrollTrigger: {
    trigger: ".container-three h1",
    start: "top center",
    end: "bottom center",
    scrub: false,
    markers: false,
  },
});

whyMe.from(".container-three h1", {
  y: 60,
  opacity: 0,
  duration: 0.5,
  ease: "power4.out",
});

// PROJECTS PAGE
function createToggleFunctionLeft(boxClass, sideboxClass, textBoxClass) {
  const box = document.querySelector(`.${boxClass}`);
  const sidebox = document.querySelector(`.${sideboxClass}`);
  const textbox = document.querySelector(`.${textBoxClass}`);
  let expanded = false;

  return function Toggle() {
    if (expanded) {
      setTimeout(() => {
        box.classList.add("collapseLeft");
        box.classList.remove("expandedLeft");
        sidebox.classList.remove("expandedLeft");
        sidebox.classList.add("collapseLeft");
      }, 500);
      textbox.style.animation =
        "collapseText 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards";
    } else {
      box.classList.add("expandedLeft");
      box.classList.remove("collapseLeft");
      sidebox.classList.add("expandedLeft");
      sidebox.classList.remove("collapseLeft");
      setTimeout(() => {
        textbox.style.display = "block";
        textbox.style.animation =
          "expandedText 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards";
      }, 900);
    }

    expanded = !expanded;
  };
}

const toggleBoxOne = createToggleFunctionLeft("boxOne", "sideboxOne", "boxTwo");
const toggleBoxThree = createToggleFunctionLeft(
  "boxFive",
  "sideboxThree",
  "boxSix"
);
const toggleBoxFive = createToggleFunctionLeft(
  "boxNine",
  "sideboxFive",
  "boxTen"
);

function createToggleFunctionRight(boxClass, sideboxClass, textBoxClass) {
  const box = document.querySelector(`.${boxClass}`);
  const sidebox = document.querySelector(`.${sideboxClass}`);
  const textbox = document.querySelector(`.${textBoxClass}`);

  let expanded = false;

  return function Toggle() {
    if (expanded) {
      setTimeout(() => {
        box.classList.add("collapseRight");
        box.classList.remove("expandedRight");
        sidebox.classList.remove("expandedRight");
        sidebox.classList.add("collapseRight");
      }, 500);
      textbox.style.animation =
        "collapseText 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards";
    } else {
      box.classList.add("expandedRight");
      box.classList.remove("collapseRight");
      sidebox.classList.add("expandedRight");
      sidebox.classList.remove("collapseRight");
      setTimeout(() => {
        textbox.style.display = "block";
        textbox.style.animation =
          "expandedText 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards";
      }, 900);
    }
    expanded = !expanded;
  };
}

const toggleBoxTwo = createToggleFunctionRight(
  "boxThree",
  "sideboxTwo",
  "boxFour"
);
const toggleBoxFour = createToggleFunctionRight(
  "boxSeven",
  "sideboxFour",
  "boxEight"
);

// JSON DATABASE SERVICES

$(document).ready(function () {
  $.getJSON("services.json", function (data) {
    console.log(data);

    $(".skillOne").html(data.skillOne);
    $(".skillTwo").html(data.skillTwo);
    $(".skillThree").html(data.skillThree);
  }).fail(function () {
    console.log("Check your code");
  });
});
