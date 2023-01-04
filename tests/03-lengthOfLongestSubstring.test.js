import { lengthOfLongestSubstring } from "../src/excercises/03-lengthOfLongestSubstring"

describe('Pruebas en 03-lengthOfLongestSubstring', () => { 

    test('Debe retornar 3', () => { 
        const ans = lengthOfLongestSubstring("abcabcbb");
        
        expect(ans).toBe(3);
    })
    test('Debe retornar 3', () => { 
        const ans = lengthOfLongestSubstring("pwwkew");
        
        expect(ans).toBe(3);
    })
    test('Debe retornar 2', () => { 
        const ans = lengthOfLongestSubstring("aab");
        
        expect(ans).toBe(2);
    })
    test('Debe retornar 2', () => { 
        const ans = lengthOfLongestSubstring("au");
        
        expect(ans).toBe(2);
    })
    test('Debe retornar 11', () => { 
        const ans = lengthOfLongestSubstring("ciridmtxsgaryv");
        
        expect(ans).toBe(11);
    })

})