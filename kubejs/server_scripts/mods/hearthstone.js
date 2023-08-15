onEvent('recipes', event => {
    //dust

    //aquamarine

    //leather dying
    event.remove({output : 'hearthstones:tattered_leather'})
    event.remove({output : 'hearthstones:red_leather'})
    event.remove({output : 'hearthstones:blue_leather'})

    //tarven
    event.remove({output : 'hearthstones:shabby_tavern'})
    event.remove({output : 'hearthstones:tavern'})

    event.shaped('hearthstones:shabby_tavern', [
        'SAS',
        'S S',
        'SAS'
      ], {
        S: 'minecraft:sponge',
        A: 'minecraft:apple'
      })

    //charging
})