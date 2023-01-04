import { addTwoNumbers } from "../src/excercises/02-addTwoNumbers";

describe('01-addTwoNumbers', () => { 

    test('Debe retornar una linkedlist con: [7,0,8]', () => {

        const l1 =  {val: 2, next: { val: 4, next:  { val: 3, next: null } }}
        const l2 =  {val: 5, next: { val: 6, next:  { val: 4, next: null } }}

        const result =  
            {val: 7, next: { val: 0, next:  { val: 8, next: null } }}


        const ans = addTwoNumbers(l1, l2);

        expect(ans).toEqual(result);
    })


})