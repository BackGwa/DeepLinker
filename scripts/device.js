/* device.js : Returns the user's device information. (Supported devices: Android, iOS, Windows, Linux, macOS) */

function getUserAgent() {
    const ua = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(ua)) {
        return "Android";
    }
    if (/iPad|iPhone|iPod/.test(ua) && !window.MSStream) {
        return "iOS";
    }
    if (/Win(dows )?NT/.test(ua)) {
        return "Windows";
    }
    if (/Macintosh|Mac OS X/.test(ua)) {
        return "macOS";
    }
    if (/Linux/.test(ua)) {
        return "Linux";
    }

    return "Unknown";
}