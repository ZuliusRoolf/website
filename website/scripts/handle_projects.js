export function projectsAddEventListeners(document) {

    const portfolioContainer = document.getElementById('portfolio__container');
    const previewContainer = document.getElementById('portfolio__project__container');
    var selectedProject = null;
    var hoveredProject = null;

    portfolioContainer.addEventListener('mouseover', function (event) {
        if (window.innerWidth < 768) {
            return;
        }
        var button = event.target.closest('.project__button');
        if (button) {
            if (button.contains(event.relatedTarget))
                // Ignore mouse enter on child elements
                return;

            if (selectedProject && selectedProject !== button) {
                // Temporarily show other project
                showPreview(button);
            } else {
                // Show the hovered content
                showPreview(button, selectedProject === button);
            }
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

            if (selectedProject) {
                // Restore the selected content
                showPreview(selectedProject, true);
            } else {
                // Hide the preview area
                hidePreview();
            }
        }
    }, true);

    portfolioContainer.addEventListener('click', function (event) {
        var button = event.target.closest('.project__button');
        if (button) {
            if (selectedProject === button) {
                // Deselect the project
                selectedProject = null;
                hidePreview();
            } else {
                // Select the project
                selectedProject = button;
                showPreview(button, true);
            }
        }
    }, true);

    previewContainer.addEventListener('click', function (event) {
        if (window.innerWidth >= 768) {
            return;
        }
        if (event.target.closest('.portfolio__project')) {
            return;
        }
        // Deselect the project
        selectedProject = null;
        hidePreview();
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
    

    // Function to show the preview
    function showPreview(button, isSelected) {
        var content = getProjectContent(button);
        if (content) {
            var currentContent = previewContainer.querySelector('.portfolio__project');
            var currentTemplateId = currentContent ? currentContent.getAttribute('data-template-id') : null;
            var newTemplateId = content.getAttribute('data-template-id');
    
            // Check if the content is already displayed and if the preview is visible
            if (currentTemplateId === newTemplateId && previewContainer.classList.contains('project__container--show')) {
                if (isSelected) {
                    previewContainer.querySelector('.project__content__selected').classList.add('project__content__selected--show');
                }
                return;
            }
    
            // Cancel any ongoing hide animations
            if (hideTransitionEndHandler) {
                previewContainer.removeEventListener('transitionend', hideTransitionEndHandler);
                hideTransitionEndHandler = null;
                previewContainer.classList.remove('project__container--hide');
            }
    
            // Clear the preview area
            previewContainer.innerHTML = '';
    
            // Append the new content
            previewContainer.appendChild(content);
            previewContainer.classList.add('project__container--show');
            previewContainer.querySelector('.project__content__hover').classList.add('project__content__hover--show');
            if (isSelected) {
                previewContainer.querySelector('.project__content__selected').classList.add('project__content__selected--show');
            }
        }
    }
    
    
    

    // Function to hide the preview
    var hideTransitionEndHandler = null;
    function hidePreview() {
        const content = previewContainer.querySelector('.portfolio__project');
        if (!content) {
            return;
        }
    
        // Add a class to trigger fade-out animation
        previewContainer.classList.remove('project__container--show');
        previewContainer.classList.add('project__container--hide');
        previewContainer.querySelector('.project__content__selected').classList.remove('project__content__selected--show');
    
        // Listen for transition end to remove content
        hideTransitionEndHandler = function () {
            // Remove the event listener
            previewContainer.removeEventListener('transitionend', hideTransitionEndHandler);
            hideTransitionEndHandler = null;
    
            // Remove the content
            content.remove();
    
            // Remove the hide class
            previewContainer.classList.remove('project__container--hide');
        };
        previewContainer.addEventListener('transitionend', hideTransitionEndHandler);
    }
    
    

}