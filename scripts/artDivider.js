let frequency = 0.02;
let canvasHeight = 50;
let baseY = canvasHeight / 2;
let waveHeight = canvasHeight / 2;

// White → Purple Wave
let wpSketch = (p) => {

    p.setup = () => {
        let canvas = p.createCanvas(p.windowWidth, canvasHeight);
        canvas.parent('white-purple-wave-container');
        p.noStroke();
    };

    p.draw = () => {
        p.clear();
        p.background('#FFFBF5');
        p.fill('#DBD3ED');
        p.beginShape();
        p.vertex(0, p.height);
        p.vertex(0, 0);
        for (let x = 0; x <= p.width + 10; x += 10) {
            let y = baseY + waveHeight * Math.sin(x * frequency + p.frameCount * 0.03);
            p.vertex(x, y);
        }
        p.vertex(p.width, 0);
        p.vertex(p.width, p.height);
        p.endShape(p.CLOSE);
    };

    p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, canvasHeight);
    };
};

new p5(wpSketch);

// Purple → Green Wave
let pgSketch = (p) => {

    p.setup = () => {
        let canvas = p.createCanvas(p.windowWidth, canvasHeight);
        canvas.parent('purple-green-wave-container');
        p.noStroke();
    };

    p.draw = () => {
        p.clear();
        p.background('#DBD3ED');
        p.fill('#D3EDD8');
        p.beginShape();
        p.vertex(0, p.height);
        p.vertex(0, 0);
        for (let x = 0; x <= p.width + 10; x += 10) {
            let y = baseY + waveHeight * Math.sin(x * frequency + p.frameCount * 0.03);
            p.vertex(x, y);
        }
        p.vertex(p.width, 0);
        p.vertex(p.width, p.height);
        p.endShape(p.CLOSE);
    };

    p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, canvasHeight);
    };
};

new p5(pgSketch);