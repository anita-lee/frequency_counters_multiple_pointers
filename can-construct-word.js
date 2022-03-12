//if word.length > letter.length  
//check if letter in 2nd parm is in 1st parm
//map word and map letters
//so iterate through word map
//if key-value pair exists in word map =< in letter map
// if not return false
//at the end of loop return true


function createFrequencyCounter(string){
  let freq = new Map();

  for(let val of string){
    let valCount = freq.get(val) || 0;
    freq.set(val, valCount +1);
  }
  return freq;
}

// add whatever parameters you deem necessary & write doc comment
function canConstructWord(word, letters) {
  if(word.length > letters.length){
    return false;
  }

  let wordMap = createFrequencyCounter(word);
  let lettersMap = createFrequencyCounter(letters);
  // console.log('word.....' + wordMap);
  // console.log('letters.....' + lettersMap);
  for(let key of wordMap.keys()){
    if(lettersMap.get(key)) return false;

    let wordValue = wordMap.get(key);
    let letterValue = lettersMap.get(key);  
    console.log('hello!');
    console.log('word....' + wordValue);
    console.log('word....' + letterValue);
    if(wordValue > letterValue){
      return false;
    }
  }
  return true;
}
