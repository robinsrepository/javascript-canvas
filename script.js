// alert ("Hello World!");

// Porject 1 Birdhouse
function drawBirdHouse() {
    const birdHouse = document.getElementById("project1");
    const ctx1 = birdHouse.getContext("2d");
    const ratio = 2;

    birdHouse.width = birdHouse.offsetWidth * ratio;
    birdHouse.height = birdHouse.offsetHeight * ratio;

    ctx1.beginPath();
    ctx1.moveTo(200,300);
    ctx1.lineTo(300,300);
    ctx1.lineTo(300,100);
    ctx1.lineTo(200,50);
    ctx1.lineTo(100,100)
    ctx1.lineTo(100,300);
    ctx1.stroke();
    ctx1.fillStyle = "#532";
    ctx1.fill();

    ctx1.beginPath();
    ctx1.arc(200,160,50,0,7);
    ctx1.stroke();
    ctx1.fillStyle = "#321";
    ctx1.fill();

    ctx1.beginPath();
    ctx1.rect(100,300,200,20);
    ctx1.stroke();
    ctx1.fillStyle = "#532";
    ctx1.fill();

    ctx1.beginPath();
    ctx1.moveTo(200,50);
    ctx1.lineTo(80,110)
    ctx1.lineTo(80,80);
    ctx1.lineTo(200,20);
    ctx1.lineTo(320,80);
    ctx1.lineTo(320,110);
    ctx1.lineTo(200,50);
    ctx1.stroke();
    ctx1.fillStyle = "#030";
    ctx1.fill();

    ctx1.beginPath();
    ctx1.arc(200,240,10,0,7);
    ctx1.stroke();
    ctx1.fillStyle = "#432";
    ctx1.fill();

    const bird = new Image();
    bird.src="img/blue-bird.png";
    bird.onload = function() {
        drawBird();
    }

    function drawBird() {
        ctx1.drawImage(bird,160,140,125,120);
    }
}

drawBirdHouse();

// Porject 2 Strange Square
function drawStrangeSquare() {
    const strangeSquare = document.getElementById("project2");
    const ctx2 = strangeSquare.getContext("2d");
    const ratio = 2;
    const thickness = 20;
    let x = 160, y = 140, w = 400, h = 400; 
    let i = 1;

    strangeSquare.width = strangeSquare.offsetWidth * ratio;
    strangeSquare.height = strangeSquare.offsetHeight * ratio;

    while (i <= 10) {
        ctx2.beginPath();
        ctx2.rect(x,y,w,h);
        if (i % 2 == 1) {
            ctx2.fillStyle="lightgreen";
        } else {
            ctx2.fillStyle="white";
        }
        ctx2.fill();
        x = x + thickness;
        y = y + thickness;
        w = w - thickness - thickness;
        h = h - thickness - thickness;
        i = i + 1;
    }
}

drawStrangeSquare();

// Porject 3 Multiple Snowmen 
function drawSnowmen() {
    const snowmen = document.getElementById("project3");
    const ctx3 = snowmen.getContext("2d");
    const width = 600, height = 600;
    let spacing = 70;
    let scaleFactor = 0.7;

    drawSnowmanGrid(spacing, width, height, scaleFactor);

    function drawSnowmanGrid() {
        let x = spacing - 20;
        while (x < width) {
            let y = spacing + 50;
            while (y < height) {
                drawSnowman(x, y, 12, scaleFactor);
                y = y + spacing + 30;
            }
            x = x + spacing;
        }
    }

    function drawSnowman(ball1X, ball1Y, ball1R, scaleFactor) {
        ctx3.beginPath();
        ctx3.arc(ball1X, ball1Y, ball1R, 0, Math.PI * 2);
        ctx3.fillStyle="white";
        ctx3.fill();
        
        ctx3.beginPath();
        const ball2R = ball1R * scaleFactor, ball2X = ball1X, ball2Y = ball1Y - ball1R - ball2R;
        ctx3.arc(ball2X, ball2Y, ball2R, 0, Math.PI * 2);
        ctx3.fillStyle="white";
        ctx3.fill();
        
        ctx3.beginPath();
        const ball3R = ball2R * scaleFactor, ball3X = ball2X, ball3Y = ball2Y - ball2R - ball3R;
        ctx3.arc(ball3X, ball3Y, ball3R, 0, Math.PI * 2);
        ctx3.fillStyle="white";
        ctx3.fill();
        
        drawHat(ball3X, ball3Y, ball3R, scaleFactor);
    }

    function drawHat(headX, headY, headR, scaleFactor) {
        ctx3.beginPath();
        const w4 = headR * 2, h4 = headR / 2, x4 = headX - w4 / 2, y4 = headY - headR;
        ctx3.rect(x4,y4,w4,h4)
        ctx3.stroke();
        ctx3.fillStyle="black";
        ctx3.fill();
        
        ctx3.beginPath();
        const w5 = w4 * scaleFactor, h5 = headR, x5 = headX - w5 / 2, y5 = y4 - h5;
        ctx3.rect(x5,y5,w5,h5)
        ctx3.stroke();
        ctx3.fill();    
    }
}

drawSnowmen();

// Porject 4 Animation
const circle = document.getElementById("project4");
const ctx4 = circle.getContext("2d");
let animationId4;

circle.addEventListener("mouseover", startAnimation);
circle.addEventListener("mouseout", stopAnimation);

function startAnimation() {
        let p = 0;
        let sign = 1;

        function animate() {            
            const minX = 100;
            const rangeX = 400;
            const minRad = 10;
            const rangeRad = 20;


            const x = minX + rangeX * p;
            const rad = minRad + rangeRad * Math.sin(p * Math.PI);
            p = p + 0.02 * sign;
            if (p > 1 || p < 0 ) {
                sign = sign * -1;
            }

            ctx4.clearRect(0, 0, circle.width, circle.height);
            ctx4.beginPath();
            ctx4.arc(x, 200, rad, 0, Math.PI*2);
            ctx4.stroke();

            animationId4 = requestAnimationFrame(animate);
        }
    animate();
}

function stopAnimation() {
    console.log("stop mouse pulse");
   cancelAnimationFrame(animationId4);
}

// Porject 5 Mouse Interaction
const mousePulse = document.getElementById("project5");
const ctx5 = mousePulse.getContext("2d");

const minRad = 10; 
const rangeRad = 20; 
let p5 = 0; 
let x, y, animationId5;

function resizeCanvas() {
    const rect = mousePulse.getBoundingClientRect();

    mousePulse.width = rect.width;
    mousePulse.height = rect.height;
}

mousePulse.addEventListener("mouseover", startMousePulse);
mousePulse.addEventListener("mouseout", stopMousePulse);
mousePulse.addEventListener("mousemove", function(info) {
    const rect = mousePulse.getBoundingClientRect();
    x = info.clientX - rect.left;
    y = info.clientY - rect.top;
    updateCirclePosition(x, y);
});

window.addEventListener("resize", resizeCanvas);
resizeCanvas();

function startMousePulse() {
    function animate() {
        p5 = p5 + 0.02;

        if (p5 > 1) {
            p5 = 0;
        }
        const rad = minRad + rangeRad * p5;

        ctx5.clearRect(0, 0, mousePulse.width, mousePulse.height); 
        ctx5.beginPath();
        ctx5.arc(x, y, rad, 0, Math.PI * 2);
        ctx5.stroke();

        animationId5 = requestAnimationFrame(animate);
    }
    animate();
}

function stopMousePulse() {
    cancelAnimationFrame(animationId5);
}

// Porject 6 Happy Heart
const happyHeart = document.getElementById("project6");
const ctx6 = happyHeart.getContext('2d');

happyHeart.addEventListener("mouseover", startHappyHeart);
happyHeart.addEventListener("mouseout", stopHappyHeart);

const heartImage = new Image();
heartImage.src="img/happy-heart.png";
const maxY = 180;
const rangeY = 80;
let p6 = 0;
let animationId6;

function startHappyHeart() {
    
    function animate() {
        p6 = p6 + 0.02;
        if (p6 > 1) {
            p6 = 0;
        }

        const y = maxY - Math.abs(Math.sin(p6 * Math.PI)) * rangeY;

        ctx6.clearRect(0, 0, happyHeart.width, happyHeart.height);

        ctx6.drawImage(heartImage, 100, y, 380, 380);

        ctx6.font = "30px Arial";
        ctx6.textBaseline = "middle";
        ctx6.textAlign = "center";
        ctx6.fillStyle = "red";
        // ctx6.fillText("HTML Canvas",200,300);

        animationId6 = requestAnimationFrame(animate);
    }
    animate();
}

function stopHappyHeart() {
    cancelAnimationFrame(animationId6);
}

// Porject 7 Piano
function playPiano() {
    const key1 = new Audio("audio/key01.mp3");
    const key2 = new Audio("audio/key02.mp3");
    const key3 = new Audio("audio/key03.mp3");
    const key4 = new Audio("audio/key04.mp3");
    const key5 = new Audio("audio/key05.mp3");
    const key6 = new Audio("audio/key06.mp3");
    const key7 = new Audio("audio/key07.mp3");
    const key8 = new Audio("audio/key08.mp3");
    const key9 = new Audio("audio/key09.mp3");
    const key10 = new Audio("audio/key10.mp3");
    const key11 = new Audio("audio/key11.mp3");
    const key12 = new Audio("audio/key12.mp3");
    const key13 = new Audio("audio/key13.mp3");
    const key14 = new Audio("audio/key14.mp3");
    const key15 = new Audio("audio/key15.mp3");
    const key16 = new Audio("audio/key16.mp3");
    const key17 = new Audio("audio/key17.mp3");
    const key18 = new Audio("audio/key18.mp3");
    const key19 = new Audio("audio/key19.mp3");
    const key20 = new Audio("audio/key20.mp3");
    const key21 = new Audio("audio/key21.mp3");
    const key22 = new Audio("audio/key22.mp3");
    const key23 = new Audio("audio/key23.mp3");
    const key24 = new Audio("audio/key24.mp3");

    document.addEventListener("keydown", function(info) {
        if (info.code == "Tab") {
            key1.currentTime = 0;
            key1.play();
        }
    });

    document.addEventListener("keydown", function(info) {
        if (info.code == "Digit1") {
            key2.currentTime = 0;
            key2.play();
        }
    });

    document.addEventListener("keydown", function(info) {
        if (info.code == "KeyQ") {
            key3.currentTime = 0;
            key3.play();
        }
    });

    document.addEventListener("keydown", function(info) {
        if (info.code == "Digit2") {
            key4.currentTime = 0;
            key4.play();
        }
    });

    document.addEventListener("keydown", function(info) {
        if (info.code == "KeyW") {
            key5.currentTime = 0;
            key5.play();
        }
    });


    document.addEventListener("keydown", function(info) {
        if (info.code == "KeyE") {
            key6.currentTime = 0;
            key6.play();
        }
    });

    document.addEventListener("keydown", function(info) {
        if (info.code == "Digit4") {
            key7.currentTime = 0;
            key7.play();
        }
    });

    document.addEventListener("keydown", function(info) {
        if (info.code == "KeyR") {
            key8.currentTime = 0;
            key8.play();
        }
    });

    document.addEventListener("keydown", function(info) {
        if (info.code == "Digit5") {
            key9.currentTime = 0;
            key9.play();
        }
    });

    document.addEventListener("keydown", function(info) {
        if (info.code == "KeyT") {
            key10.currentTime = 0;
            key10.play();
        }
    });

    document.addEventListener("keydown", function(info) {
        if (info.code == "Digit6") {
            key11.currentTime = 0;
            key11.play();
        }
    });

    document.addEventListener("keydown", function(info) {
        if (info.code == "KeyY") {
            key12.currentTime = 0;
            key12.play();
        }
    });

    document.addEventListener("keydown", function(info) {
        if (info.code == "KeyU") {
            key13.currentTime = 0;
            key13.play();
        }
    });

    document.addEventListener("keydown", function(info) {
        if (info.code == "Digit8") {
            key14.currentTime = 0;
            key14.play();
        }
    });

    document.addEventListener("keydown", function(info) {
        if (info.code == "KeyI") {
            key15.currentTime = 0;
            key15.play();
        }
    });

    document.addEventListener("keydown", function(info) {
        if (info.code == "Digit9") {
            key16.currentTime = 0;
            key16.play();
        }
    });

    document.addEventListener("keydown", function(info) {
        if (info.code == "KeyO") {
            key17.currentTime = 0;
            key17.play();
        }
    });

    document.addEventListener("keydown", function(info) {
        if (info.code == "KeyP") {
            key18.currentTime = 0;
            key18.play();
        }
    });

    document.addEventListener("keydown", function(info) {
        if (info.code == "Minus") {
            key19.currentTime = 0;
            key19.play();
        }
    });

    document.addEventListener("keydown", function(info) {
        if (info.code == "BracketLeft") {
            key20.currentTime = 0;
            key20.play();
        }
    });

    document.addEventListener("keydown", function(info) {
        if (info.code == "Equal") {
            key21.currentTime = 0;
            key21.play();
        }
    });

    document.addEventListener("keydown", function(info) {
        if (info.code == "BracketRight") {
            key22.currentTime = 0;
            key22.play();
        }
    });

    document.addEventListener("keydown", function(info) {
        if (info.code == "Backspace") {
            key23.currentTime = 0;
            key23.play();
        }
    });

    document.addEventListener("keydown", function(info) {
        if (info.code == "Backslash") {
            key24.currentTime = 0;
            key24.play();
        }
    });

    const piano = document.getElementById("piano");
    const data = ["C", "D", "E", "F", "G", "A", "B"];

    let html = "";
    for (let octave=0; octave<2; octave++) {
        for (let i=0; i<data.length; i++) {
            let hasSharp = (data[i]!="E" && data[i]!="B") ? true : false;
            html += `<div class="whiteKey" data-code="${data[i]}${octave+4}">`;
            if (hasSharp) {
                html += `<div class="blackKey" data-code="${data[i]}${octave+4}"></div>`;
            }
            html += `</div>`;
        }
    }
    piano.insertAdjacentHTML("beforeend", html);

    const notes = document.querySelectorAll(".whiteKey, .blackKey");
    const keys = ["Tab", "1", "q", "2", "w", "e", "4", "r", "5", "t", "6", "y", "u", "8", "i", "9", "o", "p", "-", "[", "=", "]", "Backspace", "\\"];
    const synth = new Tone.PolySynth(Tone.Synth).toDestination();

    document.addEventListener("keydown", (e) => {
        e.preventDefault();
        if (!e.repeat) {
            keys.forEach((key, index) => {
                if (e.key == key) {
                    notes[index].style.background = (notes[index].classList.contains("whiteKey")) ? "#ccc" : "#777";
                }
            })
        }
    });

    document.addEventListener("keyup", (e) => {
        keys.forEach((key, index) => {
            if (e.key == key) {
                notes[index].style.background = (notes[index].classList.contains("whiteKey")) ? "#fff" : "#000";
            }
        })
    });

}

playPiano();

// Porject 8 Let it snow!
const snowman = document.getElementById("project8");
const ctx8 = snowman.getContext("2d");


const minX = 170;
const rangeX = 90;
let p8 = 0;
const scarf = new Image();
scarf.src="img/scarf.png";

// Make the eyes follow the mouse
snowman.addEventListener("mousemove", function(info) {
    p8 = info.offsetX / snowman.width;
});

function drawSnowman(ball1X, ball1Y, ball1R, scaleFactor) {
    ctx8.beginPath();
    ctx8.arc(ball1X, ball1Y, ball1R, 0, Math.PI * 2);
    ctx8.fillStyle = "snow";
    ctx8.fill();

    const overlapOffset = ball1R * 0.2;
    ctx8.beginPath();
    const ball2R = ball1R * scaleFactor;
    const ball2X = ball1X;
    const ball2Y = ball1Y - ball1R - ball2R + overlapOffset;
    ctx8.arc(ball2X, ball2Y, ball2R, 0, Math.PI * 2);
    ctx8.fill();
    
    ctx8.beginPath();
    const ball3R = ball2R * scaleFactor;
    const ball3X = ball2X;
    const ball3Y = ball2Y - ball2R - ball3R;
    ctx8.arc(ball3X, ball3Y, ball3R, 0, Math.PI * 2);
    ctx8.fill();
    
    drawHat(ball3X, ball3Y, ball3R, scaleFactor);
}

function drawHat(headX, headY, headR, scaleFactor) {
    ctx8.beginPath();
    const w4 = headR * 2, h4 = headR / 2 -20, x4 = headX - w4 / 2, y4 = headY - headR + 10;
    ctx8.rect(x4,y4,w4,h4);
    ctx8.strokeStyle="black";
    ctx8.stroke();
    ctx8.fillStyle="black";
    ctx8.fill();
    
    ctx8.beginPath();
    const w5 = w4 * scaleFactor, h5 = headR, x5 = headX - w5 / 2, y5 = y4 - h5;
    ctx8.rect(x5,y5,w5,h5)
    ctx8.stroke();
    ctx8.fill();    
    ctx8.closePath();

    ctx8.beginPath();
    const w6 = w4 * scaleFactor, h6 = headR / 4, x6 = headX - w6 / 2, y6 = headY - headR - 17;
    ctx8.rect(x6,y6,w6,h6);
    ctx8.strokeStyle="red";
    ctx8.stroke();
    ctx8.fillStyle="red";
    ctx8.fill();
}

function drawSnowflake(xFlake, yFlake) {
    ctx8.scale(0.15, 0.15);
    
    // Give lines white color
    ctx8.strokeStyle="lightblue";
    ctx8.lineWidth = 7;

    // Horizontal line
    ctx8.beginPath();
    ctx8.moveTo(xFlake + 70, yFlake + 200);
    ctx8.lineTo(xFlake + 335, yFlake + 200);
    ctx8.stroke();

    // Vertical line
    ctx8.beginPath();
    ctx8.moveTo(xFlake + 200, yFlake + 70);
    ctx8.lineTo(xFlake + 200, yFlake + 330);
    ctx8.stroke();

    // Diagonal line (top-left to right-bottom)
    ctx8.beginPath();
    ctx8.moveTo(xFlake + 100, yFlake + 100);
    ctx8.lineTo(xFlake + 300, yFlake + 300);
    ctx8.stroke();

    // Diagonal line (top-right to left-bottom)
    ctx8.beginPath();
    ctx8.moveTo(xFlake + 100, yFlake + 300);
    ctx8.lineTo(xFlake + 300, yFlake + 100);
    ctx8.stroke();

    // Inner connected line
    ctx8.beginPath();
    ctx8.moveTo(xFlake + 200, yFlake + 150);
    ctx8.lineTo(xFlake + 235, yFlake + 165);
    ctx8.lineTo(xFlake + 250, yFlake + 200);
    ctx8.lineTo(xFlake + 235, yFlake + 235);
    ctx8.lineTo(xFlake + 200, yFlake + 250);    
    ctx8.lineTo(xFlake + 165, yFlake + 235); 
    ctx8.lineTo(xFlake + 150, yFlake + 200); 
    ctx8.lineTo(xFlake + 165, yFlake + 165); 
    ctx8.lineTo(xFlake + 200, yFlake + 150); 
    ctx8.stroke();
 
    // 1 Left lower line
    ctx8.beginPath();
    ctx8.moveTo(xFlake + 200, yFlake + 130);
    ctx8.lineTo(xFlake + 170, yFlake + 110);
    ctx8.stroke();
    // 1 Left higher line
    ctx8.beginPath();
    ctx8.moveTo(xFlake + 200, yFlake + 100);
    ctx8.lineTo(xFlake + 180, yFlake + 90);
    ctx8.stroke();
    // 1 Right lower line
    ctx8.beginPath();
    ctx8.moveTo(xFlake + 200, yFlake + 130);
    ctx8.lineTo(xFlake + 230, yFlake + 110);
    ctx8.stroke();
    // 1 Rigt higher line
    ctx8.beginPath();
    ctx8.moveTo(xFlake + 200, yFlake + 100);
    ctx8.lineTo(xFlake + 220, yFlake + 90);
    ctx8.stroke();

    // 2 Left lower line
    ctx8.beginPath();
    ctx8.moveTo(xFlake + 250, yFlake + 150);
    ctx8.lineTo(xFlake + 245, yFlake + 115);
    ctx8.stroke();
    // 2 Left higher line
    ctx8.beginPath();
    ctx8.moveTo(xFlake + 270, yFlake + 100);
    ctx8.lineTo(xFlake + 270, yFlake + 130);
    ctx8.stroke();
    // 2 Right lower line
    ctx8.beginPath();
    ctx8.moveTo(xFlake + 250, yFlake + 150);
    ctx8.lineTo(xFlake + 290, yFlake + 155);
    ctx8.stroke();
    // 2 Rigt higher line
    ctx8.beginPath();
    ctx8.moveTo(xFlake + 300, yFlake + 130);
    ctx8.lineTo(xFlake + 270, yFlake + 130);
    ctx8.stroke();

    // 3 Left lower line
    ctx8.beginPath();
    ctx8.moveTo(xFlake + 270, yFlake + 200);
    ctx8.lineTo(xFlake + 295, yFlake + 170);
    ctx8.stroke();
    // 3 Left higher line
    ctx8.beginPath();
    ctx8.moveTo(xFlake + 320, yFlake + 180);
    ctx8.lineTo(xFlake + 300, yFlake + 200);
    ctx8.stroke();
    // 3 Right lower line
    ctx8.beginPath();
    ctx8.moveTo(xFlake + 270, yFlake + 200);
    ctx8.lineTo(xFlake + 295, yFlake + 230);
    ctx8.stroke();
    // 3 Rigt higher line
    ctx8.beginPath();
    ctx8.moveTo(xFlake + 320, yFlake + 220);
    ctx8.lineTo(xFlake + 300, yFlake + 200);
    ctx8.stroke();

    // 4 Left lower line
    ctx8.beginPath();
    ctx8.moveTo(xFlake + 290, yFlake + 245);
    ctx8.lineTo(xFlake + 250, yFlake + 250);
    ctx8.stroke();
    // 4 Left higher line
    ctx8.beginPath();
    ctx8.moveTo(xFlake + 300, yFlake + 275);
    ctx8.lineTo(xFlake + 275, yFlake + 275);
    ctx8.stroke();
    // 4 Right lower line
    ctx8.beginPath();
    ctx8.moveTo(xFlake + 250, yFlake + 250);
    ctx8.lineTo(xFlake + 245, yFlake + 290);
    ctx8.stroke();
    // 4 Rigt higher line
    ctx8.beginPath();
    ctx8.moveTo(xFlake + 275, yFlake + 275);
    ctx8.lineTo(xFlake + 275, yFlake + 300);
    ctx8.stroke();

    // 5 Left lower line
    ctx8.beginPath();
    ctx8.moveTo(xFlake + 235, yFlake + 295);
    ctx8.lineTo(xFlake + 200, yFlake + 270);
    ctx8.stroke();
    // 5 Left higher line
    ctx8.beginPath();
    ctx8.moveTo(xFlake + 225, yFlake + 315);
    ctx8.lineTo(xFlake + 200, yFlake + 300);
    ctx8.stroke();
    // 5 Rigt higher line
    ctx8.beginPath();
    ctx8.moveTo(xFlake + 175, yFlake + 315);
    ctx8.lineTo(xFlake + 200, yFlake + 300);
    ctx8.stroke();
    // 5 Rigt higher line
    ctx8.beginPath();
    ctx8.moveTo(xFlake + 165, yFlake + 295);
    ctx8.lineTo(xFlake + 200, yFlake + 270);
    ctx8.stroke();

    // 6 Left lower line
    ctx8.beginPath();
    ctx8.moveTo(xFlake + 145, yFlake + 255);
    ctx8.lineTo(xFlake + 150, yFlake + 290);
    ctx8.stroke();
    // 6 Left higher line
    ctx8.beginPath();
    ctx8.moveTo(xFlake + 125, yFlake + 275);
    ctx8.lineTo(xFlake + 125, yFlake + 300);
    ctx8.stroke();
    // 6 Rigt lower line
    ctx8.beginPath();
    ctx8.moveTo(xFlake + 145, yFlake + 255);
    ctx8.lineTo(xFlake + 105, yFlake + 250);
    ctx8.stroke();
    // 6 Rigt higher line
    ctx8.beginPath();
    ctx8.moveTo(xFlake + 125, yFlake + 275);
    ctx8.lineTo(xFlake + 100, yFlake + 275);
    ctx8.stroke();

    // 7 Left lower line
    ctx8.beginPath();
    ctx8.moveTo(xFlake + 130, yFlake + 200);
    ctx8.lineTo(xFlake + 100, yFlake + 235);
    ctx8.stroke();
    // 7 Left higher line
    ctx8.beginPath();
    ctx8.moveTo(xFlake + 100, yFlake + 200);
    ctx8.lineTo(xFlake + 85, yFlake + 220);
    ctx8.stroke();
    // 7 Rigt lower line
    ctx8.beginPath();
    ctx8.moveTo(xFlake + 130, yFlake + 200);
    ctx8.lineTo(xFlake + 100, yFlake + 165);
    ctx8.stroke();
    // 7 Rigt higher line
    ctx8.beginPath();
    ctx8.moveTo(xFlake + 100, yFlake + 200);
    ctx8.lineTo(xFlake + 85, yFlake + 180);
    ctx8.stroke();

    // 8 Left lower line
    ctx8.beginPath();
    ctx8.moveTo(xFlake + 145, yFlake + 145);
    ctx8.lineTo(xFlake + 105, yFlake + 150);
    ctx8.stroke();
    // 8 Left higher line
    ctx8.beginPath();
    ctx8.moveTo(xFlake + 125, yFlake + 125);
    ctx8.lineTo(xFlake + 100, yFlake + 125);
    ctx8.stroke();
    // 8 Rigt lower line
    ctx8.beginPath();
    ctx8.moveTo(xFlake + 145, yFlake + 145);
    ctx8.lineTo(xFlake + 150, yFlake + 110);
    ctx8.stroke();
    // 8 Rigt higher line
    ctx8.beginPath();
    ctx8.moveTo(xFlake + 125, yFlake + 125);
    ctx8.lineTo(xFlake + 125, yFlake + 100);
    ctx8.stroke();

    ctx8.closePath();
    ctx8.setTransform(1,0,0,1,0,0);
}

const width = 4000, height = 4000;
let spacing =  500;
let scaleFactor = 1;
let snowPosition = [];

function drawSnowflakesPosition() {
    let xFlake = 0;
    let yFlake = 0;
    xFlake = -200;
    while (xFlake < width) {
        yFlake = 0;
        while (yFlake < height) {
            let randomXOffset = Math.random() * (spacing);
            let randomYOffset = Math.random() * (spacing);
            let randomSpeed = 5 + Math.random() * 8;
            snowPosition.push({
                x: xFlake + randomXOffset,
                y: yFlake + randomYOffset,
                ySpeed: randomSpeed
            });
            yFlake += spacing;
        }
        xFlake += spacing;
    }
}

function drawSnowflakesGrid() {
    snowPosition.forEach(position => {
        drawSnowflake(position.x, position.y, scaleFactor);

        position.y += position.ySpeed;

        if (position.y > height) {
            position.y = -100;
        }
    })
}

drawSnowflakesPosition();

function animate() {
    ctx8.clearRect(0,0,snowman.width,snowman.height);

    drawSnowman(200,640,160,0.7);
    
    const x = minX + rangeX * p8;
    ctx8.beginPath();
    ctx8.arc(x-25,200,15,0,Math.PI*2);
    ctx8.arc(x+25,200,15,0,Math.PI*2);
    ctx8.fillStyle = "black";
    ctx8.fill();

    ctx8.drawImage(scarf,135,265,130,200);
8
    requestAnimationFrame(animate);

    drawSnowflakesGrid();
}

animate();