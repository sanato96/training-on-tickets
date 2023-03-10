
const heading = document.querySelector('h1');

const image = document.querySelector('#task-image');
const highlightedElement = document.querySelector('#highlighted-element');

let currentTaskIndex = 0;
let startTime = Date.now();

// Set the position of the highlighted element for the current task
// console.log("image.offsetTop " + image.offsetTop);
// console.log("image.offsetLeft " + image.offsetLeft);
// console.log("image.offsetHeight " + image.offsetHeight);
// console.log("image.offsetWidth " + image.offsetWidth);
let scaleFactor = (window.innerWidth <= 480) ? 2 : 1;
highlightedElement.style.top = `${image.offsetTop + (image.offsetHeight * tasks[currentTaskIndex].position.y)}px`;
highlightedElement.style.left = `${image.offsetLeft + (image.offsetWidth * tasks[currentTaskIndex].position.x)}px`;
highlightedElement.style.width = `${tasks[currentTaskIndex].area.x / scaleFactor}px`;
highlightedElement.style.height = `${tasks[currentTaskIndex].area.y / scaleFactor}px`;
heading.textContent = tasks[currentTaskIndex].task;

highlightedElement.addEventListener('click', function() {
  // change the task to another one
  currentTaskIndex = (currentTaskIndex + 1) % tasks.length;
  image.onload = function() {
    let scaleFactor = (window.innerWidth <= 480) ? 2 : 1;
    highlightedElement.style.top = `${image.offsetTop + (image.offsetHeight * tasks[currentTaskIndex].position.y)}px`;
    highlightedElement.style.left = `${image.offsetLeft + (image.offsetWidth * tasks[currentTaskIndex].position.x)}px`;
    highlightedElement.style.width = `${tasks[currentTaskIndex].area.x / scaleFactor}px`;
    highlightedElement.style.height = `${tasks[currentTaskIndex].area.y / scaleFactor}px`;
    heading.textContent = tasks[currentTaskIndex].task;
  }
  image.src = tasks[currentTaskIndex].image;
  image.onload();
  // console.log("image.offsetTop " + image.offsetTop);
  // console.log("image.offsetLeft " + image.offsetLeft);
  // console.log("image.offsetHeight " + image.offsetHeight);
  // console.log("image.offsetWidth " + image.offsetWidth);
  

  new Toast({
    title: false,
    text: 'Верно.',
    theme: 'info',
    autohide: true,
    interval: 1500
  });

  if (currentTaskIndex === 0) {
  let elapsedTime = Math.ceil((Date.now() - startTime) / 1000);
  new Toast({
      title: false,
      text: `Справились за ${elapsedTime}с.`,
      theme: 'success',
      autohide: true,
      interval: 7500
    });
  startTime = Date.now();
  }
});

