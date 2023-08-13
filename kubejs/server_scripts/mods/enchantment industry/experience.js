// priority: 0

onEvent('recipes', event => {
	// Change recipes here
	event.custom({
		"type": "create:mixing",
		"ingredients": [
			Item.of('create:experience_nugget'),
			Fluid.of('create:honey',100).toJson()
		],
		"results": [
			Fluid.of('create_enchantment_industry:experience',100).toJson()
		],
		"heatRequirement": "heated"
	})

	event.custom({
		"type": "create:mixing",
		"ingredients": [
			Item.of('minecraft:nether_star'),
			Fluid.of('create:honey',10).toJson()
		],
		"results": [
			Item.of('minecraft:nether_star'),
			Fluid.of('create_enchantment_industry:experience',10).toJson()
		]
	})

	event.remove({id: 'create_enchantment_industry:mixing/hyper_experience'})
	event.custom({
		"type": "create:mixing",
		"ingredients": [
			Item.of('minecraft:glow_ink_sac'),
			Item.of('tfc:powder/lapis_lazuli'),
			Fluid.of('create_enchantment_industry:experience',100).toJson()
		],
		"results": [
			Fluid.of('create_enchantment_industry:hyper_experience',10).toJson()
		],
		"heatRequirement": "superheated"
	})
})