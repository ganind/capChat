const CryptoJS = require("crypto-js");
const sql = require("../db.js");

//constructeur
const Artiste = function (artiste) {
    this.login = artiste.login;
    this.nom = artiste.nom;
    this.prenom = artiste.prenom;
    this.password =  artiste.password;
};


// create new artiste
Artiste.create = (newArtiste, result) => {
    // console.log(newArtiste.login, newArtiste.nom, newArtiste.prenom, newArtiste.password);
    let passwordCripte = CryptoJS.SHA256(newArtiste.password + "salt").toString();
    sql.query(`INSERT INTO artiste (login, nom, prenom, password) VALUES ( '${newArtiste.login}', '${newArtiste.nom}', '${newArtiste.prenom}', '${passwordCripte}')`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("Nouveau artiste crée: ", {id: res.insertId, ...newArtiste});
        result(null, {id: res.insertId, ...newArtiste});
    });
};

// find artiste by id
Artiste.findById = (artisteId, result) => {
    sql.query(`SELECT * FROM artiste WHERE artisteId = ${artisteId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("Artiste trouvé: ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found artiste with the id
        result({ kind: "not_found" }, null);
    });
};

// show all artistes
Artiste.getAll = result => {
    sql.query("SELECT * FROM artiste", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("Artistes: ", res);
        result(null, res);
    });
};

Artiste.updateById = (artisteId, artiste, result) => {
    let passwordCripte = CryptoJS.SHA256(artiste.password + "salt").toString();
    sql.query(
        "UPDATE artiste SET login = ?, nom = ?, prenom = ?, password = ? WHERE artisteId = ?",
        [artiste.login, artiste.nom, artiste.prenom, passwordCripte, artisteId],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }

            if (res.affectedRows === 0) {
                // not found artiste with the id
                result({ kind: "not_found" }, null);
                return;
            }

            console.log("Artiste mis à jour: ", { id: artisteId, ...artiste });
            result(null, { id: artisteId, ...artiste });
        }
    );
};

Artiste.remove = (artisteId, result) => {
    sql.query("DELETE FROM artiste WHERE artisteId = ?", artisteId, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows === 0) {
            // not found artiste with the id
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("Effacé artiste avec id : ", artisteId);
        result(null, res);
    });
};

Artiste.auth = (login, password, result) => {
    let passwordCripte = CryptoJS.SHA256(password + "salt").toString();
    sql.query("SELECT * FROM artiste WHERE login = ? AND password = ?", [login, passwordCripte], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("Artistes: ", res);
        result(null, res);
    } )
}

module.exports = Artiste;
