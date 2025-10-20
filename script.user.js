// ==UserScript==

// @name         Ísland.is Kennitala Fix (SPA-safe) (Örn arnarsson | 0310092210)

// @namespace    http://tampermonkey.net/

// @version      1

// @description  Works with React routing on island.is and safely replaces Kennitala without breaking layout or styles

// @author       You

// @match        https://island.is/minarsidur/min-gogn/yfirlit

// @match        https://island.is/minarsidur/min-gogn/yfirlit/*

// @match        https://island.is/minarsidur/skirteini/okurettindi/default

// @grant        none

// @license        MIT

// ==/UserScript==

(function() {

    'use strict';

    const oldKT = '031009-2510';

    const newKT = '031005-2210';

    const oldKTplain = oldKT.replace('-', '');

    const newKTplain = newKT.replace('-', '');

    setInterval(() => {

        document.querySelectorAll('p, span, div').forEach(el => {

            if (el.childNodes.length === 1 && el.childNodes[0].nodeType === 3) {

                let text = el.textContent;



                if (text.includes(oldKT)) {

                    el.textContent = text.replace(oldKT, newKT);

                }



                if (text.includes(oldKTplain)) {

                    el.textContent = text.replace(oldKTplain, newKTplain);

                }

            }

        });

    }, 50);

})();

