onEvent('recipe', e => {
    e.remove({id: 'sophisticatedbackpacks:backpack'})
    e.remove({id: 'sophisticatedbackpacks:upgrade_base'})
    e.remove({output:'sophisticatedbackpacks:backpack'})
    e.remove({output:'sophisticatedbackpacks:upgrade_base'})
    
    e.shaped('sophisticatedbackpacks:backpack', ['SLS', 'SCS', 'LLL'], {
        S: 'tfc:wool_yarn',
        L: 'minecraft:leather',
        C: '#minecraft:chest'
    })
})