// Run code after the DOM has loaded
document.addEventListener('DOMContentLoaded', () => {
  populateBiography();
});

function populateBiography() {
  fetch('content/biography.json')
    .then(response => response.json())
    .then(data => {
      const biography = data;
      const template = document.getElementById('biography__template');
      document.title = biography.name;

      template.querySelector('.biography__picture').querySelector('img').src = biography.portrait;
      template.querySelector('.introduction__name').textContent = biography.name;
      template.querySelector('.introduction__profession').textContent = biography.profession.toLowerCase();

      if (biography.workplace !== '') {
        template.querySelector('.introduction__workplace').textContent = biography.workplace;
        template.querySelector('.introduction__workplace').href = biography.workplaceLink;
      }
      else template.querySelector('#if__introduction__workplace').remove();

      const templateLinks = template.querySelectorAll('.biography__link');
      templateLinks[1].remove();
      biography.links.forEach(biographyLink => {
        const templateLink = templateLinks[0].cloneNode(true);
        templateLink.removeAttribute('id');
        templateLink.href = biographyLink.link;
        templateLink.textContent = biographyLink.name;
        template.querySelector('.biography__links').appendChild(templateLink);
        template.querySelector('.biography__links').appendChild(document.createTextNode(' '));
      });

      if (biography.about !== '') {
        template.querySelector('.biography__about').textContent = biography.about;
      }
      else template.querySelector('#if__biography__about').remove();


    });
};



function fetchPortfolio() {
  // Fetch the JSON data
  fetch('content/portfolio.json')
    .then(response => response.json())
    .then(data => {
      const portfolioContainer = document.getElementById('portfolio');

      // Iterate over the portfolio items and create HTML elements
      data.portfolio.forEach(item => {
        const portfolioItem = document.createElement('div');
        portfolioItem.classList.add('portfolio-item');

        // Title Navigation button
        const portfolioTitle = document.createElement('div');
        portfolioTitle.classList.add('portfolio-title', 'navbutton');

        const title = document.createElement('div');
        title.textContent = item.title;
        title.classList.add('title');
        portfolioTitle.appendChild(title);

        const year = document.createElement('div');
        year.textContent = item.year;
        title.classList.add('year');
        portfolioTitle.appendChild(year);

        portfolioItem.appendChild(portfolioTitle);

        // Portfolio Content
        const portfolioContent = document.createElement('div');
        portfolioContent.classList.add('portfolio-content');

        const video = document.createElement('video');
        video.src = item.video;
        video.textContent = 'Your browser does not support the video tag.';
        portfolioContent.appendChild(video);

        // Context Island
        const island = document.createElement('div');
        island.classList.add('island');

        const companyLogo = document.createElement('img');
        companyLogo.src = item.companyLogo;
        companyLogo.height = '16';
        island.appendChild(companyLogo);

        const companyName = document.createElement('text');
        companyName.textContent = ' ' + item.companyName;
        companyName.classList.add('company');

        if (item.collaborators != '') {
          const collaborators = document.createElement('span');
          collaborators.textContent = ' · with ' + item.collaborators;
          companyName.appendChild(collaborators);
        }

        island.appendChild(companyName);
        portfolioContent.appendChild(island);

        // Text Content
        const text = document.createElement('div');
        text.classList.add('text');

        const descriptiveTitle = document.createElement('div');
        descriptiveTitle.classList.add('descriptive-title');
        descriptiveTitle.style.fontWeight = 'bold';
        descriptiveTitle.textContent = item.descriptiveTitle;
        text.appendChild(descriptiveTitle);

        const reason = document.createElement('div');
        reason.classList.add('reason');
        reason.textContent = item.reason;
        text.appendChild(reason);

        const projectRedirect = document.createElement('a');
        projectRedirect.classList.add('project-redirect');
        projectRedirect.textContent = 'View Project on ' + item.projectHostName;
        projectRedirect.href = item.projectLink;
        text.appendChild(projectRedirect);

        portfolioContent.appendChild(text);
        portfolioItem.appendChild(portfolioContent);

        portfolioContainer.appendChild(portfolioItem);
      });
    })
    .catch(error => console.error('Error fetching the JSON data:', error));
}

function fetchBiography() {
  // Fetch the JSON data
  fetch('content/biography.json')
    .then(response => response.json())
    .then(profile => {

      const biographyDiv = document.getElementById('biography');

      const profileHTML = `
        <div class="biography-container">
          <div class="profile-picture">
            <img src="${profile.portrait}" alt="Profile Picture">
          </div>
          <div class="profile-introduction">
            <span id="name">${profile.name}</span>,
            <br>
            <span id="profession">${profile.title}</span>
            at
            <span id="company">${profile.workplace}</span>
          </div>
          <div class="profile-links">
            ${profile.links.map(link => `
              <a class="link-column" href="${link.link}">
                <img src="${link.icon}" alt="${link.name}">
              </a>
            `).join('')}
          </div>
          <div class="profile-information">
            ${profile.aboutMeText}
          </div>
        </div>
    `;
      biographyDiv.innerHTML = profileHTML;
    })
    .catch(error => console.error('Error fetching the JSON data:', error));
}