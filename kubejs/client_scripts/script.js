// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

onEvent('jei.hide.items', event => {
	// Hide items in JEI here
	// event.hide('minecraft:cobblestone')
})

onEvent('item.tooltip', tooltip => {
	tooltip.add(Item.of('minecraft:flint_and_steel'),'테스트')
})