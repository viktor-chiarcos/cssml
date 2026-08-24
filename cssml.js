//NEU
// 1. Das Element einmalig beim Browser registrieren
class UnderlineElement extends HTMLElement {
    constructor() {
        super();
    }
}
customElements.define('u-element', UnderlineElement);

// 2. ALLE u-element Elemente auf der Seite finden
const allUElements = document.querySelectorAll('u-element');

// 3. Jedes einzelne Element durchgehen und den Stil anwenden
allUElements.forEach((content) => {
    const old = content.innerHTML;
    content.innerHTML = `<div style="text-decoration: underline">${old}</div>`;
});

// 1. Das Overline-Element einmalig beim Browser registrieren
class OverlineElement extends HTMLElement {
    constructor() {
        super();
    }
}
customElements.define('new-o-element', OverlineElement);

// 2. ALLE o-element Elemente auf der Seite finden
const allOElements = document.querySelectorAll('new-o-element');

// 3. Jedes einzelne Element durchgehen und den Stil anwenden
allOElements.forEach((o_content) => {
    const old = o_content.innerHTML;
    o_content.innerHTML = `<div style="text-decoration: overline">${old}</div>`;
});
