let contacts = [
    { nom: "Richard", telephone: "67578349", favori: true, avatar: "https://via.placeholder.com/50" },
    { nom: "Isaac", telephone: "78765432", favori: false, avatar: "https://via.placeholder.com/50" },
    { nom: "Ange Nella", telephone: "61272359", favori: true, avatar: "https://via.placeholder.com/50" },
    { nom: "Lugentil", telephone: "68306895", favori: false, avatar: "https://via.placeholder.com/50" }
];

function afficherContact() {
    const conteneur = document.getElementById("listeContacts");
    conteneur.innerHTML = "";

    if (contacts.length === 0) {
        conteneur.innerHTML = "<p>Aucun Contact</p>";
        return;
    }

    contacts.forEach(contact => {
        const contactDiv = document.createElement("div");
        contactDiv.className = `contact-card ${contact.favori ? 'favori' : ''}`;
        
        contactDiv.innerHTML = `
            <img class="contact-avatar" src="${contact.avatar || 'https://via.placeholder.com/50'}" alt="${contact.nom}">
            <div class="contact-info">
                <div class="contact-nom">${contact.nom}</div>
                <div class="contact-tel">${contact.telephone}</div>
            </div>
            <label class="checkbox-label">
                <input type="checkbox" class="favori-checkbox" 
                ${contact.favori ? 'checked' : ''} data-nom="${contact.nom}">
                Favori
            </label>
        `;
        conteneur.appendChild(contactDiv);
    });

    // Ajouter les événements sur les checkboxes APRES l'insertion dans le DOM
    document.querySelectorAll('.favori-checkbox').forEach(checkbox => {
        checkbox.addEventListener('change', (event) => {
            mettreAjourFavori(event.target.dataset.nom, event.target.checked);
        });
    });
}

function afficherFavoris() {
    const div = document.getElementById("listeFavoris");
    const favoris = contacts.filter(c => c.favori === true || c.favori === "true");

    if (favoris.length === 0) {
        div.innerHTML = "<p>Aucun Favori</p>";
        return;
    }

    div.innerHTML = favoris.map(contact => `
        <div class="contact-card favori">
            <img class="contact-avatar" src="${contact.avatar}" alt="${contact.nom}">
            <div class="contact-info">
                <div class="contact-nom">${contact.nom}</div>
                <div class="contact-tel">${contact.telephone}</div>
            </div>
            <div class="contact-favori-star">★</div>
        </div>
    `).join('');
}

function mettreAjourFavori(nom, estFavori) {
    const contact = contacts.find(c => c.nom === nom);
    if (contact) {
        contact.favori = estFavori;
        const msg = document.getElementById("MessageFavori");
        msg.innerHTML = `<div class="msg ${estFavori ? 'msg-succes' : 'msg-error'}"> 
            ${estFavori ? '★' : '☆'} "${nom}" ${estFavori ? 'ajouté aux' : 'retiré des'} favoris ! 
        </div>`;

        setTimeout(() => { msg.innerHTML = ""; }, 2000);
        afficherContact();
        afficherFavoris();
    }
}

function AjouterContact() {
    const nom = document.getElementById("nomAjout").value.trim();
    const telephone = document.getElementById("telAjout").value.trim();
    const msg = document.getElementById("messageAjouter");

    if (!nom || !telephone) {
        msg.innerHTML = "❌ Veuillez remplir tous les champs";
        msg.className = "msg msg-error";
        return;
    }

    if (!/^\d{8}$/.test(telephone)) {
        msg.innerHTML = "❌ Le téléphone doit contenir 8 chiffres";
        msg.className = "msg msg-error";
        return;
    }

    if (contacts.some(c => c.nom === nom)) {
        msg.innerHTML = "❌ Ce contact existe déjà";
        msg.className = "msg msg-error";
        return;
    }

    contacts.push({ nom, telephone, favori: false, avatar: "https://via.placeholder.com/50" });
    
    document.getElementById("nomAjout").value = "";
    document.getElementById("telAjout").value = "";
    msg.innerHTML = "✅ Contact ajouté !";
    msg.className = "msg msg-succes";

    afficherContact();
    afficherFavoris();
}

function SupprimerContact() {
    const nom = document.getElementById("nomSuppr").value.trim();
    const msg = document.getElementById("messageSuprimer");
    const index = contacts.findIndex(c => c.nom.toLowerCase() === nom.toLowerCase());

    if (index !== -1) {
        contacts.splice(index, 1);
        msg.innerHTML = `✅ "${nom}" supprimé`;
        msg.className = "msg msg-succes";
        document.getElementById("nomSuppr").value = "";
    } else {
        msg.innerHTML = "❌ Contact non trouvé";
        msg.className = "msg msg-error";
    }

    afficherContact();
    afficherFavoris();
}

window.addEventListener('DOMContentLoaded', () => {
    afficherContact();
    afficherFavoris();
});




// const contacts = [
//     {
//         nom: "Richard",
//         telephone: "67578349",
//         favori: true,
//         avatar: ""

//     },
//     {
//         nom: "Isaac",
//         telephone: "78765432",
//         favori: false,
//         avatar: ""
//     },
//     {
//         nom: "Ange nella ",
//         telephone: "61272359",
//         favori: true,
//         avatar: ""
//     },
//     {
//         nom: "Lugentil",
//         telephone: "68306895",
//         favori: false,
//         avatar: ""
//     }
// ];
// //Creation du fonction d'affichages des donnees 
// function afficherContact(){
//     let div = document.getElementById("listeContacts");
//     div.innerHTML = "";
//     if (contacts.length === 0) {
//         div.innerHTML = " <p> Aucun Contact </p>"; 
//         return;
//     }
//     //rondere]a mumanimero yose rero
//     contacts.forEach(contact => {
//         contactDiv = document.createElement("div");
//         contactDiv.className = `contact-card  ${contact.favori ? 'favori' : ''}`;
//         //uzuza carte ukoresheje Html
//         contactDiv.innerHTML = `
//         <img class="contact-avatar" src=" ${contact.avatar}" alt="${contact.nom}">
//         <div class="contact-info">
//         <div class="contact-nom"> ${contact.nom}</div>
//         <div class="contact-tel"> ${contact.telephone}</div>
//         </div>
//         <label class="checkbox-label">
//         <input type="checkbox" class="favori-checkbox"
//         ${contact.favori ? 'Checked' : ''} data-nom="${contact.nom}">
//          Favori
//          </label>;
//         `
//     });
//     // Shira ivyo bikorwa mudu case (Ajouter les evenement sur les checkboxes )
//     document.querySelectorAll('.favori-checkbox').forEach(checkbox => {
//         checkbox.addEventListener('change', (event) => {
//             const nom = event.target.dataset.nom;
//             const estFavori = event.target.checked;
//             mettreAjourFavori(nom, estFavori);
//         });
//     });

// }
// function afficherFavoris(){
//     const div = document.getElementById("listeFavoris");
//     //Filter les favoris
//     const favoris = contacts.filter(contact => contact.favori === true);
//     if (favoris.length === 0) {
//         div.innerHTML = ` <p> Aucun Favori </p>`;
//         return;
        
//     }
//     //gestion des contact 
//     const html = favoris.map(contact =>
//         `
//         <div class="contact-card favori">
//         <img class=" contact-avatar" src="${contact.avatar}" alt="${contact.nom}">
//         <div class="contact-info">
//          <div class="contact-nom"> ${contact.nom}</div>
//         <div class="contact-tel"> ${contact.telephone}</div>
//         </div>
//         <div="contact-favori-star">Star</div>
//         </div>

//         `).join('');
//     div.innerHTML = html;
// }
// function mettreAjourFavori(nom, estFavori) {
    
//     //rondera inomero 
//     const contact = contact.find(c => c.nom === nom);
//     if (contact) {
//         //guhindura prprites favoris
//         contact.favori = estFavori;
//         //Kumwandikire ubutumwa
//         const msg = document.getElementById("MessageFavori");
//         if (estFavori) {
//             msg.innerHTML = `
//             <div class="msg-success"> &#9733; "${nom}" Ajoute aux  favoris ! </div>`;
//         } else {
//             msg.innerHTML = `
//             <div class="msg-succes"> $#9734; "${nom}" retire des favoris
//             `;
//         }
//         // Futa messag enyuma ya 2 seconde
//         setTimeout(() => {
//             msg.innerHTML = "";
//         }, 2000);
//         //Rafraichirl'affichage
//         afficherContact();
//         afficherFavoris();
//     }
// }

// function AjouterContact() {
//     let nom = document.getElementById("nomAjout").value.trim();
//     let telephone = document.getElementById("telAjout").value.trim();
//     const msg = document.getElementById("messageAjouter");
//     if (nom === "" || telephone === " " )
//     {
//         msg.innerHTML = " X veuillez remplirtous les champs";
//         msg.className = "msg msg-error";
//         return;
//     }
//     // Verification 2
//     const regexTel = /^\d{8}$/;
//     if (!regexTel.test(telephone)) {
//        msg.innerHTML = `X Le telephone doit contenir 8 chiffres(ex: 77123456) "`;
//         msg.className = "msg msg-error";
//         return;
//     }
//     // Verification 3
//     const nomExiste = contact.some(contact => contact.nom === nom);
//     if (nomExiste) {
//         msg.innerHTML = `X un contact nomme "${nom} existe deja"`;
//         msg.className = "msg msg-error";
//          return;
//     }
//     //creer un nouveau contact  
//     const nouveauContact = {
//         nom: nom,
//         telephone: telephone,
//         favori: false,
//         avatar: "https://via.placeholder.com/50"
//     };
//     contacts.push(nouveauContact);
//     // vider tous les champs document
//     document.getElementById("nomAjout").value = "";
//     document.getElementById("telAjout").value = "";
//     // message de succes 
//     msg.innerHTML = ` V contact ajoute :${nom} (${tel})`;
//     msg.className = "msg msg-success";
//     //Rafrachir l'affichage
//     afficherContact();
//     afficherFavoris();

// }
// function supprimerContact(){
//     let nom = document.getElementById("nomSuppr").value.trim();
//     const msg = document.getElementById("messageSuprimer");
//     if (nom === "") {
//         msg.innerHTML = "X veuillez entre un nom";
//         msg.className = "msg msg-error";
//         return;
//     }
//     // Troner l'index du contact 
//     const index= contacts.findIndex(contact=>contact.nom===nom);
//     if (index !== -1) {
//             //supprimer le contact
//             contacts.splice(index,1);
//             msg.innerHTML = `  V  "${nom}" a ete supprime`;
//             msg.className = `msg msg-success`;
//         document.getElementById("nomSuppr".value = "");
        
//     } else {
//         msg.innerHTML = ` X Contact non trouve : "${nom}"`;
//         msg.className = "msg msg-error";
//     }
//     //Refrachir la liste
//     afficherContact();
//     afficherFavoris();
// }
// window.addEventListener('DOMContentLoaded', () => {
//     afficherContact();
//     afficherFavoris();
// });