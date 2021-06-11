let indexSingulier = -1;
let timer;
let succes = false;
let callback;

function calculTimer() {
    var someVarName = sessionStorage.getItem("nombreEchec");
    if (someVarName !== null) {
        var nombreEchec = parseInt(someVarName);
        timer = 5 * nombreEchec;
    } else {
        timer = 0;
    }
}

function callBackend() {
    calculTimer();
    fixSingulier();
    loadSinguliere();
    loadNeutre();
    chrono();
    callback = getParameterByName('callback');
}

function loadNeutre() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        let chemin;
        if (this.readyState === 4 && this.status === 200) {
            let data = JSON.parse(this.responseText);
            let indexJson = 0;
            for (let i = 1; i <= 8; i++) {
                if (i !== indexSingulier) {
                    chemin = data[indexJson].chemin;
                    document.getElementById(i.toString()).src = "http://localhost:3000/img/" + chemin;
                    indexJson++;
                }
            }
        }
    };
    xmlhttp.open("GET", "http://localhost:3000/neutre", true);
    xmlhttp.send();
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function fixSingulier(){
    indexSingulier = (getRandomInt(8)+1);
}

function loadSinguliere() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        let data;
        let chemin;
        let base_image;
        let astuce;
        if (this.readyState === 4 && this.status === 200) {
            data = JSON.parse(this.responseText);
            base_image = new Image();
            chemin = data[0].chemin;
            base_image.src = "http://localhost:3000/img/" + chemin;
            base_image.onload = function () {
                var mainImgs = document.getElementById(indexSingulier.toString());
                mainImgs.src = base_image.src;
            }
            astuce = data[0].indice;
            document.getElementById("astuce").textContent = astuce;
        }

    };
    xmlhttp.open("GET", "http://localhost:3000/singuliere", true);
    xmlhttp.send();
}

function echec() {
    var someVarName = sessionStorage.getItem("nombreEchec");
    if (someVarName !== null) {
        var nombreEchec = parseInt(someVarName);
        nombreEchec++;
        sessionStorage.setItem("nombreEchec", nombreEchec.toString());
    } else {
        sessionStorage.setItem("nombreEchec", "1");
    }
    window.location.reload(true); //refresh la page avec un nouveau captcha
}

// fonction pour le timer
function chrono() {
    if (timer < 30) {
        timer++;
        document.form1.chrono.value = 30 - timer; //compte à rebours d'une minute
        if (timer >= 30) {
            echec();
        }
        setTimeout('chrono()', 1000); //en milliseconds
    } else {
        if (succes === false) {
            alert("Chrono depassé ! Essayer plus tard !")
        }
    }
}

function alertOnScreen(id) {
    if (id === indexSingulier.toString()) {
        succes = true;
        timer = 30;
        window.location.replace(callback);
    } else {
        echec();
    }
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}




