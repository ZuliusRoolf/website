// Run code after the DOM has loaded
let portfolio;
document.addEventListener('DOMContentLoaded', () => {
  portfolio = document.getElementsByClassName('portfolio')[0];
  populateBiography();
  populatePortfolio();
  populateExperience();
});

function addEventListenerToPortfolio() {
  const projects = portfolio.getElementsByClassName('portfolio__project');
  for (let i = 0; i < projects.length; i++) {
    const button = projects[i].querySelector('.project__button');
    button.addEventListener('mouseover', () => hoverProject(i, true));
    button.addEventListener('mouseout', () => hoverProject(i, false));
    button.addEventListener('click', () => selectProject(i));
  }
}

function populateBiography() {
  fetch('content/biography.json')
    .then(response => response.json())
    .then(data => {
      const biography = data;
      const template = document.getElementById('biography__template');
      document.title = biography.name;

      //Picture, Name, Profession
      template.querySelector('.biography__picture img').src = biography.portrait;
      template.querySelector('.introduction__name').textContent = biography.name;
      template.querySelector('.introduction__profession').textContent = biography.profession.toLowerCase();

      //Workplace
      if (biography.workplace !== '') {
        template.querySelector('.introduction__workplace').textContent = biography.workplace;
        template.querySelector('.introduction__workplace').href = biography.workplaceLink;
      }
      else template.querySelector('#if__introduction__workplace').remove();

      //Links
      const templateLinks = template.querySelectorAll('.biography__social__link');
      for (let i = 1; i < templateLinks.length; i++) templateLinks[i].remove();
      biography.links.forEach(biographyLink => {
        const templateLink = templateLinks[0].cloneNode(true);
        templateLink.removeAttribute('id');
        templateLink.href = biographyLink.link;
        templateLink.textContent = biographyLink.name;
        template.querySelector('.biography__social').appendChild(templateLink);
        template.querySelector('.biography__social').appendChild(document.createTextNode(' '));
      });

      //About
      if (biography.about !== '') {
        template.querySelector('.biography__about').innerHTML = biography.about.replace(/\n/g, '<br>');
      }
      else {
        template.querySelector('#if__biography__about').remove();
        template.querySelector('.biography__about').remove();
      }
    });
};

function populatePortfolio() {
  fetch('content/portfolio.json')
    .then(response => response.json())
    .then(data => {
      const projectTemplate = document.getElementById('portfolio__project__template');

      //Portfolio Projects
      data.portfolio.forEach(project => {
        const template = projectTemplate.cloneNode(true);
        template.removeAttribute('id');
        template.querySelector('.project__button__title').textContent = project.title;
        template.querySelector('.project__button__year').textContent = project.year;
        template.querySelector('.detail__video video source').src = project.video;
        template.querySelector('.contribution__company__logo').src = project.companyLogo;
        template.querySelector('.contribution__company').textContent = project.companyName;
        if (project.collaborators !== '')
          template.querySelector('.contribution__collaborators').textContent = project.collaborators;
        else template.querySelector('#if__contribution__collaborators').remove();
        template.querySelector('.detail__description__title').textContent = project.descriptiveTitle;
        template.querySelector('.detail__description__text').textContent = project.reason;
        template.querySelector('.detail__redirect').href = project.sourceLink;
        template.querySelector('.detail__source').textContent = project.sourceName;
        portfolio.appendChild(template);
      });
      projectTemplate.remove();
      addEventListenerToPortfolio();
    });
};

function populateExperience() {
  fetch('content/experience.json')
    .then(response => response.json())
    .then(data => {

    });
};

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
  imgHeight = getWidestIntroductionElement() + "px";
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
    const detailVideo = detail.querySelector('.detail__video');
    const video = detailVideo.querySelector('video');
    const detailContribution = detail.querySelector('.detail__contribution');
    const detailDescription = detail.querySelector('.detail__description');
    const detailRedirect = detail.querySelector('.detail__redirect');
    if (j !== i) {
      // Close all other project details
      detail.classList.remove('project__detail--selected');
      detailVideo.classList.remove('detail__video--show');
      detailContribution.classList.remove('detail__contribution--show');
      detailDescription.classList.remove('detail__description--show');
      detailRedirect.classList.remove('detail__redirect--show');
      video.pause();
      video.currentTime = 0;
      continue;
    }
    if (detail.classList.toggle('project__detail--selected') === false) {
      // Close slected project if already open
      console.log('Deselecting ' + j);
      detailVideo.classList.remove('detail__video--show');
      detailContribution.classList.remove('detail__contribution--show');
      detailDescription.classList.remove('detail__description--show');
      detailRedirect.classList.remove('detail__redirect--show');
      hideBiography(false)
      video.pause();
      video.currentTime = 0;
    }
    else {
      // Open selected project
      console.log('Selected ' + j);
      detailVideo.classList.add('detail__video--show');
      detailContribution.classList.add('detail__contribution--show');
      detailDescription.classList.add('detail__description--show');
      detailRedirect.classList.add('detail__redirect--show');
      hideBiography(true)
      video.play();
    }
  }
}

function hoverProject(i, hover) {
  const projects = portfolio.getElementsByClassName('portfolio__project');
  let hideBio = false;
  for (let j = 0; j < projects.length; j++) {
    const detail = projects[j].querySelector('.detail');
    const detailVideo = detail.querySelector('.detail__video');
    const video = detailVideo.querySelector('video');
    const detailContribution = detail.querySelector('.detail__contribution');

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
        detailVideo.classList.add('detail__video--show');
        detailContribution.classList.add('detail__contribution--show');
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

      detailVideo.classList.remove('detail__video--show');
      detailContribution.classList.remove('detail__contribution--show');
      hideBiography(hideBio);
    }
  }
}
