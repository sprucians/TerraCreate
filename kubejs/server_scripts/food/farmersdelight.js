/*
function generateCrafterRecipes(crafter, inputs, output, minlevel, maxlevel, researchs_required, research_cancelled, intermediate) {
    destination = 'kubejs/data/minecolonies/crafterrecipes/'
    config = JsonIO.read('kubejs/config/minecolonies_crafterrecipe_config.json')
  
    if (researchs_required) config['research-id'] = researchs_required
    if (research_cancelled) config['not-research-id'] = research_cancelled
  
    config.crafter = `${crafter}_crafting`
    config.inputs = inputs
  
    config.result = output.item
    config.count = output.count
    config.intermediate = intermediate || 'minecraft:air'
    config['min-building-level'] = minlevel || 1
    config['max-building-level'] = maxlevel || 5
  
    JsonIO.write(`${destination}/${crafter}/${String(output['item']).split(':')[1]}.json`, config)
  }
  
  generateCrafterRecipes('blacksmith', [{ item: 'minecraft:diamond', count: 4 }, { item: 'minecraft:emerald', count: 4 }], { item: 'minecraft:beacon', count: 1 }, 1, 5)
  */


JsonIO.write('kubejs/data/tfc/tfc/food_items/minced_beef.json',{
    "ingredient": {
        "item": "farmersdelight:minced_beef"
    },
    "category": "fruit",
    "hunger": 4,
    "saturation": 0.2,
    "decay_modifier": 1,
    "fruit": 5
})