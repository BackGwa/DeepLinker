/* preview.js : Displays the designed Deeplink page live. */

function updatePreview() {
    const preview = document.querySelector("#simulator");
    preview.src = generateLink();
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
    showDialog("Refreshed!");
}

function shareLink() {
    const link = generateLink();
    navigator.clipboard.writeText(link);
    showDialog("Copied!");
}

function zoomInOut() {
    const previewWrapper = document.querySelector(".screen-simulate");
    previewWrapper.classList.toggle("preview-zoom");
}

function showDialog(message) {
    const dialog = document.querySelector(".preview-dialog");
    dialog.textContent = message;

    dialog.classList.remove("show");
    void dialog.offsetWidth;
    dialog.classList.add("show");
}