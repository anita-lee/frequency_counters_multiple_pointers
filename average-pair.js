//create two pointers 
//initialize (left [0] & right [length -1])
//while loop ( value < ((left + right)/2) ) left++
//else right--
//if avg === (left + right)/2 => return true
//if none, return false


// add whatever parameters you deem necessary & write docstring
function averagePair(arr, avg) {
    if (arr === undefined) return false; 

    let left = 0; 
    let right = arr.length - 1; 
    
    while (left < right){
        let testAvg = (arr[left] + arr[right])/2; 
        if (avg === testAvg) return true; 
        else if (testAvg < avg) left++;
        else right--; 
        console.log(testAvg); 
    }
    return false; 
}
