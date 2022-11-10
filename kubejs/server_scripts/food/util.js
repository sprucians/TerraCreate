function generateCutRecipe(e,raw, cut, amount, add) {
    add = add === undefined ? 'minecraft:bone_meal' : add
    amount = amount === undefined ? 2 : amount
    e.custom({
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

function generateGrillRecipe(e,cut, cook) {
    e.custom({
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

function cutFoodData(food,config) {
    let c = config
    Object.keys(config).forEach(key => {
        if (key == "ingredient")
            c[key]["item"] = food
        else if (key == "decay_modifier")
            c[key] = config[key] + 0.3
        else if (!isNaN(config[key]))
            c[key] = config[key] / 2
    })
    return c
}

function registerHeat(item) {
    JsonIO.write(`kubejs/data/tfc/tfc/item_heats/food/${item.split(':')[1]}.json`, {
        "ingredient": Item.of(item),
        "heat_capacity": 1.0
    })
}

function registerFood(food, config) {
    JsonIO.write(`kubejs/data/tfc/tfc/food_items/${food.split(':')[1]}.json`, config)
}

function readFood(food) {
    return JsonIO.read(`kubejs/data/tfc/tfc/food_items/${food.split(':')[1]}.json`)
}