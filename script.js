const arrowDown = document.querySelector('.get-down');

arrowDown.addEventListener("click", (event) => {
  const stacks = document.querySelector('.stack');
  stacks.scrollIntoView({behavior: "smooth", block: "start"});
});

// const button = document.querySelector('.btn-green');
//
// button.addEventListener("click", (event) => {
  // console.log(button)
  // const contact = document.querySelector('.contact');
  // contact.scrollIntoView({behavior: "smooth", block: "start"});
// });
