
import { projectsAddEventListeners } from './scripts/handle_projects.js';
import { populateBiography, populatePortfolio } from './scripts/load_content.js';

document.addEventListener('DOMContentLoaded', () => {
  populateBiography(document);
  populatePortfolio(document);
  projectsAddEventListeners(document);
});

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

