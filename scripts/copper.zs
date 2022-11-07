import crafttweaker.api.ingredient.IIngredient;
import crafttweaker.api.item.IItemStack;

//2티어 : copper + wrought iron?

//Casing
<recipetype:minecraft:crafting>.remove(<item:create:copper_casing>);
<recipetype:minecraft:crafting>.addShapeless("expmine/copper_casing",<item:create:copper_casing>*4,[<item:tfc:wattle/unstained>,<item:tfc:metal/sheet/copper>]);
<recipetype:create:filling>.addJsonRecipe("expmine/filling/copper_casing",{
	"ingredients": [
	    <item:tfc:wattle/unstained>,
	    {
	      "fluid": "tfc:metal/copper",
	      "amount": 10
	    }
  	],
  	"results": [<item:create:copper_casing>]
});

<recipetype:minecraft:crafting>.remove(<item:create:fluid_pipe>);
<recipetype:tfc:anvil>.addJsonRecipe("expmine/anvil/fluid_pipe",{
	"input": <item:tfc:metal/double_ingot/copper>,
    "result": {
        "item": "create:fluid_pipe",
        "count" : 8
    },
    "tier": -1,
    "rules": [
        "punch_last"
    ]
});

<recipetype:minecraft:crafting>.remove(<item:create:fluid_tank>);
<recipetype:minecraft:smithing>.addRecipe("expmine/smithing/fluid_tank", <item:create:fluid_tank>, <item:create:copper_casing>, <tag:items:forge:glass>);

<recipetype:minecraft:crafting>.remove(<item:create:spout>);
<recipetype:minecraft:smithing>.addRecipe("expmine/smithing/spout", <item:create:spout>, <item:create:fluid_tank>, <item:tfc:metal/tuyere/copper>);

//Hose Pully
<recipetype:minecraft:crafting>.remove(<item:create:hose_pulley>);
<recipetype:minecraft:smithing>.addRecipe("expmine/smithing/hose_pulley", <item:create:hose_pulley>, <item:create:rope_pulley>, <item:create:fluid_pipe>);
