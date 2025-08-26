function getUserLocale() {
    return navigator.language || navigator.userLanguage || "en-US";
}