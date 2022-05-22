import {render, screen} from '@testing-library/react';
import { getFromLocalStorage, getLastWeek, saveToLocalStorage } from '../../helpers';
import App from '../App/App';
import userEvent from '@testing-library/user-event';

describe('<UserStatistics/> should', () => {
    
    test('be rendered properly', async () => {
        render(<App/>)
        
        const user = userEvent.setup();
        const statisticsBtn = screen.getByTestId("statistics-nav-btn");
        await user.click(statisticsBtn);
        
        const userStatisticsComponent = screen.getByTestId("user-statistics")
        expect(userStatisticsComponent).toBeInTheDocument();
    });

    describe("create last 7 days learning time records to localStorage if it's empty and", () => {
       
        test('records amount should be 7', () => {
            render(<App/>)
            const statisticsFromState = getFromLocalStorage("statistics");
            expect(statisticsFromState).toHaveLength(7);
        });
        
        test("each record should have proper format", () => {
            const firstRecordOfWeek = getLastWeek(new Date().getTime())[0];

            render(<App/>)
            const statisticsFromStateFirstRecord = getFromLocalStorage('statistics')[0];
            expect(statisticsFromStateFirstRecord).toStrictEqual(
                {date: firstRecordOfWeek, minutesLearned: 0}
            )
        })
         
        test("last day should be 7 days back", () => {
            const firstRecordOfWeek = getLastWeek(new Date().getTime())[6]

            render(<App/>)
            const statisticsFromStateFirstRecord = getFromLocalStorage('statistics')[6];
            expect(statisticsFromStateFirstRecord).toStrictEqual(
                {date: firstRecordOfWeek, minutesLearned: 0}
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

            render(<App/>)
            const firstRecordOfWeek = getLastWeek(new Date().getTime())[6];

            const statisticsFromStateFirstRecord = getFromLocalStorage('statistics')[6];
            expect(statisticsFromStateFirstRecord).toStrictEqual(
                {date: firstRecordOfWeek, minutesLearned: 0}
            )
        });

    });


});