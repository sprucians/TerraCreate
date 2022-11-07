import crafttweaker.api.item.IItemStack;
import crafttweaker.api.bracket.BracketHandlers;

val metalList as string[] = [
	"bismuth",
	"bismuth_bronze",
	"black_bronze",
	"black_steel",
	"blue_steel",
	"brass",
	"bronze",
	"cast_iron",
	"copper",
	"gold",
	"nickel",
	"red_steel",
	"rose_gold",
	"silver",
	"steel",
	"sterling_silver",
	"tin",
	"wrought_iron",
	"zinc",
];

for item in <tag:items:forge:plates>.asIIngredient().items{
	<recipetype:immersiveengineering:metal_press>.remove(item);
	<recipetype:create:pressing>.remove(item);
	<recipetype:minecraft:crafting>.remove(item);
}

//이머시브/크리에이트 프레스 금속판
for metalname in metalList{
	var ingot = BracketHandlers.getItem("tfc:metal/ingot/"+metalname);
	var sheet = BracketHandlers.getItem("tfc:metal/sheet/"+metalname);
	var doubleIngot = BracketHandlers.getItem("tfc:metal/double_ingot/"+metalname);
	<recipetype:immersiveengineering:metal_press>.addRecipe("expmine/immersive_press/"+metalname, ingot*2 , <item:immersiveengineering:mold_plate>, 1000, sheet);
	<recipetype:create:pressing>.addJsonRecipe("expmine/create_press/"+metalname, {
		"ingredients": [doubleIngot],
  		"results": [sheet]
	});
}