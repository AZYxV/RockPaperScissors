const SELECTIONS = ['pierre','feuille','ciseau'];

function randomz(){
    let out = "";
    out = Math.floor(Math.random() * 3);
    return out;
}

function jeu(joueur, ordi){
    if(joueur === ordi){
        return "e";
    }
    if(joueur === 0){
        if(ordi === 2){
            return "v";
        }
        else{
            return "d";
        }
    }
    if(joueur === 1){
        if (ordi === 0){
            return "v";
        }
        else{
            return "d";
        }
    }
    if(joueur === 2){
        if(ordi === 1){
            return "v";
        }
        else{
            return "d";
        }
    }
}

let win = document.getElementById("vic");
let loss = document.getElementById("def");
let egal = document.getElementById("nul");

let ls_selection = document.querySelectorAll(".selectionj")

ls_selection.forEach((element,keys) => {
    element.addEventListener('click', ()=>{
        console.log(jeu(keys,randomz()))
        save(jeu(keys,randomz()))
    })
});

function save(result){
    if(result === 'v'){
        win.textContent = Number(win.textContent)+1;
    }
    else if(result === 'd'){
        loss.textContent = Number(win.textContent)+1;
    }
    else{
        egal.textContent = Number(win.textContent)+1;
    }
}