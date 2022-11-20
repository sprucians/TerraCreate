onEvent('tags.items', e => {
})



let ids = ['create:copper_casing', 'create:fluid_pipe', 'create:fluid_tank',
        'create:spout', 'create:hose_pulley']

onEvent('recipes', e => {
    ids.forEach(id => {
        e.remove({id: id})
    })
})




onEvent('recipes', e => {
    let tfc_anvil = (input, output, count, tier, rule_1) => {
        e.custom({
            'type': 'tfc:anvil',
            'input': {'item': input},
            'result': {'item': output, 'count': count},
            'tier': tier,
            'rules': [rule_1 + '_last']
        })
    }




    e.shapeless('4x create:copper_casing', 'tfc:wattle/unstained', 'tfc:metal/sheet/copper')

    e.smithing('create:fluid_tank', 'create:copper_casing', '#forge:glass')
    e.smithing('create:spout', 'create:fluid_tank', 'tfc:metal/tuyere/copper')
    e.smithing('create:hose_pulley', 'create:rope_pulley', 'create:fluid_pipe')

    tfc_anvil('tfc:metal/double_ingot/copper', 'create:fluid_pipe', 8, -1, 'punch')

    e.recipes.createFilling('create:copper_casing', ['create:fluid_pipe', Fluid.of('tfc:metal/copper', 10)])
})
