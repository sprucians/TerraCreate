// priority: 0

console.info('making enchant...')

onEvent('item.registry', event => {
	// Register new items here
	// event.create('example_item').displayName('Example Item')
})

onEvent('block.registry', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})

onEvent("enchantment.registry",event => {
	event.create('yield')
		.minLevel(1)
		.maxLevel(3)
		.trident()
		.canEnchant((item) => {
			if (item.hasTag('tfc:ore_pieces'))
				return true
			else
				return false
		})
})
/*
.category(event.create('dummy').category.create('newcat',(item) => {
			if (item.id == 'tfc:ore/rich_native_copper')
				return true
			else
				return false
		}))
*/