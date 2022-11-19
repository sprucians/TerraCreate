onEvent('tags.items', e => {
    const ingot_metals = [':ingots/silver', ':ingots/bronze', ':ingots/copper', 
        ':ingots/brass', ':ingots/iron', ':ingots/zinc', ':ingots/tin', 
        ':ingots/steel', ':ingots/gold', ':ingots/rose_gold', ':ingots/sterling_silver', 
        ':ingots/nickel', ':ingots/bismuth']

    ingot_metals.forEach(ingot_metal => {
        const metals = event.get('forge'+ingot_metals).getObjectIds()
        metals.forEach(metal => {
          e.add('tfc:'+ingot_metals, metal)
        })
    })
})

//이게되려나