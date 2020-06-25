function challengeBanner(n) {
    return "######### Challenge " + n + " ######### " 
}


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



console.log(challengeBanner(2))
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
console.log(challengeBanner(3))
function first4Characters(string, indexNum){
    let i = indexNum
    while()
}
first4Characters("Oh hi, I didn't see you there. Welcome.", 4)
first4Characters("Oh hi, I didn't see you there. Welcome.", 38)


