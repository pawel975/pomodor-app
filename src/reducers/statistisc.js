import { getFromLocalStorage, getLastWeek, saveToLocalStorage } from "../helpers"

const lastWeekDates = getLastWeek();

// Check if local storage is empty to create record structure, and to update structure if it's not.
if (!getFromLocalStorage("statistics")) {
    const lastWeekRecords = [];

    lastWeekDates.forEach(dayDate => {
        lastWeekRecords.push({
            date: dayDate,
            secondsLearned: 0
        })
    })

    saveToLocalStorage("statistics", lastWeekRecords);
} else {

    const lastWeekRecords = getFromLocalStorage("statistics");
    const filteredRecords = [];

    lastWeekDates.forEach(day => {

        const matchedRecordDay = lastWeekRecords.filter(record => record.date === day)

        if (matchedRecordDay[0]) {
            filteredRecords.push(matchedRecordDay[0])
        } else {
            filteredRecords.push({date: day, secondsLearned: 0})
        }
    })

    saveToLocalStorage("statistics", filteredRecords);
}


const initStatistics = getFromLocalStorage("statistics");

const statisticsReducer = (state = initStatistics, action) => {

    switch (action.type) {
        case "STATISTICS_UPDATE": {
            return state = action.payload
        }
        default:
            return state
    }
}

export default statisticsReducer;