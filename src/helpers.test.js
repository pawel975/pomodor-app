import { formatSecondsToMinutes, getFromLocalStorage, saveToLocalStorage } from './helpers';

test('formatSecondsToMinutes() should convert seconds to minutes properly', () => {

    const result_1 = formatSecondsToMinutes(120)
    expect(result_1).toBe(2)

    const result_2 = formatSecondsToMinutes(240)
    expect(result_2).toBe(4);
    
});

test('app should save data to local storage', () => {

    const data = 4;
    saveToLocalStorage("data", data);
    const fetchedData = getFromLocalStorage("data");
    expect(fetchedData).toBe(String(data));
})