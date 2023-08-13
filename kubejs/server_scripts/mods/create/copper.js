//2티어: copper + wrought iron?

onEvent('tags.items', e => {
})



let copper_removes = ['create:copper_casing', 'create:fluid_pipe', 'create:fluid_tank',
    'create:spout', 'create:hose_pulley', 'create:item_drain',
    'create:portable_fluid_interface']

onEvent('recipes', e => {
    copper_removes.forEach(remove => {
        e.remove({ id: remove })
    })
})



onEvent('recipes', e => {
    let tfc_anvil = (input, output, count, tier, rule, id) => {
        e.custom({
            'type': 'tfc:anvil',
            'input': { 'item': input },
            'result': { 'item': output, 'count': count },
            'tier': tier,
            'rules': [rule + '_last']
        }).id('kubejs:anvil/working/' + id)
    }

    e.shapeless('create:copper_casing', ['tfc:wattle/yellow', '4x tfc:metal/ingot/copper'])
    e.custom({
        "type": "create:item_application",
        "ingredients": [
            {
                "item" : "tfc:wattle/yellow"
            },
            {
                "item" : "tfc:metal/sheet/copper"
            }
        ],
        "results": [
            {
                "item": "create:copper_casing"
            }
        ]
    })
    e.recipes.createFilling('create:copper_casing', ['tfc:wattle/yellow', Fluid.of('tfc:metal/copper', 50)])

    e.smithing('create:fluid_tank', 'create:copper_casing', '#forge:glass')
    e.smithing('create:spout', 'create:fluid_tank', 'tfc:metal/tuyere/copper')
    e.smithing('create:hose_pulley', 'create:rope_pulley', 'create:fluid_pipe')
    e.smithing('create:item_drain', 'create:copper_casing', 'minecraft:iron_bars')
    e.smithing('create:portable_fluid_interface', 'create:copper_casing', 'create:chute')

    tfc_anvil('tfc:metal/double_ingot/copper', 'create:fluid_pipe', 8, -1, 'punch', 'fluid_pipe')
})
