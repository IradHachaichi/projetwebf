


function toggleMoreInfo() {
    var moreInfo = document.getElementById('more-info');

    // Toggle the visibility of the additional information
    moreInfo.style.display = (moreInfo.style.display === 'none' || moreInfo.style.display === '') ? 'block' : 'none';
}
function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle('dark-mode');
}