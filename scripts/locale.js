/* locale.js: Localizes based on the user's locale. */

function getUserLocale() {
    return navigator.language || navigator.userLanguage || "en-US";
}