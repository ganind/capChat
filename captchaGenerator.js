let canvas;
let i = 0;

function callBackend() {
    loadNeutre();
    loadSinguliere();
    chrono();
    setCanvas();
}

function loadNeutre() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        let chemin;
        if (this.readyState === 4 && this.status === 200) {
            let data = JSON.parse(this.responseText);
            let base_image = new Image();
            chemin = data[0].chemin;
            base_image.src = "http://localhost:3000/img/" + chemin;
            base_image.onload = function () {
                ctx.drawImage(base_image, 0, 0, 85, 100);
            }
            let base_image1 = new Image();
            chemin = data[1].chemin;
            base_image1.src = "http://localhost:3000/img/" + chemin;
            base_image1.onload = function () {
                ctx.drawImage(base_image1, 85, 0, 85, 100);
            }
            let base_image2 = new Image();
            chemin = data[2].chemin;
            base_image2.src = "http://localhost:3000/img/" + chemin;
            base_image2.onload = function () {
                ctx.drawImage(base_image2, 170, 0, 85, 100);
            }
            let base_image3 = new Image();
            chemin = data[3].chemin;
            base_image3.src = "http://localhost:3000/img/" + chemin;
            base_image3.onload = function () {
                ctx.drawImage(base_image3, 255, 0, 85, 100);
            }
            let base_image4 = new Image();
            chemin = data[4].chemin;
            base_image4.src = "http://localhost:3000/img/" + chemin;
            base_image4.onload = function () {
                ctx.drawImage(base_image4, 0, 100, 85, 100);
            }
            let base_image5 = new Image();
            chemin = data[5].chemin;
            base_image5.src = "http://localhost:3000/img/" + chemin;
            base_image5.onload = function () {
                ctx.drawImage(base_image5, 85, 100, 85, 100);
            }
            let base_image6 = new Image();
            chemin = data[6].chemin;
            base_image6.src = "http://localhost:3000/img/" + chemin;
            base_image6.onload = function () {
                ctx.drawImage(base_image6, 170, 100, 85, 100);
            }
        }
    };
    xmlhttp.open("GET", "http://localhost:3000/neutre", true);
    xmlhttp.send();
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
                ctx.drawImage(base_image, 255, 100, 85, 100);
            }
            astuce = data[0].indice;
            document.getElementById("astuce").textContent = astuce;
        }

    };
    xmlhttp.open("GET", "http://localhost:3000/singuliere", true);
    xmlhttp.send();
}

function setCanvas() {
     canvas = document.getElementById("captchaCanvas");
     ctx = canvas.getContext("2d");
     canvas.addEventListener('click', handleClick);
}

// fonction pour le timer
function chrono() {
    i++;
    document.form1.chrono.value = 60 - i; //compte à rebours d'une minute
    if (i === 60) {
        window.location.reload(true); //refresh la page avec un nouveau captcha
    }
    setTimeout('chrono()', 1000); //en milliseconds
}

function getMousePos(c, evt) {
    let rect = c.getBoundingClientRect();
    return{
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

function handleClick(e) {
    let pos = getMousePos(canvas, e);
    posx = pos.x;
    posy = pos.y;
    alert(posx + " " + posy);
}

function imageChosen(x,y) {
    if (x < 85 && y < 100) {
        return 1;
    }
    else if (x <= 170 && y < 100) {
        return 2;
    }
    else if (x <= 255 && y < 100) {
        return 3;
    }
    else if (x <= 85 && y >= 100) {
        return 4;
    }
    else if (x <= 170 && y >= 100) {
        return 5;
    }
    else if (x <= 255 && y >= 100) {
        return 6;
    }
}
