import { twoSum } from "../src/excercises/01-twoSum"

describe('01-twoSum.js', () => { 
    
    test('debe retornar [0,1]', () => {
        const ans =  twoSum([2,7,11,15], 9);
        expect(ans).toEqual([1,0]);
    })

})