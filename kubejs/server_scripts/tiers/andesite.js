let metals = ['bismuth', 'bismuth_bronze', 'black_bronze', 'black_steel', 'blue_steel', 'brass', 'bronze', 'cast_iron', 'copper', 'gold', 'nickel', 'red_steel', 'rose_gold', 'silver', 'steel', 
'sterling_silver', 'tin', 'wrought_iron', 'zinc']

onEvent('tags.items', e => {

    metals.forEach(metal => {
        e.add('terracreate:double_sheets', 'tfc:metal/double_sheet/' + metal)
    })
})



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



let bronze = ['tfc:metal/ingot/bismuth_bronze', 'tfc:metal/ingot/black_bronze', 'tfc:metal/ingot/bronze']
let sheet = ['tfc:metal/sheet/bismuth_bronze', 'tfc:metal/sheet/black_bronze', 'tfc:metal/sheet/bronze']
let saw = ['tfc:metal/saw_blade/bismuth_bronze', 'tfc:metal/saw_blade/black_bronze', 'tfc:metal/saw_blade/bronze']
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
    let tfc_welding_item = (input_1, input_2, tier, output, count) => {
		e.custom({
			'type': 'tfc:welding',
			'first_input': { 'item': input_1 },
			'second_input': { 'item': input_2 },
			'tier': tier,
			'result': { 'item': output, 'count': count }
		})
	}


    
    e.shaped('tfc:brick/andesite', ['AAA', 'AAA'], {
        A: 'tfc:rock/loose/andesite'
    })
    e.shaped('minecraft:smithing_table', ['BBH', 'LAL', 'LLL'], {
        B: bronze,
        H: ['tfc:metal/hammer/bismuth_bronze', 'tfc:metal/hammer/black_bronze', 'tfc:metal/hammer/bronze'],
        L: '#tfc:lumber',
        A: ['tfc:metal/anvil/bismuth_bronze', 'tfc:metal/hammer/black_bronze', 'tfc:metal/hammer/bronze'],
    })
    e.shaped('minecraft:millstone', ['LHL', 'CCC', 'AQA'], {
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

    e.shapeless('4x create:andesite_casing', ['tfc:wattle', '#tfc:lumber', 'create:andesite_alloy'])

    e.smithing('create:mechanical_saw', 'create:andesite_casing', saw)
    e.smithing('create:mechanical_drill', 'create:andesite_casing', 'immersiveengineering:drillhead_iron')
    e.smithing('create:mechanical_plough', 'create:andesite_casing', sheet)
    e.smithing('create:deployer', 'create:andesite_casing', 'create:brass_hand')
    e.smithing('create:rope_pulley', 'create:andesite_casing', 'minecraft:lead')
    e.smithing('create:mechanical_mixer', 'create:andesite_casing', 'create:whisk')
    e.smithing('create:mechanical_harvester', 'create:andesite_casing', )
    e.smithing('encased_fan', 'create:andesite_casing', 'create:propeller')

    tfc_welding_item('tfc:brick/andesite', bronze, 0, 'create:andesite_alloy', 16)

    tfc_anvil('create:andesite_alloy', 'create:shaft', 6, -1, 'shrink')
    tfc_anvil('tfc:metal/double_sheet/brass', 'create:brass_hand', 1,  -1, 'punch')
    tfc_anvil('#terracreate:double_sheets', 'create:propeller', 1, -1, 'punch')
})