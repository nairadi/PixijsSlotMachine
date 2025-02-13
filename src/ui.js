import { calculateWins } from './compute.js';
import { NUM_REELS, NUM_ROWS, PADDING, reelset, SPIN_BUTTON_PADDING, SPIN_BUTTON_SIZE, SYMBOL_SIZE } from './constants.js';
import { loadingText } from './loader.js';
import { reels, updateReels } from './reels.js';

export let spinButton, winText;

export function createSpinButton(app) {
    spinButton = new PIXI.Sprite.from('assets/spin_button.png'); // Updated to spin_button.png
    spinButton.anchor.set(0.5);
    spinButton.interactive = true;
    spinButton.buttonMode = true;
    spinButton.on('pointerdown', () => onSpinButtonClick(app)); // Pass app instance here
    app.stage.addChild(spinButton);
}

export function createWinText(app) {
    winText = new PIXI.Text('', { fontSize: 24, fill: 0x000000, wordWrap: true, wordWrapWidth: app.screen.width - 40 });
    winText.anchor.set(0.5);
    app.stage.addChild(winText);
}

export function updateLoadingProgress(progress) {
    loadingText.text = `Loading... ${Math.round(progress)}%`;
}

export function onSpinButtonClick(app) {
    const positions = reelset.map(reel => Math.floor(Math.random() * reel.length));
    // const positions=[0, 11, 1, 10, 14] // TODO: leaving this here for visual testing bypass
    updateReels(positions, app);
    const wins = calculateWins(positions);
    displayWins(wins);
}

export function displayWins(wins) {
    let winDetails = `Total wins: ${wins.totalWin}\n`;
    wins.wins.forEach(win => {
        winDetails += `- payline ${win.payline}, ${win.symbol} x${win.count}, ${win.payout}\n`;
    });
    winText.text = winDetails;

    const lines = winDetails.split('\n').length;
    const maxFontSize = 24;
    const minFontSize = 12;
    const fontSize = Math.max(minFontSize, maxFontSize - (lines - 1) * 2);
    winText.style.fontSize = fontSize;

    resizeGame();
}

export function resizeGame() {
    const reelAreaHeight = window.innerHeight * 0.75;
    const reelAreaWidth = window.innerWidth;

    const symbolScale = Math.min(
        reelAreaWidth / (NUM_REELS * (SYMBOL_SIZE + PADDING * 2)),
        reelAreaHeight / (NUM_ROWS * (SYMBOL_SIZE + PADDING * 2))
    );

    const spinButtonScale = Math.min(
        (window.innerWidth * 0.25) / SPIN_BUTTON_SIZE,
        (window.innerHeight * 0.15) / SPIN_BUTTON_SIZE
    );

    const reelOffsetX = (reelAreaWidth - NUM_REELS * (SYMBOL_SIZE + PADDING * 2) * symbolScale) / 2;
    const reelOffsetY = (reelAreaHeight - NUM_ROWS * (SYMBOL_SIZE + PADDING * 2) * symbolScale) / 2;

    reels.forEach((reel, i) => {
        reel.scale.set(symbolScale);
        reel.position.set(reelOffsetX + i * (SYMBOL_SIZE + PADDING * 2) * symbolScale, reelOffsetY);
    });

    spinButton.scale.set(spinButtonScale);
    spinButton.position.set(window.innerWidth / 2, window.innerHeight * 0.825);

    const winTextY = spinButton.y + SPIN_BUTTON_SIZE * spinButtonScale / 2 + SPIN_BUTTON_PADDING;
    winText.position.set(window.innerWidth / 2, winTextY);
    winText.style.wordWrapWidth = window.innerWidth - 40;
}