const dynamicContent = document.getElementById("dynamic-text")
console.log(dynamicContent)

const phrases = ["Software Developer...", "Frontend Developer...", "UI/UX Developer..."]
let phraseIndex = 0;
let letterIndex = 0;


function printLetters(phrase){
    if (letterIndex === phrase.length){
        // clear letter which have been typed
        clearLetters()
    }
    else if(letterIndex < phrase.length){
        dynamicContent.textContent += phrase.charAt(letterIndex);
        letterIndex += 1;
        setTimeout(function(){
            printLetters(phrase)
        }, 150)

    }
}
 
function clearLetters(){
    if (letterIndex == -1){
        phraseIndex = (phraseIndex + 1) % phrases.length
        letterIndex = 0;
        printLetters(phrases[phraseIndex]);
        }

    else if(letterIndex > -1){
        let updatedPhrase = "";
        for(let i=0; i < letterIndex; i++){
            updatedPhrase += phrases[phraseIndex].charAt(i);
    }
    // console.log(updatedPhrase);
    dynamicContent.textContent = updatedPhrase;
    letterIndex -= 1;
    setTimeout(clearLetters, 85)
    }
}

printLetters(phrases[phraseIndex])