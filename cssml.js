// 1. Das Element einmalig beim Browser registrieren
    class VStoreAppElement extends HTMLElement {
        constructor() {
            super();
        }
    }
    customElements.define('u', UnderlineElement);

    // 2. ALLE <u> Elemente auf der Seite finden
    const All-u-Elements = document.querySelectorAll('u');

    // 3. Jedes einzelne Element durchgehen und die Attribute auslesen
    All-u-Elements.forEach((content, index) => {

        const old = content.innerHTML;
        content.innerHTML=`<div style="text-decoration: underline">${old}</div>`
    });
