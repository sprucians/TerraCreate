onEvent('recipes',event=>{
    event.custom({
        "type": "farmersdelight:cutting",
        "ingredients": [{
            "item": "tfc:wood/log/"+woodname}
        ],
        "tool": {
          "tag": "tfc:axes"
        },
        "result": [
            {"item": "tfc:wood/stripped_log/"+woodname},
            {"item": "farmersdelight:tree_bark"}
        ]
    })
})