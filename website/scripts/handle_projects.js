export function projectsAddEventListeners(document) {

    const portfolioContainer = document.getElementById('portfolio__container');
    const deselectContainer = document.getElementById('deselect__project__container');
    const selectedContainer = document.getElementById('select__project__container');
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

    let isTouch = false;
    let isScrolling = false;
    let startX = 0;
    let startY = 0;
    let startTime = 0;

    // Listen for pointer down event
    portfolioContainer.addEventListener('pointerdown', function (event) {
        // Track the start position of the pointer
        startX = event.clientX;
        startY = event.clientY;
        startTime = Date.now();
        isScrolling = false;
    });

    // Listen for pointer move event
    portfolioContainer.addEventListener('pointermove', function (event) {
        // Determine how far the pointer has moved
        const diffX = Math.abs(event.clientX - startX);
        const diffY = Math.abs(event.clientY - startY);

        // If the movement exceeds a small threshold, consider it a scroll
        if (diffX > 10 || diffY > 10) {
            isScrolling = true;
        }
    });

    // Listen for pointer up event
    portfolioContainer.addEventListener('pointerup', function (event) {
        // Calculate the duration of the interaction
        const duration = Date.now() - startTime;

        // If it's not scrolling and the duration is short, consider it a tap
        if (!isScrolling && duration < 500) {
            var button = event.target.closest('.project__button');
            if (!button) {
                return;
            }
            if (event.pointerType === 'touch') {
                isTouch = true;
                showTouchSelectedProject(button);
                return;
            }
            isTouch = false;
            if (window.innerWidth < 768) {
                showTouchSelectedProject(button);
                return;
            }
            showSelectedProject(button);
        }
    }, true);

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

    function getProjectInstance(button, container) {
        const selector = '.portfolio__project[data-template-id="' + button.getAttribute('data-template-id') + '"]';
        return container.querySelector(selector);
    }

    function showTouchSelectedProject(button) {
        const selectedProject = getProjectInstance(button, selectedContainer);
        if (selectedContainer.querySelector('.portfolio__project')) {
            hideAllSelectedProjects();
        }
        if (selectedProject !== null) {
            return;
        }
        const project = getProjectContent(button);
        selectedContainer.appendChild(project);
        void project.offsetWidth;
        changeState(project, 'enter');
        changeState(project.querySelector('.project__content__selected'), 'enter');
        changeState(selectedContainer, 'enter');
    }

    function changeState(element, state, instant = false) {
        if (element === null) {
            return;
        }
        const originalTransition = element.style.transition;
        if (instant) {
            element.style.transition = 'none';
        }
        if (state === 'enter') {
            element.classList.remove('exit');
            element.classList.add('enter');
        } else if (state === 'exit') {
            element.classList.remove('enter');
            element.classList.add('exit');
        } else if (state === 'hidden') {
            element.classList.remove('enter');
            element.classList.remove('exit');
        }
        if (instant) {
            void element.offsetWidth;
            element.style.transition = originalTransition;
        }
    }

    function showSelectedProject(button) {
        const selectedProject = getProjectInstance(button, selectedContainer);
        const hoveredProject = getProjectInstance(button, hoveredContainer);

        if (selectedProject !== null) {
            // Deselect the project
            changeState(hoveredContainer, 'enter', true);
            changeState(selectedContainer, 'hidden', true);
            hoveredContainer.appendChild(selectedProject);
            void selectedProject.offsetWidth;
            changeState(selectedProject.querySelector('.project__content__selected'), 'exit');
            return;
        }

        if (selectedProject === null) {
            // Select the project
            if (hoveredProject === null) {
                console.log('hovered project is null');
                return;
            }
            // Replace the selected project with the hovered project
            if (selectedContainer.querySelector('.portfolio__project')) {
                hideAllSelectedProjects();
            }
            // Move the hovered project to the selected container
            if (hoveredProject.classList.contains('enter')) {
                selectedContainer.appendChild(hoveredProject);
                changeState(selectedContainer, 'enter', true);
                changeState(hoveredContainer, 'hidden', true);
            }
            if (hoveredContainer.querySelector('.portfolio__project') === null) {
                changeState(hoveredContainer, 'hidden');
            }
            changeState(hoveredProject.querySelector('.project__content__selected'), 'enter');
            void hoveredProject.offsetWidth;

            return;
        }
    }

    function hideAllSelectedProjects() {
        const projectList = selectedContainer.querySelectorAll('.portfolio__project');
        if (isTouch || window.innerWidth < 768) {

            projectList.forEach(project => {
                changeState(project, 'exit');
                project.addEventListener('transitionend', onTransitionEnd);
            });
            changeState(selectedContainer, 'exit');
            return;
        }
        projectList.forEach(project => {
            deselectContainer.appendChild(project);
            changeState(deselectContainer, 'enter', true);
            changeState(deselectContainer, 'exit');
            changeState(project, 'exit');
            changeState(project.querySelector('.project__content__selected'), 'exit');
            void project.offsetWidth;
            project.addEventListener('transitionend', onTransitionEnd);

        });

        function onTransitionEnd(event) {
            if (event.propertyName === 'opacity') {
                event.target.removeEventListener('transitionend', onTransitionEnd);
                if (event.target.classList.contains('exit')) {
                    if (event.target.parentNode) {
                        event.target.parentNode.removeChild(event.target);
                    }
                }
                let relevantContainer = (isTouch || window.innerWidth < 768) ? selectedContainer : deselectContainer;
                if (relevantContainer.querySelector('.portfolio__project') === null) {
                    changeState(relevantContainer, 'hidden');
                }
            }
        }
    }

    function showHoveredProject(button) {
        var project = getProjectInstance(button, hoveredContainer);

        if (getProjectInstance(button, selectedContainer)?.classList.contains('enter'))
            return;
        if (project !== null) {
            changeState(project, 'enter');
            changeState(hoveredContainer, 'enter');
            return;
        }
        project = getProjectContent(button);
        hoveredContainer.appendChild(project);
        void project.offsetWidth;
        changeState(project, 'enter');
        changeState(hoveredContainer, 'enter');
        return;


    }

    function hideHoveredProject(button) {
        const project = getProjectInstance(button, hoveredContainer);

        if (project === null) {
            return;
        }

        changeState(project, 'exit');
        project.addEventListener('transitionend', onTransitionEnd);
        changeState(hoveredContainer, 'exit');

        function onTransitionEnd(event) {
            if (event.propertyName === 'opacity') {
                clearTimeout(fallbackTimeout);  // Clear the timeout if transition end is detected
                project.removeEventListener('transitionend', onTransitionEnd);
                handleTransitionEnd();
            }
        }

        // Fallback timeout to ensure clean-up actions
        let fallbackTimeout = setTimeout(() => {
            project.removeEventListener('transitionend', onTransitionEnd);
            handleTransitionEnd();
        }, 500);

        function handleTransitionEnd() {
            if (project.classList.contains('exit')) {
                if (project.parentNode) {
                    project.parentNode.removeChild(project);
                }
            }
            if (hoveredContainer.querySelector('.portfolio__project') === null) {
                changeState(hoveredContainer, 'hidden');
            }
        }
    }
}