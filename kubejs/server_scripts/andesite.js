onEvent('recipes', event => {

    //Casing
    event.remove({id: 'create:andesite_casing'})
    event.shapeless('4x create:andesite_casing', 
        ['tfc:wattle', 'tfc:lumber', 'create:andesite_alloy'])

    //Andesite
    event.shaped('tfc:brick/andesite', ['   ', 'AAA', 'AAA'], {
        A: 'tfc:rock/loose/andesite'
    })

    //Andesite Alloy - add tfc:welding
    event.remove({id: 'create:andesite_alloy'})

    //Shaft
    event.custom({
        type: 'tfc:anvil',
        ingredients: [
            ingredient.of('create:andesite_alloy').toJson()
        ],
        results: [
            Item.of('6x create:shaft').toResultJson()
        ],
        tier: -1,
        rules: [
            "shrink_last"
        ]
    })

    //Smithing
    event.remove({id: 'minecraft:smithing_table'})
    event.shaped('minecraft:smithing_table', ['BBH', 'LAL', 'LLL'], {
        B: ['tfc:metal/ingot/bismuth_bronze', 'tfc:metal/ingot/black_bronze', 'tfc:metal/ingot/bronze'],
        A: ['tfc:metal/anvil/bismuth_bronze', 'tfc:metal/anvil/black_bronze', 'tfc:metal/anvil/bronze'],
        L: 'tfc:lumber'
    })

    //Cogwheel
    event.remove({id: 'create:cogwheel'})
    event.shaped('8x create:cogwheel', [' L ', 'LSL', ' L '], {
        L: 'tfc:lumber',
        S: 'create:shaft'
    })
    event.remove({id: 'create:large_cogwheel'})
    event.shaped('4x create:large_cogwheel', ['LSL', 'LSL', 'LSL'], {
        L: 'tfc:lumber',
        S: 'create:shaft'
    })

    //Millstone
    event.remove({id: 'create:millstone'})
    event.shaped('create:millstone', ['LHL', 'CCC', 'AQA'], {
        L: 'tfc:lumber',
        C: 'create:cogwheel',
        A: 'create:andesite_alloy',
        Q: 'tfc:quern'
    })

    //Quern 레시피 전부 millstone으로 베껴오기!

    //Bronze Hand(brass)

    //Saw
    event.remove({id: 'create:mechanical_saw'})
    event.smithing('create:mechanical_saw', 'create:andesite_casing', ['tfc:metal/saw_blade/bismuth_bronze', 'tfc:metal/saw_blade/black_bronze', 'tfc:metal/saw_blade/bronze'])

    //Drill
    event.remove({id: 'immersiveengineering:drillhead_iron'})
    event.shaped('immersiveengineering:drillhead_iron', [' S ', 'WSW', 'ASA'], {
        S: 'create:shaft',
        W: 'tfc:metal/sheet/wrought_iron',
        A: 'create:andesite_alloy'
    })
    event.remove({id: 'create:mechanical_drill'})
    event.smithing('create:mechanical_drill', 'create:andesite_casing', 'immersiveengineering:drillhead_iron')

    //Plough
    event.remove({id: 'create:mechanical_plough'})
    event.smithing('create:mechanical_plough', 'create:andesite_casing', ['tfc:metal/sheet/bismuth_bronze', 'tfc:metal/sheet/black_bronze', 'tfc:metal/sheet/bronze'])

    //Deployer
    event.remove({id: 'create:brass_hand'})
    event.custom({
        type: 'tfc:anvil',
        ingredients: [
            ingredient.of('tfc:metal/double_sheet/brass').toJson()
        ],
        results: [
            Item.of('create:brass_hand').toResultJson()
        ],
        tier: -1,
        rules: [
            "punch_last"
        ]
    })
    event.remove({id: 'create:deployer'})
    event.smithing('create:deployer', 'create:andesite_casing', 'create:brass_hand')

    //Rope Pulley
    event.remove({id: 'create:rope_pulley'})
    event.smithing('create:rope_pulley', 'create:andesite_casing', 'minecraft:lead')

    //Mixer
    event.remove({id: 'create:mechanical_mixer'})
    event.smithing('create:mechanical_mixer', 'create:andesite_casing', 'create:whisk')

    //Mechanical Harvester
    event.remove({id: 'create:mechanical_harvester'})
    event.smithing('create:mechanical_harvester', 'create:andesite_casing', ['tfc:metal/hoe_head/bismuth_bronze', 'tfc:metal/hoe_head/black_bronze', 'tfc:metal/hoe_head/black_steel', 'tfc:metal/hoe_head/blue_steel', 'tfc:metal/hoe_head/bronze', 'tfc:metal/hoe_head/copper', 'tfc:metal/hoe_head/red_steel', 'tfc:metal/hoe_head/steel', 'tfc:metal/hoe_head/wrought_iron'])

    //Encased Fan - expmine:double_sheets -> tfc:double_sheets 가 될까요
    event.remove({id: 'create:propeller'})
    event.custom({
        type: 'tfc:anvil',
        ingredients: [
            ingredient.of('#tfc:double_sheets').toJson()
        ],
        results: [
            Item.of('create:propeller').toResultJson()
        ],
        tier: -1,
        rules: [
            "punch_last"
        ]
    })
    event.remove({id: 'create:encased_fan'})
    event.smithing('create;encased_fan', 'create:andesite_casing', 'create:propeller')
})  