export function projectsAddEventListeners(document) {

    const portfolioContainer = document.getElementById('portfolio__container');
    const selectedContainer = document.getElementById('project__container');
    const hoveredContainer = document.getElementById('hover__project__container');
    var selectedButton = null;
    var hoveredButton = null;

    portfolioContainer.addEventListener('mouseover', function (event) {
        if (window.innerWidth < 768) {
            return;
        }
        var button = event.target.closest('.project__button');
        if (button) {
            if (button.contains(event.relatedTarget))
                // Ignore mouse enter on child elements
                return;
            var project = getProjectContent(button);
            showHoveredProject(project);
        }
    }, true);

    portfolioContainer.addEventListener('mouseout', function (event) {
        if (window.innerWidth < 768) {
            return;
        }
        var button = event.target.closest('.project__button');
        if (button) {
            if (button.contains(event.relatedTarget))
                // Ignore mouse leave on child elements
                return;
            hideHoveredProject();
        }
    }, true);

    portfolioContainer.addEventListener('click', function (event) {
        var button = event.target.closest('.project__button');
        if (button) {
            if (window.innerWidth < 768) {
                // Select the project
                showSelectedProject(button);
                return;
            }
            if (selectedButton === button) {
                // Deselect the project
                selectedButton = null;
                hidePreview();
            }
        }
    }, true);

    selectedContainer.addEventListener('click', function (event) {
        if (window.innerWidth >= 768) {
            return;
        }
        if (event.target.closest('.portfolio__project')) {
            return;
        }
        // Deselect the project
        hideSelectedProject();
    });

    // Function to get the template content of a button
    function getProjectContent(button) {
        var templateId = button.getAttribute('data-template-id');
        if (templateId) {
            var template = document.getElementById(templateId);
            if (template) {
                // Return a clone of the template content
                var clone = template.cloneNode(true);
                // Set the data-template-id on the cloned content
                clone.setAttribute('data-template-id', templateId);
                return clone;
            }
        }
        return null;
    }

    function showSelectedProject(button) {
        if (selectedButton === button) {
            return;
        }
        if (window.innerWidth < 768) {
            selectedButton = button;
            const project = getProjectContent(button);
            selectedContainer.appendChild(project);
            void project.offsetWidth;
            project.classList.add('enter');
            project.querySelector('.project__content__selected').classList.add('enter');
            selectedContainer.classList.add('enter');
            return;
        }
    }

    function hideSelectedProject() {
        if (selectedButton === null) {
            return;
        }
        selectedButton = null;
        const project = selectedContainer.querySelector('.portfolio__project');
        if (project === null) {
            return;
        }
        project.classList.remove('enter');
        project.classList.add('exit');
        project.addEventListener('transitionend', onTransitionEnd);
        selectedContainer.classList.remove('enter');
        selectedContainer.classList.add('exit');

        function onTransitionEnd(event) {
            if (event.propertyName === 'opacity') {
                project.removeEventListener('transitionend', onTransitionEnd);
                selectedContainer.removeChild(project);
                selectedContainer.classList.remove('exit');
            }
        }
    }

    function showHoveredProject(button) {
        return;
    }
    
    function hideHoveredProject(){
        return;
    }
}