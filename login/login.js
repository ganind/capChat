function submit() {
    var inputLogin = document.getElementById("inputLogin").value;
    var inputPassword = document.getElementById("inputPassword").value;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            let data = JSON.parse(this.responseText);
            if (data.length !== 0) {
                alert("OK !!!!");
            } else {
                alert("Mauvaise saisie. Réessayez !");
            }
        }
    };
    xhttp.open("POST", "http://localhost:3000/auth", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send("{\n" +
        "    \"login\": \"" + inputLogin + "\",\n" +
        "    \"password\": \"" + inputPassword + "\"\n" +
        "}");
}

function submitNewAccount() {
    var inputNom = document.getElementById("Inputnom").value;
    var inputPrenom = document.getElementById("Inputprenom").value;
    var inputLog = document.getElementById("Inputlog").value;
    var inputPsw = document.getElementById("Inputpsw").value;
    var inputPswRepeat = document.getElementById("Inputpsw-repeat").value;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            let data = JSON.parse(this.responseText);
            if (data.length !== 0) {
                alert("OK !!!!");
            } else {
                alert("Mauvaise saisie du mot de passe. Réessayez !");
            }
        }
    };
    if (inputPsw === inputPswRepeat) {
    xhttp.open("POST", "http://localhost:3000/artistes", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send("{\n" +
        "    \"nom\": \"" + inputNom + "\",\n" +
        "    \"prenom\": \"" + inputPrenom + "\",\n" +
        "    \"login\": \"" + inputLog + "\",\n" +
        "    \"password\": \"" + inputPsw + "\"\n" +
        "}");
    } else {
        alert("Mauvaise saisie du mot de passe. Réessayez !");
    }
}
