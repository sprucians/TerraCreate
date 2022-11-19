let outputs = []
let ids = ['create:andesite_casing', 
        'tfc:andesite_brick', 'create:andesite_alloy', 
        'create:shaft', 
        'minecraft:smithing_table', 
        'create:millstone',
        'create:mechanical_saw', 
        'immersiveengineering:drillhead_iron', 'create:mechanical_drill',
        'create:mechanical_plough', 
        'create:brass_hand', 'create:deployer',
        'create:rope_pulley', 
        'create:mechanical_mixer', 
        'create:mechanical_harvester',
        'create:propeller', 'create:encased_fan']

onEvent('recipes', e => {
    outputs.forEach(output => {
        e.remove({output: output})
    })

    ids.forEach(id => {
        e.remove({id: id})
    })
})