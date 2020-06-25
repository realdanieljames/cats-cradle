function challengeBanner(n) {
    return "######### Challenge " + n + " ######### " 
}
//__________________________________________________________________________________________________//
//__________________________________________________________________________________________________//

console.log(challengeBanner(1))
function printOnlyVowels(string){
let i = 0
    while(string.length >  i){
        const currentVowel = string[i];
        switch(currentVowel) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
            console.log (currentVowel);
        }
        i = i + 1
    }
} 
printOnlyVowels("Regular expressions are for term 2.")
//__________________________________________________________________________________________________//
//__________________________________________________________________________________________________//



console.log(challengeBanner(2))
function First5Vowels(str) {
    let count =  0
    const vowels = 'aeiou';
    let i = 0;
    while (i < str.length) {
        if (vowels.includes(str[i]) && count < 5 ) {
            console.log(str[i]);
            count = count + 1;
        }
        i = i + 1;
    }
}
First5Vowels("Regular expressions are for term 2.")
First5Vowels('hello')
//__________________________________________________________________________________________________//
//__________________________________________________________________________________________________//




console.log(challengeBanner(3))
function everyThirdCharacter(string){
    let i = 2
    while (string.length > i){
        const currentCharacter  = string[i];
        console.log(currentCharacter);
        i = i + 3
    }
}
everyThirdCharacter("I am the alfalfa and the omelette.")
//__________________________________________________________________________________________________//
//__________________________________________________________________________________________________//




console.log(challengeBanner(4))
function firstFourCharacters(str, start){
    let count = 0;
    let i = start;
    while (i < str.length) {
        if (count < 4) {
            console.log(str[i]);
            count =  count + 1;
        }
        i = i + 1;
    }
}
firstFourCharacters("Oh hi, I didn't see you there. Welcome.", 4 )
firstFourCharacters("Oh hi, I didn't see you there. Welcome.", 36 )
//__________________________________________________________________________________________________//
//__________________________________________________________________________________________________//



console.log(challengeBanner(5))
function indexOfU(str) {
    let i = 0
    while(i < str.length) {
        if(str[i] === 'u') {
            console.log(i)
        }
        i = i + 1;
    }
}
indexOfU('You picked the wrong house, bub.')
//__________________________________________________________________________________________________//
//__________________________________________________________________________________________________//



console.log(challengeBanner(6))
function firstIndexOfU(str){
    let found = false
    let i = 0
    while(i < str.length) {
        if(str[i] === 'u' && found === false) {
            console.log(i)

            found = true
        }
        i = i + 1;
    }
}
firstIndexOfU('You picked the wrong house, bub.')
//__________________________________________________________________________________________________//
//__________________________________________________________________________________________________//




console.log(challengeBanner(7))
function firstIndexOfU2(str){
    let found = false
    let i = 0
    while(i < str.length) {
        if(str[i] === 'u' && found === false) {
            console.log(i)

            found = true
        }
        i = i + 1;
    }
    if (found === false) {
        console.log(-1)
    }
}
firstIndexOfU2('You picked the wrong house, bub.')
firstIndexOfU2("I'm Canadian")
//__________________________________________________________________________________________________//
//__________________________________________________________________________________________________//
