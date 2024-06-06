function generatePassword(){
    /* Check what conditions needs to be met for the password */
    let lengte = parseInt(document.getElementById('lengte_wachtwoord').value);
    let kleine_letters = document.querySelector('.kleine_letters').checked;
    let hoofdletters = document.querySelector('.hoofdletters').checked;
    let cijfers = document.querySelector('.cijfers').checked;
    let symbolen = document.querySelector('.symbolen').checked;

    /* Make a string of possible characters */
    let karakters = ''; 
    if(kleine_letters){
        karakters += 'abcdefghijklmnopqrstuvwxyz'
    }

    if(hoofdletters){
        karakters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    }

    if(cijfers){
        karakters += '0123456789'
    }

    if(symbolen){
        karakters += '!@#$%^&*()_+~`|}{[]\\:;?><,./-='
    }

    /* Generate a password with characters from the string where the length is equal to the inputted length */ 
    let wachtwoord = '';
    for(let i = 0; i < lengte; i++){
        wachtwoord += karakters.charAt(Math.floor(Math.random() * karakters.length));
    }

    document.getElementById("wachtwoord").value = wachtwoord;

    /* Calculate password entropy */ 
    let entropie = (lengte * (Math.log(karakters.length) / Math.log(2))).toFixed(2);
    let text = '';

    if(entropie < 41){
        text = "Entropie: " + entropie + "     Slecht wachtwoord"
    }

    if(entropie >= 41 && entropie < 60){
        text = "Entropie: " + entropie + "     Matig wachtwoord"
    }

    if(entropie >= 60 && entropie < 80){
        text = "Entropie: " + entropie + "     Voldoende wachtwoord"
    }

    if(entropie >= 80){
        text = "Entropie: " + entropie + "     Sterk wachtwoord"
    }

    console.log(text)
    document.getElementById("entropie").value = text;
}

function copyValue(){
    navigator.clipboard.writeText(document.getElementById("wachtwoord").value);
}
