import { paylines, paytable, reelset } from './constants.js';

// Function to check for wins. It finds consecutive occurrences from the left
// However, if a symbol was already found but stopped being consecutive, the consecutive occurrence after is not considered
export function calculateWins(positions) {
    const wins = [];
    let totalWin = 0;

    for (let i = 0; i < paylines.length; i++) {
        const payline = paylines[i];
        let currentSymbol = null;
        let count = 0;
        let seenSymbols = new Set();
        let validPayline = true;

        for (let col = 0; col < payline.length; col++) {
            const row = payline[col];
            const symbol = reelset[col][(positions[col] + row) % reelset[col].length];

            if (currentSymbol === null) {
                if (seenSymbols.has(symbol)) {
                    validPayline = false;
                    break;
                }
                currentSymbol = symbol;
                count = 1;
            } else if (symbol === currentSymbol) {
                count++;
            } else {
                seenSymbols.add(currentSymbol);
                if (count >= 3) {
                    break;
                }
                if (seenSymbols.has(symbol)) {
                    validPayline = false;
                    break;
                }
                currentSymbol = symbol;
                count = 1;
            }
        }

        if (validPayline && count >= 3) {
            const payout = paytable[currentSymbol][count - 3];
            totalWin += payout;
            wins.push({ payline: i + 1, symbol: currentSymbol, count, payout });
        }
    }

    return { totalWin, wins };
}

// Function checks for payline starting at the left most column without any breaks
// export function calculateWins(positions) {
//     const wins = [];
//     let totalWin = 0;

//     for (let i = 0; i < paylines.length; i++) {
//         const payline = paylines[i];
//         let currentSymbol = null;
//         let count = 0;

//         for (let col = 0; col < payline.length; col++) {
//             const row = payline[col];
//             const symbol = reelset[col][(positions[col] + row) % reelset[col].length];

//             if (symbol === currentSymbol || currentSymbol === null) {
//                 currentSymbol = symbol;
//                 count++;
//             } else {
//                 break;
//             }
//         }

//         // Check at the end of the row for a valid win
//         if (currentSymbol && count >= 3) {
//             const payout = paytable[currentSymbol][count - 3];
//             totalWin += payout;
//             wins.push({ payline: i + 1, symbol: currentSymbol, count, payout });
//         }
//     }

//     return { totalWin, wins };
// }

// Function checks for payline starting at the left most column but allows breaking at the start as long as it find 3 or more in a row
// export function calculateWins(positions) {
//     const wins = [];
//     let totalWin = 0;

//     for (let i = 0; i < paylines.length; i++) {
//         const payline = paylines[i];
//         let currentSymbol = null;
//         let count = 0;

//         for (let col = 0; col < payline.length; col++) {
//             const row = payline[col];
//             const symbol = reelset[col][(positions[col] + row) % reelset[col].length];

//             if (symbol === currentSymbol) {
//                 count++;
//             } else {
//                 if (currentSymbol && count >= 3) {
//                     const payout = paytable[currentSymbol][count - 3];
//                     totalWin += payout;
//                     wins.push({ payline: i + 1, symbol: currentSymbol, count, payout });
//                 }
//                 currentSymbol = symbol;
//                 count = 1;
//             }
//         }

//         // Check at the end of the row for any remaining win
//         if (currentSymbol && count >= 3) {
//             const payout = paytable[currentSymbol][count - 3];
//             totalWin += payout;
//             wins.push({ payline: i + 1, symbol: currentSymbol, count, payout });
//         }
//     }

//     return { totalWin, wins };
// }