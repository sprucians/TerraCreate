onEvent('recipe', e => {
    e.remove({mod: sophisticatedbackpack})

    e.shaped('minecraft:cobblestone', ['SLS', 'SCS', 'LLL'], {
        S: 'minecraft:string',
        L: 'minecraft:leather',
        C: '#minecraft:chest'
    })
})