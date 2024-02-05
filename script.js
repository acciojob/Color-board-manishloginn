//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector('.container');

    // Generate 800 square boxes dynamically
    for (let i = 0; i < 800; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);

        // Add an event listener for hover effect and timeout for color disappearance
        square.addEventListener('mouseover', function () {
            square.style.backgroundColor = '#3498db'; // Color on hover
            setTimeout(() => {
                square.style.backgroundColor =  'rgb(204, 204, 204)'; // Restore initial color after 1 second
            }, 1000);
        });
    }
});
