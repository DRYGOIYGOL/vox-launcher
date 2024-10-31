
// ==UserScript==
// @name         Cleaning trychatgpt
// @namespace    http://tampermonkey.net/
// @version      1.5
// @description  Удаляет элементы с определёнными классами и изменяет стили chatbox
// @author       IsFresh27
// @match        https://trychatgpt.ru/
// @match        https://trychatgpt.ru/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.onload = function() {
        const classesToRemove = [
            '.t-cover__carrier',
            '.r.t-rec.t-rec_pt_0.t-rec_pb_0.t-screenmin-980px',
            '.t858',
            '.r.t-rec.t-rec_pt_90.t-rec_pb_0',
            '.r.t-rec.t-rec_pt_15.t-rec_pb_0',
            '.st-sticky-share-buttons',
             'st-sticky-share-buttons st-left st-toggleable st-has-labels st-show-total  st-lang-ru',
            '.st-left'
        ];

        classesToRemove.forEach(className => {
            const elements = document.querySelectorAll(className);
            elements.forEach(element => element.remove());
        });

        const chatbox = document.getElementById('chatbox');
        if (chatbox) {
            chatbox.style.height = '650px';
        }
    };
})();
