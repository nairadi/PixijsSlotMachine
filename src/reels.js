import { NUM_REELS, NUM_ROWS, PADDING, reelset, SYMBOL_SIZE } from './constants.js';

export let reels = [];

export function createReels(app) {
    for (let i = 0; i < NUM_REELS; i++) {
        const reel = new PIXI.Container();
        reels.push(reel);
        app.stage.addChild(reel);
    }
}

export function updateReels(positions, app) {
    for (let i = 0; i < reels.length; i++) {
        const reel = reels[i];
        reel.removeChildren();
        for (let j = 0; j < NUM_ROWS; j++) {
            const symbolIndex = (positions[i] + j) % reelset[i].length;
            const symbol = new PIXI.Sprite.from(`assets/${reelset[i][symbolIndex]}_symbol.png`);
            symbol.y = j * (SYMBOL_SIZE + PADDING) + PADDING;
            symbol.x = PADDING;
            reel.addChild(symbol);
        }
    }
}