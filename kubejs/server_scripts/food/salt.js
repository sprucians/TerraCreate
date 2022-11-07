onEvent('recipes', event => {
    event.custom({
        "type" : "tfc:pot",
        "ingredients": [
            {
                "item": "tfc:stick_bunch"
            },
          ],
        "fluid_ingredient": {
            "ingredient": "tfc:salt_water",
            "amount": 250
        },
        "item_output": [
            {
                "item": "tfc:powder/salt"
            },
            {
                "item": "tfc:stick_bunch"
            }
        ],
        "duration": 1000,
        "temperature": 200
    })
});