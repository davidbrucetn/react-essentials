import { timesTwo } from "./functions"


//jest testing with expect to call function and expected result 
test("Multiplies by two", () => {
    expect(timesTwo(4)).toBe(8);
})