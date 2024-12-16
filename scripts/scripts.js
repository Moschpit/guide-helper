// Initialize CXone Guide
(function(n, u) {
    window.CXoneDfo = n;
    window[n] = window[n] || function() {
        (window[n].q = window[n].q || []).push(arguments);
    };
    window[n].u = u;
    const e = document.createElement("script");
    e.type = "module";
    e.src = u + "?" + Math.round(Date.now() / 1e3 / 3600);
    document.head.appendChild(e);
})('cxone', 'https://web-modules-de-na1.niceincontact.com/loader/1/loader.js');

// Initialize Guide with tenant ID
cxone('init', '5178');
cxone('guide', 'init');
