// ==UserScript==
// @name         Ísland.is Kennitala Fix (SPA-safe)
// @namespace    https://github.com/yourusername
// @version      1
// @description  Replaces old Kennitala with new Kennitala on island.is (SPA-safe)
// @author       You
// @match        https://island.is/minarsidur/min-gogn/yfirlit*
// @match        https://island.is/minarsidur/skirteini/okurettindi/default*
// @grant        none
// @run-at       document-idle
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';

    // ⚡ Set your old and new Kennitala here
    const oldKT = '211008-2610';
    const newKT = '211005-2610';
    const oldKTplain = oldKT.replace('-', '');
    const newKTplain = newKT.replace('-', '');

    // Function to replace Kennitala in text nodes
    function replaceKT() {
        document.querySelectorAll('p, span, div').forEach(el => {
            if (el.childNodes.length === 1 && el.childNodes[0].nodeType === 3) {
                let text = el.textContent;
                if (text.includes(oldKT)) el.textContent = text.replace(oldKT, newKT);
                if (text.includes(oldKTplain)) el.textContent = text.replace(oldKTplain, newKTplain);
            }
        });
    }

    // Run initially
    replaceKT();

    // Use MutationObserver for SPA / dynamic content
    const observer = new MutationObserver(replaceKT);
    observer.observe(document.body, { childList: true, subtree: true });

})();
