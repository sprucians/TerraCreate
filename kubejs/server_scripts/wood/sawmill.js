onEvent('recipes',event => {
    event.remove({type: 'create:cutting'})

    for (let woodname of ["acacia", "ash", "aspen", "birch", "blackwood", "chestnut", "douglas_fir", "hickory", "kapok", "maple", "oak", "palm", "pine", "rosewood", "sequoia", "spruce", "sycamore", "white_cedar", "willow"]){
        event.custom({
            "type" : "create:cutting",
            "ingredients": [{'item' : 'tfc:wood/log/'+woodname}],
  		    "results": [
                {"item": "tfc:wood/stripped_log/"+woodname},
                {"item": "farmersdelight:tree_bark"}
            ],
  		    "processingTime": 50
        })

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

        event.custom({
            "type" : "create:cutting",
            "ingredients": [{'item' : "tfc:wood/stripped_log/"+woodname}],
  		    "results": [{
		        "item": "tfc:wood/lumber/"+woodname,
                "count" : 12
		    }],
  		    "processingTime": 50
        })

        event.custom({
            "type" : "create:cutting",
            "ingredients": [{'item' : 'tfc:wood/wood/'+woodname}],
  		    "results": [
                {"item": "tfc:wood/stripped_wood/"+woodname},
                {"item": "farmersdelight:tree_bark"}
            ],
  		    "processingTime": 50
        })
    }
});