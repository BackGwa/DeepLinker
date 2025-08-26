/* preview.js : Displays the designed Deeplink page live. */

function switchPreview(type) {
    const preview = document.querySelector(".screen-simulate");
    
    switch (type) {
        case "mobile":
            preview.id = "mobile-preview";
            break;
        case "tablet":
            preview.id = "tablet-preview";
            break;
        case "desktop":
            preview.id = "";
            break;
        default:
            preview.id = ""; 
            break;
    }    
}