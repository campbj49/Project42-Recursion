/** product: calculate the product of an array of numbers. */

function product(nums) {
  let res = 1;

  function _product(nums, i){
    if (nums.length === i) return;
    res *= nums[i];
    _product(nums, i + 1);
  }

  _product(nums,0);

  return res;
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  let len = 0;

  function _longest(words, i){
    if(words.length === i) return;
    if(words[i].length > len) len = words[i].length;
    _longest(words, i+1);
  }

  _longest(words,0);
  return len;
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  let res = "";

  function _everyOther(str, i){
    if(str.length === i) return;
    if(i%2 ===0) res += str[i];
    _everyOther(str,i+1);
  }

  _everyOther(str,0);
  return res;
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {

  function _isPalindrome(str, first, last){
    //if str is undefined, first and last are the middle characters, so end recursion
    if(!str) return first === last;
    //if str is a single character, str is the middle character so return true
    if(str.length === 1) return true;
    
    //otherwise check the first and last characters for equality and recurse if they match
    if(first === last) return true && _isPalindrome(str.slice(1,str.length-1),str[0], str[str.length-1]);
    else return false;

  }

  return _isPalindrome(str.slice(1,str.length-1),str[0], str[str.length-1]);

}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  function _findIndex(arr,val, i){
    if(arr.length === i) return -1;
    if(arr[i]===val) return i;
    return _findIndex(arr,val,i+1);
  }

  return _findIndex(arr,val,0);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {

  function _revString(str, first, last){
    //if str is undefined, first and last are the middle characters, so end recursion
    if(!str) return last+first;
    //if str is a single character, str is the middle character so return it alone
    if(str.length === 1) return last + str + first;
    
    //otherwise swap the last and first character and recurse
    return last+ _revString(str.slice(1,str.length-1),str[0], str[str.length-1]) + first;
  }

  return _revString(str.slice(1,str.length-1),str[0], str[str.length-1]);

}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let keys = Object.keys(obj);
  let res = [];

  function _gatherStrings(obj,i){
    if(i === keys.length) return;
    if(typeof obj[keys[i]] === "string") res.push(obj[keys[i]]);
    if(typeof obj[keys[i]] === "object") res.push(...gatherStrings(obj[keys[i]]));
    _gatherStrings(obj,i+1);
  }

  _gatherStrings(obj,0);
  return res;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {
  //helper function does binary search
  function _binarySearch(pivot, jump){
    //if the value is at the pivot, return the pivot
    if(arr[pivot] === val) return pivot;
    //if the jump amount has zeroed out, the val is not in the index
    if(jump ===0) return -1;

    //jump either forward or backward in the depending on the comparrison with val at pivot
    let dir = -1;
    if(arr[pivot] < val) dir = 1;
  
    return _binarySearch(pivot+(jump*dir), Math.floor(jump/2));    
  }

  return _binarySearch(Math.floor(arr.length/2)-1, Math.ceil(arr.length/2));

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
