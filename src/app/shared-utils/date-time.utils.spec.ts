import { daysdifference, timeConvert } from "./date-time.utils";

describe("Date time Utils", () => {
    it("should calculate difference in days between two dates", () => {
        expect(daysdifference(new Date("11-09-2019"), new Date("11-10-2019"))).toBe(1);
    });

    it("should convert miniutes to hours and mins", () => {
        expect(timeConvert(90)).toBe('1 h 30 mins')
    })
});
