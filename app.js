


function doubleValues (arr) {
    let newArr = [];
    arr.forEach(function(val){
        newArr.push (val+val);  
    });
    return newArr;
}

function onlyEvenValues (arr) {
    let arrNew = [];
    arr.forEach(function(values){
        if (values % 2 === 0){
            arrNew.push (values);
        }     
    });
    return arrNew;
}

function showFirstAndLast (arr) {
    let newArr = [];
    arr.forEach(function(char){
        newArr.push(char[0] + char[char.length-1])
    })
    return newArr;
}


function addKeyAndValue (arr, key, value) {
arr.forEach(function(val){
    val[key] = value;
});

return arr;
}

function vowelCount (str) {
    let obj = {};
    let newArr = str.split("");
    let vowels = "aeiou";
    newArr.forEach(function(char){
        let lowerCased = char.toLowerCase();
        if (vowels.indexOf(lowerCased) !== -1) {
            if (obj [lowerCased]){
                obj[lowerCased] ++;
            } else{
                obj[lowerCased] = 1
            }
        }  
        
    })
    return obj;
}


function doubleValuesWithMap (array){
    return array.map(function(values){
        return values * 2;
    });
}

function valTimesIndex (array){
    return array.map(function(value, index){
        return value * index;
    });
}

function extractKey (array , key){
    return array.map(function(value){
        return value[key] 
    });
}

function extractFullName(array) {
    return array.map(function(value){
        return value.first+ " " + value.last;
    })
}


function filterByValue (arr, key){
   return arr.filter(function(value){
        return value[key] !== undefined; 
    })
}

function find(arr , value){
    return arr.filter(function(element){
        return element === value;
    })

}

function findInObj (arr, valueSearched){
    return arr.filter(function(value){
        return val[key] === valueSearched ;
    })
}

function removeVowels (str) {
    const vowels = "aeiou";
    return str
      .toLowerCase()
      .split("")
      .filter(function(val) {
        return vowels.indexOf(val) === -1;
      })
      .join(""); 
}

function doubleOddNumbers(arr) {
    return arr
      .filter(function(val) {
        return val % 2 !== 0;
      })
      .map(function(val) {
        return val * 2;
      });
    }

