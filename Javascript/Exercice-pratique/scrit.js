//Programme des Seances Precedent
// -----Ttre de Devoir-------
// Le Programme de Gestion d'un etablissement Scolaire a besoin d'un programme pour 
// gere les calcul des resultats d'un groupe des eleves


let NotesSaisie = parseInt(prompt('Saisissez ici Le nombre total des notes a traiter'));
let Resultat = 0;
if (NotesSaisie<=0) {
    alert("Vous avez entre le nombre des note invalide ")
} else{
for (i = 1; i <= NotesSaisie; i++){

    let Lanote = parseFloat(prompt("Entre la note " + i + " a traite"))
    
    
    while (Lanote <= 0 || Lanote > 20 || isNaN(Lanote))  {
          Lanote = parseFloat(prompt(" La note invalide. La anote  doit être >= 0.et <=20 Réessayez pour la note " + i + " :"));
        }
        
    Resultat = Resultat + Lanote;
    }
    let Moyenne = Resultat / NotesSaisie;
    if (Moyenne >= 16) {  
         alert("Vous avez la note moyenne de "+Moyenne+ "\n Vous avez des notes Excellent\n"+Resultat)
    } else if (Moyenne >= 12 && Moyenne <16) {
         alert("Vous avez la note moyenne de "+Moyenne+"\n Votre Mention c'est Moyenne \n"+Resultat)
    } else if (Moyenne >= 10 && Moyenne < 12) {
        alert("Vous avez la note moyenne de " +Moyenne+ "\n Votre Mention c'est Passable \n"+Resultat) 
        
    } else {
        alert("Vous avez la note moyenne de " +Moyenne+ "\n Vous etes echoue \n" +Resultat)
    }      
    

}