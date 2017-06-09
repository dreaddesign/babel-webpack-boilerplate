import $ from 'jquery';

/* Implement an ES6 Module that handles click on `.js-busy-button` elements
 * using jQuery as usual. Busy buttons should say "busy, busy busy" as the 
 * busy button is clicked. */

const busyButtonClick = (activitySelector) => {
    activitySelector.click(function(event) {
        console.log('js busy button was clicked');
        $('.js-onscreen-activity').append('<h1>Busy</h1>');
    });
}

busyButtonClick($('.js-busy-button'));

export default busyButtonClick;