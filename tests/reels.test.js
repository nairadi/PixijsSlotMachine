jest.mock('pixi.js');

import * as PIXI from 'pixi.js';
import { calculateWins } from '../src/compute.js';
import { reelset } from '../src/constants.js';
import { createReels, updateReels } from '../src/reels.js';

let app;
beforeAll(() => {
    app = new PIXI.Application({ width: 800, height: 600 });
});

function getScreen(positions) {
    return positions.map((pos, col) => (
        [0, 1, 2].map(row => reelset[col][(pos + row) % reelset[col].length])
    ));
}

function testReelPositions(positions, expectedScreen, expectedTotalWins, expectedWins) {
    updateReels(positions, app);
    const screen = getScreen(positions);
    const wins = calculateWins(positions);

    expect(screen).toEqual(expectedScreen);
    expect(wins.totalWin).toBe(expectedTotalWins);
    expect(wins.wins).toEqual(expectedWins);
}

test('Test case 1', () => {
    const positions = [0, 11, 1, 10, 14];
    const expectedScreen = [
        ["hv2", "lv3", "lv3"],
        ["hv2", "lv1", "lv3"],
        ["hv2", "lv3", "lv4"],
        ["lv1", "hv1", "lv2"],
        ["hv1", "lv2", "hv1"]
    ];
    const expectedTotalWins = 6;
    const expectedWins = [
        { payline: 2, symbol: "hv2", count: 3, payout: 5 },
        { payline: 5, symbol: "lv3", count: 3, payout: 1 }
    ];
    testReelPositions(positions, expectedScreen, expectedTotalWins, expectedWins);
});

test('Test case 2', () => {
    const positions = [0, 0, 0, 0, 0];
    const expectedScreen = [
        ["hv2", "lv3", "lv3"],
        ["hv1", "lv2", "lv3"],
        ["lv1", "hv2", "lv3"],
        ["hv2", "lv2", "hv3"],
        ["lv3", "lv4", "hv2"]
    ];
    const expectedTotalWins = 1;
    const expectedWins = [
        { payline: 3, symbol: "lv3", count: 3, payout: 1 }
    ];
    testReelPositions(positions, expectedScreen, expectedTotalWins, expectedWins);
});

test('Test case 3', () => {
    const positions = [5, 14, 9, 9, 16];
    const expectedScreen = [
        ["lv1", "hv1", "hv4"],
        ["hv1", "lv1", "lv2"],
        ["lv1", "hv3", "lv1"],
        ["hv1", "lv1", "hv1"],
        ["hv1", "lv2", "hv4"]
    ];
    const expectedTotalWins = 7;
    // const expectedTotalWins = 5; // TODO: Clarify
    const expectedWins = [
        { payline: 6, symbol: "lv1", count: 4, payout: 5 },
        { payline: 7, symbol: "lv1", count: 3, payout: 2 }
    ];
    testReelPositions(positions, expectedScreen, expectedTotalWins, expectedWins);
});

test('Test case 4', () => {
    const positions = [1, 16, 2, 15, 0];
    const expectedScreen = [
        ["lv3", "lv3", "hv1"],
        ["lv2", "lv4", "lv3"],
        ["lv3", "lv4", "hv3"],
        ["lv3", "hv2", "lv1"],
        ["lv3", "lv4", "hv2"]
    ];
    const expectedTotalWins = 0;
    const expectedWins = [];
    testReelPositions(positions, expectedScreen, expectedTotalWins, expectedWins);
});

test('Test case 5', () => {
    const positions = [18, 9, 2, 0, 12];
    const expectedScreen = [
        ["lv3", "hv2", "hv2"],
        ["hv4", "lv3", "hv2"],
        ["lv3", "lv4", "hv3"],
        ["hv2", "lv2", "hv3"],
        ["lv2", "hv4", "hv1"]
    ];
    const expectedTotalWins = 0;
    const expectedWins = [];
    testReelPositions(positions, expectedScreen, expectedTotalWins, expectedWins);
});