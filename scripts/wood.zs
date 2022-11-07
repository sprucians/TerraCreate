import crafttweaker.api.ingredient.IIngredient;
import crafttweaker.api.item.IItemStack;
import crafttweaker.api.bracket.BracketHandlers;

<recipetype:minecraft:crafting>.remove(<item:minecraft:barrel>);
<recipetype:minecraft:crafting>.addShaped("expmine/barrel", <item:minecraft:barrel>, [
    [<tag:items:tfc:lumber>,<tag:items:minecraft:wooden_trapdoors>,<tag:items:tfc:lumber>],
    [<tag:items:tfc:lumber>,<item:minecraft:air>,<tag:items:tfc:lumber>],
    [<tag:items:tfc:lumber>,<tag:items:tfc:lumber>,<tag:items:tfc:lumber>]
]);

<recipetype:minecraft:crafting>.remove(<tag:items:minecraft:wooden_trapdoors>);
<tag:items:minecraft:wooden_trapdoors>.clear();
<tag:items:minecraft:wooden_trapdoors>.add([<item:tfc:wood/planks/acacia_trapdoor>, <item:tfc:wood/planks/ash_trapdoor>, <item:tfc:wood/planks/aspen_trapdoor>, <item:tfc:wood/planks/birch_trapdoor>, <item:tfc:wood/planks/blackwood_trapdoor>, <item:tfc:wood/planks/chestnut_trapdoor>, <item:tfc:wood/planks/douglas_fir_trapdoor>, <item:tfc:wood/planks/hickory_trapdoor>, <item:tfc:wood/planks/kapok_trapdoor>, <item:tfc:wood/planks/maple_trapdoor>, <item:tfc:wood/planks/oak_trapdoor>, <item:tfc:wood/planks/palm_trapdoor>, <item:tfc:wood/planks/pine_trapdoor>, <item:tfc:wood/planks/rosewood_trapdoor>, <item:tfc:wood/planks/sequoia_trapdoor>, <item:tfc:wood/planks/spruce_trapdoor>, <item:tfc:wood/planks/sycamore_trapdoor>, <item:tfc:wood/planks/white_cedar_trapdoor>, <item:tfc:wood/planks/willow_trapdoor>]); 