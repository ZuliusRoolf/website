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

            const reason  = document.createElement('div');
            reason.classList.add('reason');
            reason.textContent = item.reason;
            text.appendChild(reason);

            const projectRedirect  = document.createElement('a');
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