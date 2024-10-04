export function projectsAddEventListeners(document) {

    const portfolioContainer = document.getElementById('portfolio__container');
    const selectedContainer = document.getElementById('project__container');
    const hoveredContainer = document.getElementById('hover__project__container');

    portfolioContainer.addEventListener('mouseover', function (event) {
        if (window.innerWidth < 768) {
            return;
        }
        var button = event.target.closest('.project__button');
        if (button) {
            if (button.contains(event.relatedTarget))
                // Ignore mouse enter on child elements
                return;
            showHoveredProject(button);
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
            hideHoveredProject(button);
        }
    }, true);

    portfolioContainer.addEventListener('pointerdown', function (event) {
        var button = event.target.closest('.project__button');
        if (button) {
            showSelectedProject(button);
        }
    }, true);

    selectedContainer.addEventListener('pointerdown', function (event) {
        if (window.innerWidth >= 768) {
            return;
        }
        if (event.target.closest('.portfolio__project')) {
            return;
        }
        // Deselect the project in mobile view
        hideAllSelectedProjects();
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

    function getProjectInstance(button, container) {
        const selector = '.portfolio__project[data-template-id="' + button.getAttribute('data-template-id') + '"]';
        return container.querySelector(selector);
    }

    function showSelectedProject(button) {
        const selectedProject = getProjectInstance(button, selectedContainer);
        const hoveredProject = getProjectInstance(button, hoveredContainer);

        // Mobile view (no hover effect)
        if (hoveredProject === null) {
            if (selectedContainer.querySelector('.portfolio__project')) {
                hideAllSelectedProjects();
            }
            if (selectedProject !== null) {
                return;
            }
            const project = getProjectContent(button);
            selectedContainer.appendChild(project);
            void project.offsetWidth;
            project.classList.add('enter');
            project.querySelector('.project__content__selected').classList.add('enter');
            selectedContainer.classList.remove('exit');
            selectedContainer.classList.add('enter');
            return;
        }


        // PSEUDO CODE
        // Check if the click is supposed to select or deselect
        // if select then deselect current selection
        // move project from hovered to selected
        // apply animations
        // if deselect then move project from selected to hovered
        // apply animations

        // Deselect the project
        if (selectedProject !== null) {
            hideAllSelectedProjects();
            return;
        }

        // Select the project
        if (selectedProject === null) {
            return;
        }




        const selectedProjectList = selectedContainer.querySelectorAll('.portfolio__project');
        selectedProjectList.forEach(project => {
            project.classList.remove('enter');
            project.classList.add('exit');
            console.log('exit applied on ' + project.getAttribute('data-template-id'));

        });

        console.log(hoveredProject);
        console.log(selectedProject);



        if (hoveredProject !== null) {
            if (selectedProject !== null)
                selectedContainer.removeChild(selectedProject);
            selectedContainer.classList.add('enter');
            selectedContainer.classList.remove('exit');
            selectedContainer.appendChild(hoveredProject);
            hoveredContainer.classList.remove('enter');
            hoveredContainer.classList.remove('exit');
            // Initilize so that it can utilize animations
            const projectContent = hoveredProject.querySelector('.project__content__selected');
            void projectContent.offsetWidth;
            projectContent.classList.add('enter');
            projectContent.classList.remove('exit');
            return;
        }

        if (selectedProject !== null) {
            selectedContainer.classList.remove('enter');
            selectedContainer.classList.add('exit');
            hoveredContainer.appendChild(selectedProject);
            hoveredContainer.classList.add('enter');
            hoveredContainer.classList.remove('exit');
            // Initilize so that it can utilize animations
            const projectContent = selectedProject.querySelector('.project__content__selected');
            void projectContent.offsetWidth;
            projectContent.classList.add('enter');
            projectContent.classList.remove('exit');
        }


    }

    function hideAllSelectedProjects() {
        const projectList = selectedContainer.querySelectorAll('.portfolio__project');
        projectList.forEach(project => {
            project.classList.remove('enter');
            project.classList.add('exit');
            project.addEventListener('transitionend', onTransitionEnd);

        });

        selectedContainer.classList.remove('enter');
        selectedContainer.classList.add('exit');

        function onTransitionEnd(event) {
            if (event.propertyName === 'opacity') {
                event.target.removeEventListener('transitionend', onTransitionEnd);
                if (event.target.classList.contains('exit')) {
                    if (event.target.parentNode) {
                        event.target.parentNode.removeChild(event.target);
                    }
                }
                if (selectedContainer.querySelector('.portfolio__project') === null) {
                    selectedContainer.classList.remove('exit');
                    selectedContainer.classList.remove('enter');
                }
            }
        }
    }

    function showHoveredProject(button) {
        var project = getProjectInstance(button, hoveredContainer);

        if (getProjectInstance(button, selectedContainer) !== null)
            return;
        // var project = hasHovered(button);
        if (project !== null) {
            project.classList.add('enter');
            project.classList.remove('exit');
            hoveredContainer.classList.remove('exit');
            hoveredContainer.classList.add('enter');
            return;
        }
        project = getProjectContent(button);
        hoveredContainer.appendChild(project);
        void project.offsetWidth;
        project.classList.remove('exit');
        project.classList.add('enter');
        hoveredContainer.classList.remove('exit');
        hoveredContainer.classList.add('enter');
        return;


    }

    function hideHoveredProject(button) {
        const project = getProjectInstance(button, hoveredContainer);

        if (project === null) {
            return;
        }

        project.classList.remove('enter');
        project.classList.add('exit');
        project.addEventListener('transitionend', onTransitionEnd);
        hoveredContainer.classList.remove('enter');
        hoveredContainer.classList.add('exit');

        function onTransitionEnd(event) {
            if (event.propertyName === 'opacity') {
                project.removeEventListener('transitionend', onTransitionEnd);
                if (project.classList.contains('exit')) {
                    if (project.parentNode) {
                        project.parentNode.removeChild(project);
                    }
                }
                if (hoveredContainer.querySelector('.portfolio__project') === null) {
                    hoveredContainer.classList.remove('exit');
                    hoveredContainer.classList.remove('enter');
                }
            }
        }
    }
}