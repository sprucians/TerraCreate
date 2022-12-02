onEvent('tags.items', e => {
    e.add('forge:plates/iron', 'tfc:metal/sheet/wrought_iron');
    e.remove('forge:plates/iron', 'create:iron_sheet');
    e.remove('forge:plates/iron', 'immersiveengineering:plate_iron');
    /*e.add('forge:plates/gold', 'tfc:metal/sheet/gold');
    e.remove('forge:plates/gold', 'create:gold_sheet');
    e.remove('forge:plates/gold', 'immersiveengineering:plate_gold');
    e.add('forge:plates/brass', 'tfc:metal/sheet/brass');
    e.remove('forge:plates/brass', 'create:brass_sheet');
    e.remove('forge:plates/brass', 'immersiveengineering:plate_brass');
    e.add('forge:plates/copper', 'tfc:metal/sheet/copper');
    /*e.remove('forge:plates/copper', 'create:copper_sheet');
    e.remove('forge:plates/copper', 'immersiveengineering:plate_copper');*/
/*
    e.add('forge:ingots/silver', 'tfc:metal/ingot/silver');
    e.remove('forge:ingots/silver', 'create:silver_ingot');
    e.remove('forge:ingots/silver', 'immersiveengineering:ingot_silver');
    e.add('forge:ingots/bronze', 'tfc:metal/ingot/bronze');
    e.remove('forge:ingots/bronze', 'create:bronze_ingot');
    e.remove('forge:ingots/bronze', 'immersiveengineering:ingot_bronze');
    e.add('forge:ingots/bronze', 'tfc:metal/ingot/bronze');
    e.remove('forge:ingots/bronze', 'create:bronze_ingot');
    e.remove('forge:ingots/bronze', 'immersiveengineering:ingot_bronze');
    e.add('forge:ingots/brass', 'tfc:metal/ingot/brass');
    e.remove('forge:ingots/brass', 'create:brass_ingot');
    e.remove('forge:ingots/brass', 'immersiveengineering:ingot_brass');
    e.add('forge:ingots/iron', 'tfc:metal/ingot/wrought_iron');
    e.remove('forge:ingots/iron', 'create:iron_ingot');
    e.remove('forge:ingots/iron', 'immersiveengineering:ingot_iron');
    e.add('forge:ingots/zinc', 'tfc:metal/ingot/zinc');
    e.remove('forge:ingots/zinc', 'create:zinc_ingot');
    e.remove('forge:ingots/zinc', 'immersiveengineering:ingot_zinc');
    e.add('forge:ingots/tin', 'tfc:metal/ingot/tin');
    e.remove('forge:ingots/tin', 'create:tin_ingot');
    e.remove('forge:ingots/tin', 'immersiveengineering:ingot_tin');
    e.add('forge:ingots/steel', 'tfc:metal/ingot/steel');
    e.remove('forge:ingots/steel', 'create:steel_ingot');
    e.remove('forge:ingots/steel', 'immersiveengineering:ingot_steel');
    e.add('forge:ingots/gold', 'tfc:metal/ingot/gold');
    e.remove('forge:ingots/gold', 'create:gold_ingot');
    e.remove('forge:ingots/gold', 'immersiveengineering:ingot_gold');
    e.add('forge:ingots/rose_gold', 'tfc:metal/ingot/rose_gold');
    e.remove('forge:ingots/rose_gold', 'create:rose_gold_ingot');
    e.remove('forge:ingots/rose_gold', 'immersiveengineering:ingot_rose_gold');
    e.add('forge:ingots/sterling_silver', 'tfc:metal/ingot/sterling_silver');
    e.remove('forge:ingots/sterling_silver', 'create:sterling_silver_ingot');
    e.remove('forge:ingots/sterling_silver', 'immersiveengineering:ingot_sterling_silver');
    e.add('forge:ingots/nickel', 'tfc:metal/ingot/nickel');
    e.remove('forge:ingots/nickel', 'create:nickel_ingot');
    e.remove('forge:ingots/nickel', 'immersiveengineering:ingot_nickel');
    e.add('forge:ingots/bismuth', 'tfc:metal/ingot/bismuth');
    e.remove('forge:ingots/bismuth', 'create:bismuth_ingot');
    e.remove('forge:ingots/bismuth', 'immersiveengineering:ingot_bismuth');*/
})

onEvent('recipes', e => {
    e.replaceInput({}, 'create:brass_ingot', 'tfc:metal/ingot/brass')


    e.replaceOutput({}, 'create:brass_ingot', 'tfc:metal/ingot/brass')
    e.replaceOutput({}, 'create:silver_ingot', 'tfc:metal/ingot/silver')
    e.replaceOutput({}, 'immersiveengineering:ingot_silver', 'tfc:metal/ingot/silver')
    

})
