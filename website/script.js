// Run code after the DOM has loaded
let portfolio;
document.addEventListener('DOMContentLoaded', () => {
  portfolio = document.getElementsByClassName('portfolio')[0];
  populateBiography();
  populatePortfolio();
  populateExperience();
});
function toggleFade(element) {
  if (element.classList.contains('show')) {
    element.classList.remove('show');
    element.addEventListener('transitionend', () => {
      element.classList.add('--hidden');
    }, { once: true });
  } else {
    element.classList.remove('--hidden');
    requestAnimationFrame(() => {
      element.classList.add('show');
    });
  }
}
document.getElementById('if__biography__about').addEventListener('click', (event) => {
  event.preventDefault();
  const about = document.getElementsByClassName('biography__about')[0];
  // let hidden = about.classList.toggle('--hidden');
  toggleFade(about);
  const picture = document.getElementsByClassName('biography__picture')[0];
  picture.classList.toggle('--hidden');
  document.getElementById('if__biography__about').style.fontWeight = hidden ? '' : 'bold';
});

function togglePortfolioDetail(i) {
  projects = portfolio.getElementsByClassName('portfolio__project');
  for (let j = 0; j < projects.length; j++) {
    const detail = projects[j].querySelector('.detail');
    if (j !== i) {
      // Close all other project details
      detail.classList.add('--hidden');
    }
    else if (detail.classList.toggle('--hidden')) {
      // Close slected project if already open
      console.log('Closing ' + j);
    }
    else {
      // Open selected project
      console.log('Opening ' + j);
    }
  }
}

function addEventListenerToPortfolio() {
  const projects = portfolio.getElementsByClassName('portfolio__project');
  for (let i = 0; i < projects.length; i++) {
    projects[i].addEventListener('click', () => togglePortfolioDetail(i));
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
