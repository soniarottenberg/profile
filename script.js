const arrowDown = document.querySelector('.get-down');

arrowDown.addEventListener("click", (event) => {
  const stacks = document.querySelector('.stack');
  stacks.scrollIntoView({behavior: "smooth", block: "start"});
});

// about section

// const clickAbout = document.querySelector('#about');

// clickAbout.addEventListener("click", (event) => {
//   const about = document.querySelector('.about');
//   console.log("ok");
//   about.scrollIntoView({behavior: "smooth", block: "start"});
// });
