"use strict";

const events = [
    { date: "02-21-2025", title: "Safe Zone Project Workshop", 
        location: "Online",
        link: "https://theden.northwoodtech.edu/event/10966286",
        description: "This is an online Safe Zone Workshop offered to students, staff, and faculty at Northwood Tech." 
    },
    { date: "03-28-2025", title: "Transgender Day of Visibility Community Panel", 
        location: "Ashland", 
        link: "https://theden.northwoodtech.edu/event/10944607",
        description: "Join us for our 3rd Annual Transgender Day of Visibility Community Panel!" 
    },
    { date: "04-04-2025", title: "Safe Zone Project Workshop", 
        location: "AADC",
        link: null,
        description: "This is a Safe Zone Workshop for community members at Ashland Area Development Corporation." 
    },
    { date: "04-08-2025", title: "NAP Club Monthly Meeting", 
        location: "Online & Rice Lake 212",
        link: "https://theden.northwoodtech.edu/event/11163740",
        description: "Join us for our monthly meeting of the Northwood Alliance of Pride Club!"
    },
];


/**
 * Gets the first element descendant of node matching selector
 * @param {string} selector the criteria to search for
 * @returns an Element object associated with the selector, or null if not found 
 */
const getElement = (selector) => /** @type {Element} */ (document.querySelector(selector));


// global refererences:
const eventInfo = getElement("#event-info");
const eventDetails = getElement("#event-details");


// Callback function for flatpickr onChange event
//   This function is called when the user selects a date
const processCalendarSelection = (selectedDates, dateStr, instance) => {
    if (selectedDates.length > 0) {
        const selectedDate = instance.formatDate(selectedDates[0], "m-d-Y");
        const event = events.find(event => event.date === selectedDate);

        if (event) { // If an event is found for the selected date...
            if (event.link) { // If the event has a link, show the link in the details
                eventDetails.innerHTML = `
                    <h3>${event.title}</h3>
                    <p>&nbsp;Date: ${event.date}</p>
                    <p style="margin-bottom: 0.5rem">&nbsp;Location: ${event.location}</p>
                    <p style="font-weight: 500">${event.description}</p>
                    <br>
                    <a href="${event.link}" target="_blank">Event Link</a>
                `;
            }else { // If the event does not have a link, omit it
                eventDetails.innerHTML = `
                    <h3>${event.title}</h3>
                    <p>&nbsp;Date: ${event.date}</p>
                    <p style="margin-bottom: 0.5rem">&nbsp;Location: ${event.location}</p>
                    <p style="font-weight: 500">${event.description}</p>
                `; 
            }
        } else { // If an event is not found for the selected date...
            eventDetails.innerHTML = `
                <h4>&nbsp;No events scheduled for this date</h4>
            `;
        }
    }
};


// Callback function for flatpickr onDayCreate event
//   This function is called when a day is created in the calendar
const buildDays = (dObj, dStr, fp, dayElem) => {
    // Format the date as "m-d-Y" to match eventDates
    const date = fp.formatDate(dayElem.dateObj, "m-d-Y");

    // Check if the date exists in the events array
    if (events.some(event => event.date === date)) {
        dayElem.classList.add("event-day"); // Add style to the day element
        dayElem.title = "Event available!"; // Add a tooltip
    }
}


document.addEventListener("DOMContentLoaded", function() {
    const fp = getElement("#calendar")._flatpickr;

    flatpickr("#calendar", {
        inline: true,
        enableTime: false,
        dateFormat: "m-d-Y",
        minDate: "03-01-2024", 
        onChange: processCalendarSelection,
        onDayCreate: buildDays,
    });
});