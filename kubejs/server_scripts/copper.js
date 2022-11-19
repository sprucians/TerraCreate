onEvent('recipes', event => {
    removeRecipeByID(event, [
        'id: create:copper_casing',
        'id: create:fluid_pipe',
        'id: create:fluid_tank',
        'id: create:spout',
        'id: create:hose_pulley'
    ])
    event.shapeless('4x create:copper_casing', 
        ['tfc:wattle/unstained', 'tfc:metal/sheet/copper'])
        
    event.recipes.createFilling('create:copper_casing', [
            'tfc:wattle/unstained',
            Fluid.of('tfc:metal/copper', 10)
        ])
        
    event.custom({
        type: 'tfc:anvil',
        ingredients: [
            Ingredient.of('tfc:metal/double_ingot/copper').toJson()
        ],
        results: [
            Item.of('8x create:fluid_pipe').toResultJson()
        ],
        tier: -1,
        rules: [
            "punch_last"
        ]
    })

    event.smithing('create:fluid_tank', 'create:copper_casing', '#forge:glass')
    event.smithing('create:spout', 'create:fluid_tank', 'tfc:metal/tuyere/copper')
    event.smithing('create: hose_pulley', 'create:rope_pulley', 'create:fluid_pipe')
})