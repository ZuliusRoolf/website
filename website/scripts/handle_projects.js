export function projectsAddEventListeners(document) {

    const portfolioContainer = document.getElementById('portfolio__container');
    const previewContainer = document.getElementById('portfolio__project__container');
    var selectedProject = null;

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
                showPreview(getProjectContent(button));
            } else {
                // Show the hovered content
                showPreview(getProjectContent(button), selectedProject === button);
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
                showPreview(getProjectContent(selectedProject), true);
            } else {
                // Hide the preview area
                hidePreview();
            }
        }
    }, true);

    portfolioContainer.addEventListener('click', function (event) {
        var button = event.target.closest('.project__button');
        if (button) {
            console.log('Click on button', button);
            if (selectedProject === button) {
                // Deselect the project
                selectedProject = null;
                hidePreview();
            } else {
                // Select the project
                selectedProject = button;
                showPreview(getProjectContent(button), true);
            }
        }
    }, true);

    // Function to get the template content of a button
    function getProjectContent(button) {
        var templateId = button.getAttribute('data-template-id');
        if (templateId) {
            var template = document.getElementById(templateId);
            if (template) {
                // Return a clone of the template content
                return template.cloneNode(true);
            }
        }
        return null;
    }

    // Function to show the preview
    function showPreview(content, isSelected) {
        if (content) {
            // Clear the preview area
            previewContainer.innerHTML = '';
            // Append the new content
            previewContainer.appendChild(content);
            // Optionally add "(Selected)" indication
            if (isSelected) {
                var selectedNote = document.createElement('p');
                selectedNote.style.fontStyle = 'italic';
                selectedNote.textContent = '(Selected)';
                previewContainer.appendChild(selectedNote);
            }
            previewContainer.style.display = 'block';
        }
    }

    // Function to hide the preview
    function hidePreview() {
        previewContainer.style.display = 'none';
        previewContainer.innerHTML = '';
    }

}