function pridatCSS(cssSoubor) {
    var hlavicka = document.getElementsByTagName('head')[0];
    var odkaz = document.createElement('link');
    odkaz.rel = 'stylesheet';
    odkaz.type = 'text/css';
    odkaz.href = cssSoubor;
    odkaz.media = 'all';
    hlavicka.appendChild(odkaz);
}

// Pole s názvy CSS souborů
var moznostiCSS = ['ůemfkepmfpjjp.css', 'jiny.css', 'dalsi.css'];

// Náhodný výběr CSS souboru
var nahodneIndex = Math.floor(Math.random() * moznostiCSS.length);
var nahodnyCSS = moznostiCSS[nahodneIndex];

pridatCSS(nahodnyCSS);
