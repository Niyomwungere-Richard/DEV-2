
    let  livres = [
        {
            titre:"Le Petit Prince",
            prix :500,
            quantite:5
        },
        {
            titre:"Le Petit Pelican",
            prix :700,
            quantite:3

        }
    ];

    function show(id) {
        document.getElementById("menu").classList.add("hidden");
        document.getElementById("stock").classList.add("hidden");
        document.getElementById("ajout").classList.add("hidden");
        document.getElementById("vente").classList.add("hidden");
        document.getElementById("fin").classList.add("hidden");

        document.getElementById(id).classList.remove("hidden");

        if (id == "stock") {
            afficher();
        }
    }

    function afficher() {
        let div = document.getElementById("liste");
        div.innerHTML = "";

        if (livres.length == 0) {
            div.innerHTML = "Aucun livre";
        }

        for (let i = 0; i < livres.length; i++) {
            div.innerHTML += livres[i].titre + " - " + livres[i].prix + " F - Qte: " + livres[i].quantite + "<br>";
        }
    }

    function ajouter() {
        let t = document.getElementById("t1").value;
        let p = parseFloat(document.getElementById("p1").value);
        let q = parseInt(document.getElementById("q1").value);

        if (t == "" || isNaN(p) || isNaN(q)) {
            document.getElementById("msg1").innerHTML = "Erreur";
            return;
        }

        let trouve = false;

        for (let i = 0; i < livres.length; i++) {
            if (livres[i].titre == t) {
                livres[i].quantite += q;
                trouve = true;
            }
        }

        if (trouve == false) {
            let obj = {
                titre: t,
                prix: p,
                quantite: q
            };
            livres.push(obj);
        }

        document.getElementById("msg1").innerHTML = "Ajouté";
    }

    function vendre() {
        let t = document.getElementById("t2").value;
        let q = parseInt(document.getElementById("q2").value);

        let trouve = false;

        for (let i = 0; i < livres.length; i++) {
            if (livres[i].titre == t) {
                trouve = true;

                if (livres[i].quantite >= q) {
                    livres[i].quantite -= q;
                    let total = q * livres[i].prix;
                    document.getElementById("msg2").innerHTML = "Total: " + total;
                } else {
                    document.getElementById("msg2").innerHTML = "Stock insuffisant";
                }
            }
        }

        if (trouve == false) {
            document.getElementById("msg2").innerHTML = "Livre non trouvé";
        }
    }

    function quitter() {
        show("fin");
    }
