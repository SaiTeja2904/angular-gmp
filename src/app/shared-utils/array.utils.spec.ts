import { searchInArrayOfObjects } from "./array.utils";

describe("Array Utils", () => {
    it("should search in array of objects with a field", () => {
        const searchString = "a";
        const data = [{ name: "A", phno: 123 }, { name: "Ba", phno: 123 }, { name: "B", phno: 123 }];
        const field = "name";
        expect(searchInArrayOfObjects(searchString, data, field)).toEqual([{ name: "A", phno: 123 }, { name: "Ba", phno: 123 }]);
    });
});
