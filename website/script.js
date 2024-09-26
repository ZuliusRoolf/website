
import { projectsAddEventListeners } from './scripts/handle_projects.js';
import { populateBiography, populatePortfolio, populateExperience } from './scripts/load_content.js';

// Run code after the DOM has loaded
let portfolio;
document.addEventListener('DOMContentLoaded', () => {
  portfolio = document.getElementsByClassName('portfolio')[0];
  populateBiography(document);
  populatePortfolio(document);
  // populateExperience(document);
  projectsAddEventListeners(document);
});

function addEventListenerToPortfolio() {
  const projects = portfolio.getElementsByClassName('portfolio__project');
  


  var buttonContainer = document.getElementById('portfolio__container');
  var preview = document.getElementById('portfolio__project__container');
  var selectedButton = null;

  // Event Delegation: Attach events to the parent container
  buttonContainer.addEventListener('mouseover', function (event) {
    if (event.target.classList.contains('project__button')) {
      var button = event.target;
      if (selectedButton && selectedButton !== button) {
        // Temporarily show hovered content
        preview.style.display = 'block';
        preview.innerHTML = getButtonContent(button);
      } else {
        // Show the hovered content
        preview.style.display = 'block';
        preview.textContent = getButtonContent(button) + (selectedButton === button ? ' (Selected)' : '');
        preview.innerHTML = getButtonContent(button);
      }
    }
  });

  buttonContainer.addEventListener('mouseout', function (event) {
    if (event.target.classList.contains('project__button')) {
      if (selectedButton) {
        // Restore the selected content
        preview.style.display = 'block';
        preview.textContent = getButtonContent(selectedButton) + ' (Selected)';
        preview.innerHTML = getButtonContent(button);
      } else {
        // Hide the preview area
        preview.style.display = 'none';
      }
    }
  });

  buttonContainer.addEventListener('click', function (event) {
    if (event.target.classList.contains('project__button')) {
      var button = event.target;
      if (selectedButton === button) {
        // Deselect the button
        button.classList.remove('selected');
        selectedButton = null;
        preview.style.display = 'none';
      } else {
        // Deselect any previously selected button
        if (selectedButton) {
          selectedButton.classList.remove('selected');
        }
        // Select the new button
        button.classList.add('selected');
        selectedButton = button;
        // Display the selected content with additional text
        preview.style.display = 'block';
        preview.textContent = getButtonContent(button) + ' (Selected)';
        preview.innerHTML = getButtonContent(button);
      }
    }
  });

  // Function to get the content of a button
  function getButtonContent(button) {
    // You can customize this function based on how the content is updated
    // For example, if the content is inside the button's text

    // get parent of button
    var parent = button.parentNode;
    var result = parent.querySelector('.project__detail').cloneNode(true);
    console.log(result);
    
    return result;

  }


  // Example function to dynamically add a button
  function addButton(name) {
    var newButton = document.createElement('div');
    newButton.classList.add('button');
    newButton.textContent = name;
    buttonContainer.appendChild(newButton);
    // No need to add event listeners individually due to event delegation
  }

  // Example usage: Dynamically add a button after 2 seconds
  setTimeout(function () {
    addButton('Button 4 (Added Later)');
  }, 2000);
}

function getWidestIntroductionElement() {
  const name = document.querySelector('.introduction__name');
  const profession = document.querySelector('.introduction__profession');
  const workplace = document.querySelector('#if__introduction__workplace');
  const nameWidth = name.getBoundingClientRect().width;
  const professionWidth = profession.getBoundingClientRect().width;
  const workplaceWidth = workplace !== null ? workplace.getBoundingClientRect().width : 0;
  return nameWidth > professionWidth + workplaceWidth ? nameWidth : professionWidth + workplaceWidth;
}

document.getElementById('if__biography__about').addEventListener('click', function (event) {
  event.preventDefault();
  const hiddenText = document.querySelector('.biography__about');
  const hiddenPicture = document.querySelector('.biography__picture');
  const imgElement = document.querySelector('.biography__picture img');
  const imgHeight = getWidestIntroductionElement() + "px";
  imgElement.style.height = imgHeight;
  imgElement.style.width = imgHeight;

  if (hiddenText.style.maxHeight) {
    hiddenText.style.maxHeight = null;
    hiddenPicture.style.maxHeight = null;
    hiddenText.classList.remove('biography__about--show');
    hiddenPicture.classList.remove('biography__picture--show');
  } else {
    hiddenText.style.maxHeight = hiddenText.scrollHeight + "px";
    hiddenPicture.style.maxHeight = hiddenPicture.scrollHeight + "px";
    hiddenText.classList.add('biography__about--show');
    hiddenPicture.classList.add('biography__picture--show');
  }
});


function hideBiography(hide = true) {
  biography = document.getElementsByClassName('biography')[0];
  if (hide) biography.classList.remove('biography--show');
  else biography.classList.add('biography--show');
}

function selectProject(i) {
  const projects = portfolio.getElementsByClassName('portfolio__project');
  for (let j = 0; j < projects.length; j++) {
    const detail = projects[j].querySelector('.detail');
    const preview = detail.querySelector('.project__preview');
    const video = preview.querySelector('.detail__video').querySelector('video');
    const selected = detail.querySelector('.project__selected');
    if (j !== i) {
      // Close all other project details
      detail.classList.remove('project__detail--selected');
      preview.classList.remove('project__preview--show');
      selected.classList.remove('project__selected--show');
      video.pause();
      video.currentTime = 0;
      continue;
    }
    if (detail.classList.toggle('project__detail--selected') === false) {
      // Close slected project if already open
      console.log('Deselecting ' + j);
      preview.classList.remove('project__preview--show');
      selected.classList.remove('project__selected--show');
      hideBiography(false)
      video.pause();
      video.currentTime = 0;
    }
    else {
      // Open selected project
      console.log('Selected ' + j);
      preview.classList.add('project__preview--show');
      selected.classList.add('project__selected--show');
      hideBiography(true)
      video.play();
    }
  }
}

function hoverProject(event, i, hover) {
  event.stopPropagation();
  const projects = portfolio.getElementsByClassName('portfolio__project');
  let hideBio = false;
  for (let j = 0; j < projects.length; j++) {
    const detail = projects[j].querySelector('.detail');
    const preview = detail.querySelector('.project__preview');
    const video = preview.querySelector('.detail__video').querySelector('video');

    if (hover) {
      if (j !== i) {
        // Close all other project details
        detail.classList.remove('project__detail--show');
        video.pause();
        video.currentTime = 0;
        continue;
      }
      else {
        hideBiography(true);
        detail.classList.add('project__detail--show');
        preview.classList.add('project__preview--show');
        video.play();
      }
    }
    if (hover === false) {
      detail.classList.add('project__detail--show');
      if (Array.from(detail.classList).includes('project__detail--selected')) {
        video.play();
        hideBio = true;
        continue;
      }
      video.pause();
      if (Array.from(detail.classList).includes('project__detail--show') === false) video.currentTime = 0;

      preview.classList.remove('project__preview--show');
      hideBiography(hideBio);
    }
  }
}
