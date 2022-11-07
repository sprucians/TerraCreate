#priority 20

import crafttweaker.api.ingredient.IIngredient;
import crafttweaker.api.item.IItemStack;
import crafttweaker.api.bracket.BracketHandlers;

<recipetype:minecraft:smelting>.removeAll();
<recipetype:minecraft:blasting>.removeAll();
<recipetype:minecraft:smoking>.removeAll();
<recipetype:minecraft:smithing>.removeAll();
<recipetype:minecraft:campfire_cooking>.removeAll();

<recipetype:create:crushing>.removeAll();
<recipetype:create:milling>.removeAll();
<recipetype:create:mixing>.remove(<item:create:brass_ingot>);

<recipetype:immersiveengineering:blast_furnace>.removeAll();
<recipetype:immersiveengineering:alloy>.removeAll();
