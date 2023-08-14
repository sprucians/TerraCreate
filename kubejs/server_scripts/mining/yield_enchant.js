// priority: 0

onEvent('recipes', event => {
	// Change recipes here
	//console.info('=====================================================================================Add ore smelting recipe!!!!!!')
	event.forEachRecipe({ type: 'tfc:heating' }, recipe => {
		if (!recipe.json.asJsonObject.has('ingredient') || !recipe.json.asJsonObject.has('result_fluid'))
			return;
		let item = recipe.json.asJsonObject.get('ingredient').get('item')
		let fluid = recipe.json.asJsonObject.get('result_fluid').get('fluid')
		let amount = recipe.json.asJsonObject.get('result_fluid').get('amount') * 1
		let temp = recipe.json.asJsonObject.get('temperature')
		if (Item.of(item) && Item.of(item).hasTag('tfc:ore_pieces')) {
			event.remove({ input: item, type: "tfc:heating" })
			for (let i of [0, 1, 2]) {
				event.custom({
					"type": "create:mixing",
					"ingredients": [
						i == 0 ? Item.of(item).toJson() : Item.of(item).enchant('kubejs:yield', i).toJson()
					],
					"results": [
						Fluid.of(fluid, amount * (1 + 0.5 * i)).toJson()
					],
					"heatRequirement": "heated"
				})
			}
			for (let i of [1, 2]) {
				event.custom({
					"type": "tfc:heating",
					"ingredient": i == 0 ? Item.of(item).toJson() : Item.of(item).enchant('kubejs:yield', i).toJson(),
					"result_fluid": {
						"fluid": fluid,
						"amount": amount * (1 + 0.5 * i)
					},
					"temperature": temp
				})
			}
		}
	})
})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})