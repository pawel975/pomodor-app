import { formatSecondsToMinutes, getFromLocalStorage, getLastWeek, saveToLocalStorage } from './helpers';

test('formatSecondsToMinutes() should convert seconds to minutes properly', () => {

    const result_1 = formatSecondsToMinutes(120)
    expect(result_1).toBe(2)

    const result_2 = formatSecondsToMinutes(240)
    expect(result_2).toBe(4);
    
});

test('app should save data to local storag in primitive type of value', () => {

    saveToLocalStorage("data", 4);
    const fetchedData = getFromLocalStorage("data");
    expect(fetchedData).toBe(4);
})

describe('getLastWeek() should', () => {
    
    test("return array of last 7 days in dd/mm format", ()=> {
        const lastWeek = getLastWeek();
        expect(lastWeek).toHaveLength(7);
    })
    
    test("return each day in dd/mm format", ()=> {
        const lastWeek = getLastWeek(1651666275 * 1000) // timestamp for - 04-05-2022
        expect(lastWeek[0]).toBe("04.05")
    })
});
