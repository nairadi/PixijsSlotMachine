import { updateLoadingProgress } from './ui.js';

export let loadingText;

export function createLoadingScreen(app) {
    loadingText = new PIXI.Text('Loading... 0%', { fontSize: 24, fill: 0x000000 });
    loadingText.anchor.set(0.5);
    loadingText.position.set(app.screen.width / 2, app.screen.height / 2);
    app.stage.addChild(loadingText);
}

// Temporary Load method to display the loading progress
// Forcefully adds 0.1 second delay after each asset load
export function loadAssets(app, callback) {
    const assets = [
        'assets/hv1_symbol.png',
        'assets/hv2_symbol.png',
        'assets/hv3_symbol.png',
        'assets/hv4_symbol.png',
        'assets/lv1_symbol.png',
        'assets/lv2_symbol.png',
        'assets/lv3_symbol.png',
        'assets/lv4_symbol.png',
        'assets/spin_button.png'
    ];

    const totalAssets = assets.length;
    let loadedAssets = 0;

    function loadNextAsset() {
        if (loadedAssets < totalAssets) {
            const asset = assets[loadedAssets];
            PIXI.Loader.shared.add(asset).load(() => {
                loadedAssets++;
                const progress = (loadedAssets / totalAssets) * 100;
                updateLoadingProgress(progress);
                setTimeout(loadNextAsset, 100);
            });
        } else {
            callback();
        }
    }

    loadNextAsset();
}


// Better load method without any delays
// export function loadAssets(app, callback) {
//     console.log('Loading assets');
//     const assets = [
//         'assets/hv1_symbol.png',
//         'assets/hv2_symbol.png',
//         'assets/hv3_symbol.png',
//         'assets/hv4_symbol.png',
//         'assets/lv1_symbol.png',
//         'assets/lv2_symbol.png',
//         'assets/lv3_symbol.png',
//         'assets/lv4_symbol.png',
//         'assets/spin_button.png'
//     ];

//     // Define the loader variable
//     const loader = new PIXI.Loader();

//     // Add assets to the loader
//     assets.forEach(asset => loader.add(asset));

//     // Update loading progress
//     loader.onProgress.add((loader) => {
//         console.log(`Loading progress: ${loader.progress}%`);
//         updateLoadingProgress(loader.progress);
//     });

//     // Load assets
//     loader.load(() => {
//         callback();
//     });
// }