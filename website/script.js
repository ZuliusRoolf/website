function fetchPortfolio() {
    // Fetch the JSON data
    fetch('portfolio.json')
    .then(response => response.json())
    .then(data => {
        const portfolioContainer = document.getElementById('portfolio');

        // Iterate over the portfolio items and create HTML elements
        data.portfolio.forEach(item => {
            const portfolioItem = document.createElement('div');
            portfolioItem.classList.add('portfolio-item');

            const title = document.createElement('h2');
            title.textContent = item.title;
            portfolioItem.appendChild(title);

            const date = document.createElement('p');
            date.textContent = `Date: ${item.date}`;
            portfolioItem.appendChild(date);

            const description = document.createElement('p');
            description.textContent = item.description;
            portfolioItem.appendChild(description);

            const technologies = document.createElement('ul');
            item.technologies.forEach(tech => {
                const techItem = document.createElement('li');
                techItem.textContent = tech;
                technologies.appendChild(techItem);
            });
            portfolioItem.appendChild(technologies);

            const link = document.createElement('a');
            link.href = item.link;
            link.textContent = 'View Project';
            portfolioItem.appendChild(link);

            portfolioContainer.appendChild(portfolioItem);
        });
    })
    .catch(error => console.error('Error fetching the JSON data:', error));
}