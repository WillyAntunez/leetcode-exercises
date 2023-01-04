export const lengthOfLongestSubstring =  (s) => {

    if(s.length < 2){
        return s.length;
    }

    const repeatedChar = (string) => {
        const charCount = new Set();

        for(let i = 0; i <= string.length - 1; i++){
            const char = string[i];
        
            if(charCount.has(char)){

                return [true];
            }else{
                charCount.add(char)
            }
        }

        return [false];
    }


    let lastNoRepeatedLength = 1; 

    for(let length = 1; length <= s.length; length++){

        for(let start = 0 ; start + length <= s.length; start++ ){

            const substring = s.slice(start, start + length);

            const [isRepeated] = repeatedChar(substring);

            if(!isRepeated){
                lastNoRepeatedLength = substring.length;
                break;
            }
        }

        if(lastNoRepeatedLength !== length){
            break
        }
    }

    return lastNoRepeatedLength;

}