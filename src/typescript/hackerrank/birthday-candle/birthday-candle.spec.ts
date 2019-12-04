import {BirthdayCandle} from "./birthday-candle";

test("Object creation", () => {
    let birthdayCandle = new BirthdayCandle(10, [18, 90, 90, 13, 90, 75, 90, 8, 90, 43]);
    expect(birthdayCandle.getNoOfCandleCanBeBlown()).toBe(5);
});