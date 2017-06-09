//break out seperate pieces of your javascript into the components and import them into the "main" js file in this case app.js
import busyButtons from './components/busy-buttons';

//you can then call the functions imported
busyButtons('.js-onscreen-activity');
