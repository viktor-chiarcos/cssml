// 1. Das Element einmalig beim Browser registrieren
    class UnderlineElement extends HTMLElement {
        constructor() {
            super();
        }
    }
    customElements.define('u', UnderlineElement);

    // 2. ALLE <u> Elemente auf der Seite finden
    const All_u_Elements = document.querySelectorAll('u');

    // 3. Jedes einzelne Element durchgehen und die Attribute auslesen
    All_u_Elements.forEach((content, index) => {

        const old = content.innerHTML;
        content.innerHTML=`<div style="text-decoration: underline">${old}</div>`
    });


// 1. Das Element einmalig beim Browser registrieren
    class OverlineElement extends HTMLElement {
        constructor() {
            super();
        }
    }
    customElements.define('o', OverlineElement);

    // 2. ALLE <u> Elemente auf der Seite finden
    const All_o_Elements = document.querySelectorAll('o');

    // 3. Jedes einzelne Element durchgehen und die Attribute auslesen
    All_o_Elements.forEach((o_content, index) => {

        const old = o_content.innerHTML;
        o_content.innerHTML=`<div style="text-decoration: overline">${old}</div>`
    });
