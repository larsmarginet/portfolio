import "./src/styles/index.css"


let showBrowserAlert = () => {
    if (/Trident\/|MSIE/.test(window.navigator.userAgent)) {
        alert('Unsupported Browser! This website will offer limited functionality in this browser. We only support the recent versions of major browsers like Chrome, Firefox, Safari, and Edge.');
    }
};

document.addEventListener('DOMContentLoaded', showBrowserAlert);