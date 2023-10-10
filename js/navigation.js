document.addEventListener('DOMContentLoaded', function() {
    fetch("../tools/navigation.html")
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(html => {
            const navBarContainer = document.getElementById('nav-bar');
            navBarContainer.innerHTML = html;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});
