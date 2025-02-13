import { createLoadingScreen, loadAssets, loadingText } from './loader.js';
import { createReels, updateReels } from './reels.js';
import { createSpinButton, createWinText, onSpinButtonClick, resizeGame } from './ui.js';

let app;

// Main initialization function
function init() {
    app = new PIXI.Application({ width: window.innerWidth, height: window.innerHeight, backgroundColor: 0xffffff });
    
    document.getElementById('game-container').appendChild(app.view);

    // Handle window resizing
    window.addEventListener('resize', () => {
        app.renderer.resize(window.innerWidth, window.innerHeight);
        resizeGame();
    });

    createLoadingScreen(app);
    loadAssets(app, () => {
        app.stage.removeChild(loadingText);
        createReels(app);
        createSpinButton(app);
        createWinText(app);
        updateReels([0, 0, 0, 0, 0], app);
        resizeGame();
    });
}

init();