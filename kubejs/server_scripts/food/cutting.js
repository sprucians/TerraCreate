//
//ex : beef -> minced beef -> beef_patty

function generateCutRecipe(event, raw, cut, amount, add) {
    add = add === undefined ? 'minecraft:bone_meal' : add
    amount = amount === undefined ? 2 : amount
    event.custom({
        "type": "tfc:extra_products_shapeless_crafting",
        "extra_products": [Item.of(add)],
        "recipe": {
            "type": "tfc:damage_inputs_shapeless_crafting",
            "recipe": {
                "type": "tfc:advanced_shapeless_crafting",
                "ingredients": [
                    {
                        "type": "tfc:not_rotten",
                        "ingredient": Item.of(raw)
                    },
                    {
                        "tag": "tfc:knives"
                    }
                ],
                "primary_ingredient": Item.of(raw),
                "result": {
                    "stack": Item.of(cut, amount),
                    "modifiers": [
                        "tfc:copy_food"
                    ]
                }
            }
        }
    })
}

function generateGrillRecipe(event, cut, cook) {
    event.custom({
        "type": "tfc:heating",
        "ingredient": {
            "type": "tfc:not_rotten",
            "ingredient": Item.of(cut)
        },
        "result_item": {
            "stack": Item.of(cook),
            "modifiers": ["tfc:copy_food"]
        },
        "temperature": 200
    })
}

function cutFoodData(config) {
    let c = config
    Object.keys(config).forEach(key => {
        if (key == "decay_modifier")
            c[key] = config[key] + 0.3
        else if (!isNaN(config[key]))
            c[key] = config[key] / 2
    })
    return c
}

function registerHeat(item) {
    JsonIO.write(`kubejs/data/tfc/tfc/item_heats/${item.split(':')[1]}.json`, {
        "ingredient": Item.of(item),
        "heat_capacity": 1.0
    })
}

function registerFood(food, config) {
    config["ingredient"]["item"] = food //this is spagetti
    JsonIO.write(`kubejs/data/tfc/tfc/food_items/${food.split(':')[1]}.json`, config)
}

function readFood(food) {
    return JsonIO.read(`kubejs/data/tfc/tfc/food_items/${food.split(':')[1]}.json`)
}

let meatdb = [
    ['tfc:food/beef', 'tfc:food/cooked_beef', 'farmersdelight:minced_beef', 'farmersdelight:beef_patty'],
    ['tfc:food/chicken', 'tfc:food/cooked_chicken', 'farmersdelight:chicken_cuts', 'farmersdelight:cooked_chicken_cuts'],
    ['tfc:food/mutton', 'tfc:food/cooked_mutton', 'farmersdelight:mutton_chops', 'farmersdelight:cooked_mutton_chops'],
    ['tfc:food/pork', 'tfc:food/cooked_pork', 'farmersdelight:bacon', 'farmersdelight:cooked_bacon'],
    ['tfc:food/salmon', 'tfc:food/cooked_salmon', 'farmersdelight:salmon_slice', 'farmersdelight:cooked_salmon_slice'],
    ['tfc:food/cod', 'tfc:food/cooked_cod', 'farmersdelight:cod_slice', 'farmersdelight:cooked_cod_slice']
]

onEvent('recipes', e => {
    for (let meat of meatdb){
        let raw = meat[0]
        let cook = meat[1]
        let raw_cut = meat[2]
        let cook_cut = meat[3]
        
        generateCutRecipe(e, raw, raw_cut)
        generateCutRecipe(e, cook, cook_cut)
        generateGrillRecipe(e, raw_cut, cook_cut)

        registerFood(raw_cut, cutFoodData(readFood(raw)))
        registerFood(cook_cut, cutFoodData(readFood(cook)))

        registerHeat(raw_cut)
    }
})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
    event.get('')
})