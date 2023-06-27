import React from 'react';

const drawLine = (
    ctx: CanvasRenderingContext2D,
    fromX: number,
    fromY: number,
    toX: number,
    toY: number,
) => {
    ctx.beginPath();
    ctx.moveTo(fromX, fromY);
    ctx.lineTo(toX, toY);
    ctx.stroke();
};

const drawGallow = (ctx: CanvasRenderingContext2D) => {
    // Draw stand.
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.moveTo(150, 5);
    ctx.lineTo(5, 5);
    ctx.lineTo(5, 200);
    ctx.stroke();

    // Draw noose.
    ctx.lineWidth = 6;
    drawLine(ctx, 80, 6, 80, 20); // 75 (center) + 10/2 (stroke) = 80
};

const drawHead = (ctx: CanvasRenderingContext2D) => {
    ctx.beginPath();
    ctx.arc(80, 48, 25, 0, Math.PI * 2, true); // Outer circle
    ctx.stroke();
};

const drawTorso = (ctx: CanvasRenderingContext2D) => {
    drawLine(ctx, 80, 75, 80, 150);
};

const drawLeftArm = (ctx: CanvasRenderingContext2D) => {
    drawLine(ctx, 80, 90, 51, 120);
};

const drawRightArm = (ctx: CanvasRenderingContext2D) => {
    drawLine(ctx, 80, 90, 111, 120);
};

const drawLeftLeg = (ctx: CanvasRenderingContext2D) => {
    drawLine(ctx, 80, 150, 51, 180);
};

const drawRightLeg = (ctx: CanvasRenderingContext2D) => {
    drawLine(ctx, 80, 150, 111, 180);
};

const drawEyes = (ctx: CanvasRenderingContext2D) => {
    ctx.font = '18px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('X X', 80, 50);
};

type HangmanProps = {
    incorrectGuesses: number;
};

const Hangman = ({ incorrectGuesses }: HangmanProps) => {
    const canvasRef = React.useRef<HTMLCanvasElement>(null);
    const [accessibilityText, setAccessibilityText] =
        React.useState('An empty gallow.');

    React.useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext('2d');
        if (!context) return;

        drawGallow(context);
        if (incorrectGuesses < 1) return;

        drawHead(context);
        setAccessibilityText('A gallow with a head.');
        if (incorrectGuesses < 2) return;

        drawTorso(context);
        setAccessibilityText('A gallow with a head and a torso.');
        if (incorrectGuesses < 3) return;

        drawLeftArm(context);
        setAccessibilityText('A gallow with a head, a torso, and a left arm.');
        if (incorrectGuesses < 4) return;

        drawRightArm(context);
        setAccessibilityText('A gallow with a head, a torso, and both arms.');
        if (incorrectGuesses < 5) return;

        drawLeftLeg(context);
        setAccessibilityText(
            'A gallow with a head, a torso, both arms, and a left leg.',
        );
        if (incorrectGuesses < 6) return;

        drawRightLeg(context);
        drawEyes(context);
        setAccessibilityText('A gallow with a dead man.');
    }, [incorrectGuesses]);

    return (
        <div className="flex justify-center">
            <canvas
                aria-label={accessibilityText}
                height="200"
                id="hangman"
                ref={canvasRef}
                role="img"
                width="150"
            />
        </div>
    );
};

export default Hangman;
