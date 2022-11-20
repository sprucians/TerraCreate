let metals = ['bismuth', 'bismuth_bronze', 'black_bronze', 'black_steel', 'blue_steel', 'brass', 'bronze', 'cast_iron', 'copper', 'gold', 'nickel', 'red_steel', 'rose_gold', 'silver', 'steel', 
        'sterling_silver', 'tin', 'wrought_iron', 'zinc']
let ingots = []
let sheets = []
let doubleIngots = []
metals.forEach(metal => {
    ingots.push('2x tfc:metal/ingot/'+metal)
})
metals.forEach(metal => {
    sheets.push('tfc:metal/sheet/'+metal)
})
metals.forEach(metal => {
    doubleIngots.push('tfc:metal/double_ingot/'+metal)
})


onEvent('recipes', e => {
    e.remove({output: '#forge:plates'})

    e.recipes.immersiveengineeringMetalPress(sheet, ingot, 'immersiveengineering:mold_plate').energy(1000)
    e.recipes.createPressing(sheet, doubleIngots)
})
