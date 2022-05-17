import { formatSecondsToMinutes } from './helpers';

test('formatSecondsToMinutes() should convert seconds to minutes properly', () => {

    const result_1 = formatSecondsToMinutes(120)
    expect(result_1).toBe(2)

    const result_2 = formatSecondsToMinutes(240)
    expect(result_2).toBe(4);
    
});