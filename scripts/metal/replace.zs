import crafttweaker.api.tag.type.KnownTag;
import crafttweaker.api.item.IItemStack;
import crafttweaker.api.item.ItemDefinition;
import crafttweaker.api.recipe.Replacer;

val replaceTagMap as IItemStack[KnownTag<ItemDefinition>] = {
    <tag:items:forge:ingots/silver>  		: <item:tfc:metal/ingot/silver>,
    <tag:items:forge:ingots/bronze>  		: <item:tfc:metal/ingot/bronze>,
    <tag:items:forge:ingots/copper>  		: <item:tfc:metal/ingot/copper>,
    <tag:items:forge:ingots/brass>  		: <item:tfc:metal/ingot/brass>,
    <tag:items:forge:ingots/iron>  			: <item:tfc:metal/ingot/wrought_iron>,
    <tag:items:forge:ingots/zinc> 			: <item:tfc:metal/ingot/zinc>,
    <tag:items:forge:ingots/tin>  			: <item:tfc:metal/ingot/tin>,
    <tag:items:forge:ingots/steel>  		: <item:tfc:metal/ingot/steel>,
    <tag:items:forge:ingots/gold>  			: <item:tfc:metal/ingot/gold>,
    <tag:items:forge:ingots/rose_gold>  	: <item:tfc:metal/ingot/rose_gold>,
    <tag:items:forge:ingots/sterling_silver>: <item:tfc:metal/ingot/sterling_silver>,
    <tag:items:forge:ingots/nickel>  		: <item:tfc:metal/ingot/nickel>,
    <tag:items:forge:ingots/bismuth>  		: <item:tfc:metal/ingot/bismuth>,

    <tag:items:forge:plates/iron>           : <item:tfc:metal/sheet/wrought_iron>,
    <tag:items:forge:plates/gold>           : <item:tfc:metal/sheet/gold>,
    <tag:items:forge:plates/brass>          : <item:tfc:metal/sheet/brass>,
    <tag:items:forge:plates/copper>         : <item:tfc:metal/sheet/copper>
};

for tag,item in replaceTagMap{
	Replacer.forTypes(craftingTable).excludingMods("tfc","immersiveengineering","theoneprobe","firmalife").replace(tag, item).execute();
	tag.clear();
	tag.add(item);
}

<recipetype:minecraft:crafting>.addShapeless("test", <item:create:fluid_pipe>, [<item:minecraft:dirt>]);