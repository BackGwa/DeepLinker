/* preview.js : Displays the designed Deeplink page live. */

function updatePreview() {
    refreshPreview();
}


function switchPreview(type) {
    const previewWrapper = document.querySelector(".screen-simulate");
    
    switch (type) {
        case "mobile":
            previewWrapper.id = "mobile-preview";
            break;
        case "tablet":
            previewWrapper.id = "tablet-preview";
            break;
        case "desktop":
            previewWrapper.id = "";
            break;
        default:
            previewWrapper.id = ""; 
            break;
    }    
}

function refreshPreview() {
    const preview = document.querySelector("#simulator");
    preview.contentWindow.location.reload();
}

function shareLink() {

}

function zoomInOut() {
    const previewWrapper = document.querySelector(".screen-simulate");
    previewWrapper.classList.toggle("preview-zoom");
}