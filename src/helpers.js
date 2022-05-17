/**
 * Stops program from continue for particular time
 *
 * @param {number} time in seconds to wait
 * @returns promise which resolves after minute
 */

export const sleep = async (time) => {
    return await new Promise(r => setTimeout(r, time));
}

/**
 * Converts 1 digit long time part to have 0 prefix
 *
 * @param {number} timePart hours/minutes/seconds to add 0 before if part is only 1 digit long
 * @return {string} formated timepart
 */
export const formatTimePart = (timePart) => {

    timePart = timePart < 10 ? `0${timePart}` : timePart;

    return timePart;
}

/**
 * Returns time formated to hh/mm/ss.
 *
 * @param {number} time in seconds
 * @return {string} time in hh/mm/ss format
 */
export const formatTime = (time) => {

     let filteredTimeEls = [];

     if (time > 0) {
         // Split time into hours, minutes and seconds
         let hours = Math.floor(time / 3600);
         let minutes = Math.floor((time - (hours * 3600)) / 60); 
         let seconds = Math.floor(time - (hours * 3600) - (minutes * 60)); 
     
         let timeEls = [hours, minutes, seconds];
     
         // Filters time parts
         for (let i = 0; i < timeEls.length; i++) {
             if (timeEls[i]) {
                 filteredTimeEls.push(String(timeEls[i]));
                 for (let j = i + 1; j < timeEls.length; j++) {
                     filteredTimeEls.push(formatTimePart(timeEls[j]))
                 }
                 break
             }
         }
         
     } else if (time === 0) {
         filteredTimeEls.push(String(time))
     }

     const formattedTime = filteredTimeEls.join(":");

     return formattedTime;
}

/**
 * Converts value into (? h ? min) if it's time value or returns it without convertion if it doesn't 
 * @param {number} value to convert
 * @returns {string} converted value
 */
export const formatParam = (value, type="none") => {

    let convertedValue;

    if (type === "time") {

        if (value >= 60) {
            const hours = Math.floor(value / 60);
            const minutesLeft = value - (hours * 60);
    
            if (minutesLeft === 0) {
               convertedValue = `${hours} h`
            } else {
                convertedValue = `${hours} h ${minutesLeft} min`; 
            }
    
        } else {
            convertedValue = `${value} min`;
        }
    } else if (type === "none") {
        convertedValue = value;
    }

    return convertedValue;
}   

/**
 * Return time converted from seconds to minutes
 * @param {number} seconds 
 * @returns time converted to minutes
 */
export const formatSecondsToMinutes = (seconds) => {

    let convertedValue;

    if (seconds >= 60) {
        const minutes = Math.floor(seconds / 60);
        convertedValue = minutes
    } else {
        convertedValue = seconds;
    }

    return convertedValue;
}   