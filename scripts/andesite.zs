#priority 15

import crafttweaker.api.ingredient.IIngredient;
import crafttweaker.api.item.IItemStack;

//1티어 : andesite + bronze

var bronze = (<item:tfc:metal/ingot/bismuth_bronze>|<item:tfc:metal/ingot/black_bronze>|<item:tfc:metal/ingot/bronze>);
var sheet = (<item:tfc:metal/sheet/bismuth_bronze>|<item:tfc:metal/sheet/black_bronze>|<item:tfc:metal/sheet/bronze>);
var saw = (<item:tfc:metal/saw_blade/bismuth_bronze>|<item:tfc:metal/saw_blade/black_bronze>|<item:tfc:metal/saw_blade/bronze>);

//Casing
craftingTable.remove(<item:create:andesite_casing>);
craftingTable.addShapeless("expmine/andesite_casing", <item:create:andesite_casing>*4 , [<item:tfc:wattle>, <tag:items:tfc:lumber>, <item:create:andesite_alloy>]);

//Andesite
<recipetype:minecraft:crafting>.addShaped("expmine/andesite_brick", <item:tfc:brick/andesite>, [
    [<item:tfc:rock/loose/andesite>, <item:tfc:rock/loose/andesite>, <item:tfc:rock/loose/andesite>],
    [<item:tfc:rock/loose/andesite>, <item:tfc:rock/loose/andesite>, <item:tfc:rock/loose/andesite>],
]);

//Andesite alloy
<recipetype:minecraft:crafting>.remove(<item:create:andesite_alloy>);
<recipetype:create:mixing>.remove(<item:create:andesite_alloy>);
<recipetype:tfc:welding>.addJsonRecipe("expmine/anvil_andesite_alloy", {
    "first_input": <item:tfc:brick/andesite>,
    "second_input": bronze,
    "tier": 0,
    "result": {
        "item" : "create:andesite_alloy",
        "count" : 16
    }
});

//shaft
<recipetype:tfc:anvil>.addJsonRecipe("expmine/anvil/shaft",{
	"input": <item:create:andesite_alloy>,
    "result": {
        "item": "create:shaft",
        "count" : 6
    },
    "tier": -1,
    "rules": [
        "shrink_last"
    ]
});

//Smithing
craftingTable.remove(<item:minecraft:smithing_table>);
craftingTable.addShaped("expmine/smithing_table", <item:minecraft:smithing_table>, [
    [bronze,bronze,(<item:tfc:metal/hammer/bismuth_bronze>|<item:tfc:metal/hammer/black_bronze>|<item:tfc:metal/hammer/bronze>)],
    [<tag:items:tfc:lumber>,(<item:tfc:metal/anvil/bismuth_bronze>|<item:tfc:metal/anvil/black_bronze>|<item:tfc:metal/anvil/bronze>),<tag:items:tfc:lumber>],
    [<tag:items:tfc:lumber>,<tag:items:tfc:lumber>,<tag:items:tfc:lumber>]
]);

/*
<recipetype:minecraft:crafting>.remove(<item:create:cogwheel>);
<recipetype:minecraft:crafting>.addShaped("expmine/cog", <item:create:cogwheel>*8, [
    [<item:minecraft:air>,<tag:items:tfc:lumber>,<item:minecraft:air>],
    [<tag:items:tfc:lumber>,<item:create:shaft>,<tag:items:tfc:lumber>],
    [<item:minecraft:air>,<tag:items:tfc:lumber>,<item:minecraft:air>]
]);

<recipetype:minecraft:crafting>.remove(<item:create:large_cogwheel>);
<recipetype:minecraft:crafting>.addShaped("expmine/large_cog", <item:create:large_cogwheel>*4, [
    [<tag:items:tfc:lumber>,<item:create:shaft>,<tag:items:tfc:lumber>],
    [<tag:items:tfc:lumber>,<item:create:shaft>,<tag:items:tfc:lumber>],
    [<tag:items:tfc:lumber>,<item:create:shaft>,<tag:items:tfc:lumber>]
]);
*/

//millstone
<recipetype:minecraft:crafting>.remove(<item:create:millstone>);
<recipetype:minecraft:crafting>.addShaped("expmine/millstone", <item:create:millstone>, [
    [<tag:items:tfc:lumber>, <item:tfc:handstone>, <tag:items:tfc:lumber>],
    [<item:create:cogwheel>,<item:create:cogwheel>,<item:create:cogwheel>],
    [<item:create:andesite_alloy>,<item:tfc:quern>,<item:create:andesite_alloy>]
]);

//Quern 레시피 전부 millstone 으로 베껴오기!

//Bronze Hand(brass)

//Saw
<recipetype:minecraft:crafting>.remove(<item:create:mechanical_saw>);
<recipetype:minecraft:smithing>.addRecipe("expmine/smithing/mechanical_saw", <item:create:mechanical_saw>, <item:create:andesite_casing>, saw);

//Drill
<recipetype:minecraft:crafting>.remove(<item:immersiveengineering:drillhead_iron>);
<recipetype:minecraft:crafting>.addShaped("expmine/drillhead_iron", <item:immersiveengineering:drillhead_iron>, [
    [<item:minecraft:air>,<item:create:shaft>,<item:minecraft:air>],
    [<item:tfc:metal/sheet/wrought_iron>,<item:create:shaft>,<item:tfc:metal/sheet/wrought_iron>],
    [<item:create:andesite_alloy>,<item:create:shaft>,<item:create:andesite_alloy>]
]);
<recipetype:minecraft:crafting>.remove(<item:create:mechanical_drill>);
<recipetype:minecraft:smithing>.addRecipe("expmine/smithing/mechanical_drill", <item:create:mechanical_drill>, <item:create:andesite_casing>, <item:immersiveengineering:drillhead_iron>);

//Plough
<recipetype:minecraft:crafting>.remove(<item:create:mechanical_plough>);
<recipetype:minecraft:smithing>.addRecipe("expmine/smithing/mechanical_plough", <item:create:mechanical_plough>, <item:create:andesite_casing>, sheet);

//Deployer
<recipetype:minecraft:crafting>.remove(<item:create:brass_hand>);
<recipetype:tfc:anvil>.addJsonRecipe("expmine/anvil/brass_hand",{
	"input": <item:tfc:metal/double_sheet/brass>,
    "result": <item:create:brass_hand>,
    "tier": -1,
    "rules": [
        "punch_last"
    ]
});
<recipetype:minecraft:crafting>.remove(<item:create:deployer>);
<recipetype:minecraft:smithing>.addRecipe("expmine/smithing/deployer", <item:create:deployer>, <item:create:andesite_casing>, <item:create:brass_hand>);

//Rope Pully
<recipetype:minecraft:crafting>.remove(<item:create:rope_pulley>);
<recipetype:minecraft:smithing>.addRecipe("expmine/smithing/rope_pulley", <item:create:rope_pulley>, <item:create:andesite_casing>, <item:minecraft:lead>);

//Mixer
<recipetype:minecraft:crafting>.remove(<item:create:mechanical_mixer>);
<recipetype:minecraft:smithing>.addRecipe("expmine/smithing/mechanical_mixer", <item:create:mechanical_mixer>, <item:create:andesite_casing>, <item:create:whisk>);

//Mechanical harvester
<recipetype:minecraft:crafting>.remove(<item:create:mechanical_harvester>);
<recipetype:minecraft:smithing>.addRecipe("expmine/smithing/mechanical_harvester", <item:create:mechanical_harvester>, <item:create:andesite_casing>, (<item:tfc:metal/hoe_head/bismuth_bronze>|<item:tfc:metal/hoe_head/black_bronze>|<item:tfc:metal/hoe_head/black_steel>|<item:tfc:metal/hoe_head/blue_steel>|<item:tfc:metal/hoe_head/bronze>|<item:tfc:metal/hoe_head/copper>|<item:tfc:metal/hoe_head/red_steel>|<item:tfc:metal/hoe_head/steel>|<item:tfc:metal/hoe_head/wrought_iron>));

//Encased Fan
<tag:items:expmine:double_sheets>.add([<item:tfc:metal/double_sheet/bismuth>,<item:tfc:metal/double_sheet/bismuth_bronze>,<item:tfc:metal/double_sheet/black_bronze>,<item:tfc:metal/double_sheet/black_steel>,<item:tfc:metal/double_sheet/blue_steel>,<item:tfc:metal/double_sheet/brass>,<item:tfc:metal/double_sheet/bronze>,<item:tfc:metal/double_sheet/cast_iron>,<item:tfc:metal/double_sheet/copper>,<item:tfc:metal/double_sheet/gold>,<item:tfc:metal/double_sheet/nickel>,<item:tfc:metal/double_sheet/red_steel>,<item:tfc:metal/double_sheet/rose_gold>,<item:tfc:metal/double_sheet/silver>,<item:tfc:metal/double_sheet/steel>,<item:tfc:metal/double_sheet/sterling_silver>,<item:tfc:metal/double_sheet/tin>,<item:tfc:metal/double_sheet/wrought_iron>,<item:tfc:metal/double_sheet/zinc>]);
<recipetype:minecraft:crafting>.remove(<item:create:propeller>);
<recipetype:tfc:anvil>.addJsonRecipe("expmine/anvil/propelle",{
	"input": <tag:items:expmine:double_sheets>,
    "result": <item:create:propeller>,
    "tier": -1,
    "rules": [
        "punch_last"
    ]
});
<recipetype:minecraft:crafting>.remove(<item:create:encased_fan>);
<recipetype:minecraft:smithing>.addRecipe("expmine/smithing/encased_fan", <item:create:encased_fan>, <item:create:andesite_casing>, <item:create:propeller>);
