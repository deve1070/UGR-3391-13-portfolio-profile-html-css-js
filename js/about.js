document.addEventListener("DOMContentLoaded", function () {
    const hamburgerButton = document.querySelector('.hamburger');
    const sidebar = document.querySelector('.nav-links');
    const downloadButton = document.getElementById('download-cv');

    // Toggle the sidebar visibility when hamburger button is clicked
    hamburgerButton.addEventListener('click', function() {
        sidebar.classList.toggle('show');
    });

    // Trigger download when the Download CV button is clicked
    downloadButton.addEventListener('click', function() {
        // Provide the path to your CV file here
        const cvFilePath = '/home/dawit/portfoilo/UGR-3391-13-portfolio-profile-html-css-js/assets/docs/dawit_cv.pdf'; // Update this path
        const a = document.createElement('a');
        a.href = cvFilePath;
        a.download = 'Dawit_Kassa_CV.pdf'; // The name of the downloaded file
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    });
});
