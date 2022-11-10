onEvent('recipes', event => {
    registerFood('create:honeyed_apple', {
        "ingredient": Item.of('create:honeyed_apple'),
        "category": "fruit",
        "hunger": 5,
        "saturation": 1,
        "decay_modifier": 0.5,
        "fruit": 1,
        "dairy": 0.5
    })

    event.remove({output: 'create:honeyed_apple'})
    event.custom({
        "type": "tfc:barrel_sealed",
        "input_item": {
            "ingredient": {
                "tag" : "tfc:foods/apples"
            }
        },
        "input_fluid": {
            "ingredient": "create:honey",
            "amount": 250
        },
        "output_item": {
            "stack": {
                "item": 'create:honeyed_apple',
                "count": 1
            },
            "modifiers": [
                { "type": "tfc:copy_food" }
            ]
        },
        "duration": 24000
    })
})

onEvent('fluid.tags', event => {
	event.get('tfc:ingredients').add('create:honey')
})