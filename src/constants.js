export const SYMBOL_SIZE = 256; // Size of each image
export const SPIN_BUTTON_SIZE = 256; // Size of the spin button
export const NUM_REELS = 5; // Number of reels
export const NUM_ROWS = 3; // Number of rows
export const PADDING = 10; // Padding between reel images
export const SPIN_BUTTON_PADDING = 50; // Padding below the spin button
export const MAX_WIN_TEXT_LINES = 8; // Maximum number of lines for win text

// The reel bands for the order of the images
export const reelset = [
    ["hv2", "lv3", "lv3", "hv1", "hv1", "lv1", "hv1", "hv4", "lv1", "hv3", "hv2", "hv3", "lv4", "hv4", "lv1", "hv2", "lv4", "lv1", "lv3", "hv2"],
    ["hv1", "lv2", "lv3", "lv2", "lv1", "lv1", "lv4", "lv1", "lv1", "hv4", "lv3", "hv2", "lv1", "lv3", "hv1", "lv1", "lv2", "lv4", "lv3", "lv2"],
    ["lv1", "hv2", "lv3", "lv4", "hv3", "hv2", "lv2", "hv2", "hv2", "lv1", "hv3", "lv1", "hv1", "lv2", "hv3", "hv2", "hv4", "hv1", "lv2", "lv4"],
    ["hv2", "lv2", "hv3", "lv2", "lv4", "lv4", "hv3", "lv2", "lv4", "hv1", "lv1", "hv1", "lv2", "hv3", "lv2", "lv3", "hv2", "lv1", "hv3", "lv2"],
    ["lv3", "lv4", "hv2", "hv3", "hv4", "hv1", "hv3", "hv2", "hv2", "hv4", "hv4", "hv2", "lv2", "hv4", "hv1", "lv2", "hv1", "lv2", "hv4", "lv4"]
];

// Pay tables for 3/4/5 of a kind based on symbol
export const paytable = {
    hv1: [10, 20, 50],
    hv2: [5, 10, 20],
    hv3: [5, 10, 15],
    hv4: [5, 10, 15],
    lv1: [2, 5, 10],
    lv2: [1, 2, 5],
    lv3: [1, 2, 3],
    lv4: [1, 2, 3]
};

// Pay lines to check for the matching symbols mapped for the 3 rows
export const paylines = [
    [1, 1, 1, 1, 1], // 1
    [0, 0, 0, 0, 0], // 2
    [2, 2, 2, 2, 2], // 3
    [0, 0, 1, 2, 2], // 4
    [2, 2, 1, 0, 0], // 5
    [0, 1, 2, 1, 0], // 6
    [2, 1, 0, 1, 2]  // 7
];