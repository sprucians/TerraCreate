let metals = ['bismuth', 'bismuth_bronze', 'black_bronze', 'black_steel', 'blue_steel', 'brass', 'bronze', 'cast_iron', 'copper', 'gold', 'nickel', 'red_steel', 'rose_gold', 'silver', 'steel', 
'sterling_silver', 'tin', 'wrought_iron', 'zinc']

onEvent('tags.items', e => {
    metals.forEach(metal => {
        e.add('kubejs:double_sheets', 'tfc:metal/double_sheet/' + metal)
    })
})



let removes = ['create:andesite_casing', 
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
        'create:propeller', 'create:encased_fan',
        'create:cogwheel', 'create:large_cogwheel',
        'create:mechanical_press', 'create:depot', 'create:weighted_ejector',
        'create:portable_storage_interface']

onEvent('recipes', e => {
    removes.forEach(output => {
        e.remove({output: output})
    })

    removes.forEach(id => {
        e.remove({id: id})
    })
})



let bronze = ['tfc:metal/ingot/bismuth_bronze', 'tfc:metal/ingot/black_bronze', 'tfc:metal/ingot/bronze']
let sheet = ['tfc:metal/sheet/bismuth_bronze', 'tfc:metal/sheet/black_bronze', 'tfc:metal/sheet/bronze']
let saw = ['tfc:metal/saw_blade/bismuth_bronze', 'tfc:metal/saw_blade/black_bronze', 'tfc:metal/saw_blade/bronze']
let hoe = ['tfc:metal/hoe_head/bismuth_bronze', 'tfc:metal/hoe_head/black_bronze', 'tfc:metal/hoe_head/black_steel', 
        'tfc:metal/hoe_head/blue_steel', 'tfc:metal/hoe_head/bronze', 'tfc:metal/hoe_head/copper', 
        'tfc:metal/hoe_head/red_steel', 'tfc:metal/hoe_head/steel', 'tfc:metal/hoe_head/wrought_iron']

onEvent('recipes', e => {
        let tfc_anvil = (input, output, count, tier, rule, id) => {
            e.custom({
                'type': 'tfc:anvil',
                'input': {'item': input},
                'result': {'item': output, 'count': count},
                'tier': tier,
                'rules': [rule + '_last']
            }).id('kubejs:anvil_working/' + id)
        }
        let tfc_welding = (input_1, input_2, tier, output, count, id) => {
            e.custom({
                'type': 'tfc:welding',
                'first_input': {'item': input_1},
                'second_input': {'item': input_2},
                'tier': tier,
                'result': {'item': output, 'count': count}
            }).id('kubejs:anvil_welding/' + id)
        }
    


    
    e.shaped('tfc:brick/andesite', ['AAA', 'AAA'], {
        A: 'tfc:rock/loose/andesite'
    })
    e.shaped('minecraft:smithing_table', ['BBH', 'LAL', 'LLL'], {
        B: ['tfc:metal/ingot/bismuth_bronze', 'tfc:metal/ingot/black_bronze', 'tfc:metal/ingot/bronze'],
        H: ['tfc:metal/hammer/bismuth_bronze', 'tfc:metal/hammer/black_bronze', 'tfc:metal/hammer/bronze'],
        L: '#tfc:lumber',
        A: ['tfc:metal/anvil/bismuth_bronze', 'tfc:metal/anvil/black_bronze', 'tfc:metal/anvil/bronze'],
    })
    e.shaped('create:millstone', ['LHL', 'CCC', 'AQA'], {
        L: '#tfc:lumber',
        H: 'tfc:handstone',
        C: 'create:cogwheel',
        A: 'create:andesite_alloy',
        Q: 'tfc:quern'
    })
    e.shaped('immersiveengineering:drillhead_iron', [' S ', 'WSW', 'ASA'], {
        S: 'create:shaft',
        W: 'tfc:metal/sheet/wrought_iron',
        A: 'create:andesite_alloy'
    })
    e.shaped('create:cogwheel', [' L ', 'LSL', ' L '], {
        L: '#tfc:lumber',
        S: 'create:shaft'
    })
    e.shaped('create:large_cogwheel', ['LLL', 'LSL', 'LLL'], {
        L: '#tfc:lumber',
        S: 'create:shaft'
    })

    e.shapeless('4x create:andesite_casing', ['tfc:wattle', '#tfc:lumber', 'create:andesite_alloy'])

    saw.forEach(i => {
        e.smithing('create:mechanical_saw', 'create:andesite_casing', i)
    })
    sheet.forEach(i => {
        e.smithing('create:mechanical_plough', 'create:andesite_casing', i)
    })
    e.smithing('create:mechanical_drill', 'create:andesite_casing', 'immersiveengineering:drillhead_iron')
    e.smithing('create:deployer', 'create:andesite_casing', 'create:brass_hand')
    e.smithing('create:rope_pulley', 'create:andesite_casing', 'minecraft:lead')
    e.smithing('create:mechanical_mixer', 'create:andesite_casing', 'create:whisk')
    hoe.forEach(i => {
        e.smithing('create:mechanical_harvester', 'create:andesite_casing', i)
    })
    e.smithing('create:encased_fan', 'create:andesite_casing', 'create:propeller')
    e.smithing('create:mechanical_press', 'create:andesite_casing', '#kubejs:double_sheets')
    e.smithing('create:depot', 'create:andesite_casing', 'create:andesite_alloy')
    e.smithing('create:weighted_ejector', 'create:depot', 'create:cogwheel')
    e.smithing('create:portable_storage_interface', 'create:andesite_casing', 'create:chute')

    bronze.forEach(i => {
        tfc_welding('tfc:brick/andesite', i, 0, 'create:andesite_alloy', 16, 'andesite_alloy')
    })
    
    tfc_anvil('create:andesite_alloy', 'create:shaft', 6, -1, 'shrink', 'shaft')
    tfc_anvil('tfc:metal/double_sheet/brass', 'create:brass_hand', 1,  -1, 'punch', 'brass_hand')
    tfc_anvil('tfc:metal/double_sheet/bronze', 'create:propeller', 1, -1, 'punch', 'propeller')
})
