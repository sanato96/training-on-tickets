const image = document.querySelector('#task-image');
const highlightedElement = document.querySelector('#highlighted-element');
const heading = document.querySelector('h1');


// List of tasks
const tasks = [
  {
    image: "image1.jpg",
    task: "Найдите номер посадочного места",
    area: {
      x: 48,
      y: 20
    },
    position: {
      x: 0.16,
      y: 0.50
    }
  },
  {
    image: "image1.jpg",
    task: "Найдите номер вагона",
    area: {
      x: 31,
      y: 20
    },
    position: {
      x: 0.35,
      y: 0.41
    }
  },
  {
    image: "image1.jpg",
    task: "Найдите смысл жизни",
    area: {
      x: 22,
      y: 16
    },
    position: {
      x: 0.5,
      y: 0.5
    }
  }
];

let currentTaskIndex = 0;
let startTime = Date.now();

// Set the position of the highlighted element for the current task

highlightedElement.style.top = `${image.offsetTop + (image.offsetHeight * tasks[currentTaskIndex].position.y)}px`;
highlightedElement.style.left = `${image.offsetLeft + (image.offsetWidth * tasks[currentTaskIndex].position.x)}px`;
highlightedElement.style.width = `${tasks[currentTaskIndex].area.x}px`;
highlightedElement.style.height = `${tasks[currentTaskIndex].area.y}px`;
heading.textContent = tasks[currentTaskIndex].task;

highlightedElement.addEventListener('click', function() {
  // change the task to another one
  new Toast({
            title: false,
            text: 'Верно.',
            theme: 'info',
            autohide: true,
            interval: 1500
          });

  currentTaskIndex = (currentTaskIndex + 1) % tasks.length;
  if (currentTaskIndex === 0) {
    const elapsedTime = Math.ceil((Date.now() - startTime) / 1000);
    new Toast({
            title: false,
            text: `Справились за ${elapsedTime}с.`,
            theme: 'success',
            autohide: true,
            interval: 7500
          });
  }
  image.src = tasks[currentTaskIndex].image;
  highlightedElement.style.top = `${image.offsetTop + (image.offsetHeight * tasks[currentTaskIndex].position.y)}px`;
  highlightedElement.style.left = `${image.offsetLeft + (image.offsetWidth * tasks[currentTaskIndex].position.x)}px`;
  highlightedElement.style.width = `${tasks[currentTaskIndex].area.x}px`;
  highlightedElement.style.height = `${tasks[currentTaskIndex].area.y}px`;
  heading.textContent = tasks[currentTaskIndex].task;
});
