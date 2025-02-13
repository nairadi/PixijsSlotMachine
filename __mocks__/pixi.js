// export const Application = jest.fn(() => ({
//     stage: {
//         addChild: jest.fn(),
//         removeChild: jest.fn()
//     }
// }));

// export const Container = jest.fn(() => ({
//     addChild: jest.fn(),
//     removeChildren: jest.fn(),
//     scale: { set: jest.fn() },
//     position: { set: jest.fn() }
// }));

// export const Sprite = {
//     from: jest.fn(() => ({
//         anchor: { set: jest.fn() },
//         interactive: false,
//         buttonMode: false,
//         on: jest.fn(),
//         scale: { set: jest.fn() },
//         position: { set: jest.fn() }
//     }))
// };

export const Application = jest.fn(() => ({
    stage: {
        addChild: jest.fn(),
        removeChild: jest.fn()
    }
}));

export const Container = jest.fn(() => ({
    addChild: jest.fn(),
    removeChildren: jest.fn(),
    scale: { set: jest.fn() },
    position: { set: jest.fn() }
}));

export const Sprite = {
    from: jest.fn(() => ({
        anchor: { set: jest.fn() },
        interactive: false,
        buttonMode: false,
        on: jest.fn(),
        scale: { set: jest.fn() },
        position: { set: jest.fn() }
    }))
};