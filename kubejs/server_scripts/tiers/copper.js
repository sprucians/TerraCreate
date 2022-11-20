onEvent('tags.items', e => {
})



let outputs = ['create:copper_casing', 'create:fluid_pipe', 'create:fluid_tank',
        'create:spout', 'create:hose_pulley']

onEvent('recipes', e => {
    outputs.forEach(output => {
        e.remove({output: output})
    })
})




onEvent('recipes', e => {
    let tfc_anvil = (input, output, count, tier, rule, id) => {
        e.custom({
            'type': 'tfc:anvil',
            'input': {'item': input},
            'result': {'item': output, 'count': count},
            'tier': tier,
            'rules': [rule + '_last']
        }).id('kubejs:anvil/working/' + id)
    }




    e.shapeless('4x create:copper_casing', ['tfc:wattle/unstained', 'tfc:metal/sheet/copper'])

    e.smithing('create:fluid_tank', 'create:copper_casing', '#forge:glass')
    e.smithing('create:spout', 'create:fluid_tank', 'tfc:metal/tuyere/copper')
    e.smithing('create:hose_pulley', 'create:rope_pulley', 'create:fluid_pipe')

    tfc_anvil('tfc:metal/double_ingot/copper', 'create:fluid_pipe', 8, -1, 'punch', 'fluid_pipe')

    e.recipes.createFilling('create:copper_casing', ['create:fluid_pipe', Fluid.of('tfc:metal/copper', 10)])
})
