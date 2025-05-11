"use strict";

document.addEventListener("DOMContentLoaded", () => {
    Utility.injectHtmlAsync(
        ".header", "includes/header.html"
    ).then(() => {
        Utility.initializeSlicknav("#menu", Utility.defaultSlickOps);
    });
    
    Utility.injectHtmlAsync(".footer", "includes/footer.html");

    fetch('https://mywitc-my.sharepoint.com/personal/17954689_northwoodtech_edu/_layouts/15/download.aspx?SourceUrl=/personal/17954689_northwoodtech_edu/Documents/Current%20Issues%20Guide.docx')
    .then(response => response.text())
        .then(data => {
            let iFrame = document.getElementById('embedded-content');
            iFrame.srcdoc = data; // Use srcdoc to display the content
        })
        .catch(error => console.error('Error fetching file:', error));
});


// 