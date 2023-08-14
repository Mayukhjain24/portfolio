// Sample projects data
const projects = [
    {
        title: 'Project 1',
        description: 'Description of project 1.',
        category: 'Web Development',
    },
    {
        title: 'Project 2',
        description: 'Description of project 2.',
        category: 'Machine Learning',
    },
    {
        title: 'Project 3',
        description: 'Description of project 3.',
        category: 'Web Development',
    },
    // Add more projects here
];

// Function to display projects based on selected category
function displayProjects(category) {
    const projectsContainer = document.querySelector('.projects-container');
    projectsContainer.innerHTML = '';

    projects.forEach(project => {
        if (category === 'All' || project.category === category) {
            const projectDiv = document.createElement('div');
            projectDiv.classList.add('project');
            projectDiv.innerHTML = `
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
            `;
            projectsContainer.appendChild(projectDiv);
        }
    });
}

// Filter button click event
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const selectedCategory = button.dataset.category;
        displayProjects(selectedCategory);
    });
});

// Initial display of projects (show all by default)
displayProjects('All');
