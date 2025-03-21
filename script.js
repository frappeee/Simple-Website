document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.nav-links a');

    for (const link of links) {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetUrl = this.getAttribute('href');
            window.location.href = targetUrl;
        });
    }
});
