let meatdb = [
    ['tfc:food/beef', 'tfc:food/cooked_beef', 'farmersdelight:minced_beef', 'farmersdelight:beef_patty'],
    ['tfc:food/chicken', 'tfc:food/cooked_chicken', 'farmersdelight:chicken_cuts', 'farmersdelight:cooked_chicken_cuts'],
    ['tfc:food/mutton', 'tfc:food/cooked_mutton', 'farmersdelight:mutton_chops', 'farmersdelight:cooked_mutton_chops'],
    ['tfc:food/pork', 'tfc:food/cooked_pork', 'farmersdelight:bacon', 'farmersdelight:cooked_bacon'],
    ['tfc:food/salmon', 'tfc:food/cooked_salmon', 'farmersdelight:salmon_slice', 'farmersdelight:cooked_salmon_slice'],
    ['tfc:food/cod', 'tfc:food/cooked_cod', 'farmersdelight:cod_slice', 'farmersdelight:cooked_cod_slice']
]

onEvent('recipes', e => {
    meatdb.forEach(m => {
        var [raw,cook,raw_cut,cook_cut] = m
        
        generateCutRecipe(e,raw, raw_cut)   
        generateCutRecipe(e,cook, cook_cut)
        generateGrillRecipe(e,raw_cut, cook_cut)

        registerFood(raw_cut, cutFoodData(raw_cut,readFood(raw)))
        registerFood(cook_cut, cutFoodData(cook_cut,readFood(cook)))

        registerHeat(raw_cut)
    
        e.recipes.createSequencedAssembly([ // start the recipe
            `3x ${raw_cut}`
        ],raw,[
            e.recipes.createPressing(raw,raw),
            e.recipes.createPressing(raw,raw),
            e.recipes.createCutting(raw,raw).processingTime(50),
            e.recipes.createDeploying(raw, [raw, '#tfc:knives']),
        ]).transitionalItem(raw).loops(1)
    })
})



onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
    meatdb.forEach(m => {
        var [raw,cook,raw_cut,cook_cut] = m
        Item.of(raw).getTags().forEach(t => event.get(t).add(raw_cut))
        Item.of(cook).getTags().forEach(t => event.get(t).add(cook_cut))
    })
})