import { findMedianSortedArrays } from "../src/excercises/04-findMedianSortedArrays"

describe('04-findMedianSortedArrays', () => { 

    test('Debe retornar 2.00000', () => { 
        const ans = findMedianSortedArrays([1,3], [2]);

        expect(ans).toBe(2.00000);
    })
    test('Debe retornar 2.00000', () => { 
        const ans = findMedianSortedArrays([1,3], [2, 7]);

        expect(ans).toBe(2.50000);
    })

})