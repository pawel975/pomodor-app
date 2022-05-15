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
 * Converts time in minutes into - ? h ? min - format
 * @param {number} minutes to convert
 * @returns {string} converted time
 */
export const formatMinutesToHours = (minutes) => {

    let result;

    if (minutes >= 60) {
        const hours = Math.floor(minutes / 60);
        const minutesLeft = minutes - (hours * 60);
        result = `${hours} h ${minutesLeft} min`; 
    } else {
        result = `${minutes} min`;
    }

    return result;
}   