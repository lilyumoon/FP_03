"use strict";


/**
 * Gets the first element descendant of node matching selector
 * 
 * @param {string} selector the criteria to search for
 * @returns an Element object associated with the selector, or null if not found 
 */
const getElement = (selector) => /** @type {Element} */ (document.querySelector(selector));


const processCalendarSelection = (selectedDates, dateStr, instance) => {

};



document.addEventListener("DOMContentLoaded", function() {
    const fp = getElement("#calendar")._flatpickr;

    flatpickr("#calendar", {
        inline: true,
        enableTime: false,
        dateFormat: "m-d-Y",
        minDate: "03-01-2023", 
        enable: [
            "03-28-2025"
        ],
    });
});