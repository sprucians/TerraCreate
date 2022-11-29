onEvent('item.registry', e => {
    e.create('experience_seed') //kubejs/assets/kubejs/textures/item/experience_seed.png
})

onEvent('recipes', e => {
    e.recipes.createFilling('create:experience_nugget', ['kubejs:experience_seed', Fluid.of('create_enchantment_industry:experience', 100)])
    e.custom({
        "type": "tfc:barrel_sealed", 
        "input_item": { 
            "ingredient": { 
                "item": 'kubejs:experience_seed', 
                "count": 1
            } 
        }, 
        "input_fluid": { 
            "ingredient": 'create_enchantment_industry:experience', 
            "amount": 100
        }, 
        "output_item": { 
            "item": 'create:experience_nugget', 
            "count": 1
        },
        "duration": 1200
    })
})
