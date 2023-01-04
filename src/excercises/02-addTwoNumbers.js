class ListNode  {
    constructor(value){
        this.val = value;
        this.next = null;
    }
}

export const addTwoNumbers = function(l1, l2) {
    
    
    let num1 = [];
    let num2 = [];

    // convert to array
    let current1 = l1;
    let current2 = l2;

    while(current1){
        num1.push(current1.val);
        current1 = current1.next;
    }

    while(current2){
        num2.push(current2.val);
        current2 = current2.next;
    }

    // convert array to number
    num1 = [...num1].reverse();
    num1 = BigInt(num1.map(el => el.toString()).join('')); 

    num2 = [...num2].reverse();
    num2 = BigInt(num2.map(el => el.toString()).join('')); 

    // calculate the result number, convert to array and reverse
    const ansArr = 
        BigInt(num1 + num2).toString().split('').reverse().map(el => Number(el));

    // create the ans linkedList 
    const ans = new ListNode(ansArr[0])
    ansArr.shift();

    let tail = ans;

    if(ansArr.length > 0){
        ansArr.forEach(newVal => {
            const newNode = new ListNode(newVal);
            tail.next = newNode;
            tail = tail.next;
        })
    }

    return ans;

};