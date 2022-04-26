import putInOrder from '../src/app.js';
test('does it work?', () => {
    let heroes = [{
            name: 'Лучник',
            health: 39,
        },
        {
            name: 'Маг',
            health: 5,
        },
        {
            name: 'Тролль',
            health: 17,
        },



    ];
    const order = putInOrder(heroes);
    expect(heroes).toEqual(order);
})