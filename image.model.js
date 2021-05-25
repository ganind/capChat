const sql = require("./db.js");

// constructeur
const Image = function (image) {
    this.chemin = image.chemin;
    this.indice = image.indice;
    this.type_image = image.type_image;
};

Image.create = (newImage, result) => {
    sql.query("INSERT INTO image SET ?", newImage, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("Nouvelle image créée: ", {id: res.insertId, ...newImage});
        result(null, {id: res.insertId, ...newImage});
    });
};

Image.findById = (imageId, result) => {
    sql.query(`SELECT * FROM image WHERE id = ${imageId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("Image trouvée : ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found image with the id
        result({ kind: "not_found" }, null);
    });
};

Image.getNeutre = result => {
    // requête pour les images neutres
    sql.query("SELECT * FROM image WHERE type_image = 0 ORDER BY RAND() LIMIT 7;", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("Images: ", res);
        result(null, res);
    });
};

Image.getSinguliere = result => {
    // requête pour les images sing
    sql.query("SELECT * FROM image WHERE type_image = 1 ORDER BY RAND() LIMIT 1;", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("Images: ", res);
        result(null, res);
    });
};

Image.updateById = (id, image, result) => {
    sql.query(
        "UPDATE image SET chemin = ?, indice = ?, type_image = ? WHERE id = ?",
        [image.chemin, image.indice, image.type_image, id],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }

            if (res.affectedRows === 0) {
                // not found images with the id
                result({ kind: "not_found" }, null);
                return;
            }

            console.log("Image mise à jour : ", { id: id, ...image });
            result(null, { id: id, ...image });
        }
    );
};

Image.remove = (id, result) => {
    sql.query("DELETE FROM image WHERE id = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows === 0) {
            // not found Customer with the id
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("Image effacée avec id: ", id);
        result(null, res);
    });
};

Image.removeAll = result => {
    sql.query("DELETE FROM image", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log(`${res.affectedRows} images effacées`);
        result(null, res);
    });
};

module.exports = Image;


