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

test("getLastWeek() should return array of last 7 days in dd/mm format", ()=> {
    const lastWeek = getLastWeek();
    expect(lastWeek).toHaveLength(7);
})