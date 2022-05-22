import {render, screen} from '@testing-library/react';
import { getFromLocalStorage, getLastWeek, saveToLocalStorage } from '../../helpers';
import UserStatistics from './UserStatistics';

describe('<UserStatistics/> should', () => {
    
    test('be rendered properly', () => {
        render(<UserStatistics/>)
        const userStatisticsComponent = screen.getByTestId("user-statistics")
        expect(userStatisticsComponent).toBeInTheDocument();
    });

    describe("create last 7 days learning time records to localStorage if it's empty and", () => {
       
        test('records amount should be 7', () => {
            render(<UserStatistics/>)
            const statisticsFromState = getFromLocalStorage("statistics");
            expect(statisticsFromState).toHaveLength(7);
        });
        
        test("each record should have proper format", () => {
            const date = new Date();
            const day = date.getDate();
            const month = date.getMonth() + 1;
            const formattedDate = `${day}.${month}`

            render(<UserStatistics/>)
            const statisticsFromStateFirstRecord = getFromLocalStorage('statistics')[0];
            expect(statisticsFromStateFirstRecord).toStrictEqual(
                {date: formattedDate, minutesLearned: 0}
            )
        })
         
        test("last day should be 7 days back", () => {
            const today = new Date().getTime()
            const firstRecordOfWeek = new Date(today - 6*24*60*60*1000);
            const day = firstRecordOfWeek.getDate();
            const month = firstRecordOfWeek.getMonth() + 1;
            const formattedDate = `${day}.${month}`

            render(<UserStatistics/>)
            const statisticsFromStateFirstRecord = getFromLocalStorage('statistics')[6];
            expect(statisticsFromStateFirstRecord).toStrictEqual(
                {date: formattedDate, minutesLearned: 0}
            )
        })
    })

    describe('get statistics record and', () => {
        
        test('update for last 7 days', () => {
            
            const obsoleteWeek = getLastWeek(new Date().getTime() - 2 * 24*60*60*1000);
            const obsoloteWeekRecords = [];

            obsoleteWeek.forEach(day => {
                obsoloteWeekRecords.push({date: day, minutesLearned: 0});
            })
            saveToLocalStorage("statistics", obsoloteWeekRecords)

            render(<UserStatistics/>)
            const today = new Date().getTime()
            const firstRecordOfWeek = new Date(today - 6*24*60*60*1000);
            const day = firstRecordOfWeek.getDate();
            const month = firstRecordOfWeek.getMonth() + 1;
            const formattedDate = `${day}.${month}`

            const statisticsFromStateFirstRecord = getFromLocalStorage('statistics')[6];
            expect(statisticsFromStateFirstRecord).toStrictEqual(
                {date: formattedDate, minutesLearned: 0}
            )
        });

    });


});