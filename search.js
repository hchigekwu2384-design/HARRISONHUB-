// Database of your website pages matching your navigation menu
const siteData = [
    { title: "Home", url: "index.html", content: "portfolio homepage welcome main index" },
    { title: "About Me", url: "about.html", content: "skills education resume biography background profile" },
    { title: "Projects", url: "projects.html", content: "work portfolio design development gallery showcase code" },
    { title: "Planner", url: "planner.html", content: "schedule agenda calendar tasks planning notes tracking" },
    { title: "Blog", url: "blog.html", content: "articles thoughts posts news writing read updates daily" },
    { title: "Contact", url: "contact.html", content: "email phone address reach out social media links message" }
];

function executeSearch() {
    const query = document.getElementById('search-input').value.toLowerCase().trim();
    const resultsContainer = document.getElementById('search-results');
    
    // Clear out any previous search results
    resultsContainer.innerHTML = '';

    // If the search bar is empty, hide the dropdown and stop
    if (query === '') {
        resultsContainer.style.display = 'none';
        return;
    }

    // Filter through siteData to find matches
    const matches = siteData.filter(page => {
        return page.title.toLowerCase().includes(query) || 
               page.content.toLowerCase().includes(query);
    });

    // Display the matching results to the user
    if (matches.length > 0) {
        resultsContainer.style.display = 'block';
        matches.forEach(page => {
            const resultItem = document.createElement('div');
            resultItem.className = 'search-result-item';
            resultItem.innerHTML = `<a href="${page.url}"><strong>${page.title}</strong></a>`;
            resultsContainer.appendChild(resultItem);
        });
    } else {
        resultsContainer.style.display = 'block';
        resultsContainer.innerHTML = '<div class="no-results">No results found</div>';
    }
}

// Close the search dropdown automatically if the user clicks anywhere else on the screen
document.addEventListener('click', (e) => {
    const searchBox = document.querySelector('.search-box');
    const resultsContainer = document.getElementById('search-results');
    if (!searchBox.contains(e.target)) {
        resultsContainer.style.display = 'none';
    }
});