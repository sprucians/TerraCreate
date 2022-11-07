onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})

onEvent('block.right_click', event => {
	const FluidCapability = java('net.minecraftforge.fluids.capability.CapabilityFluidHandler')
	const FoodCapability = java('net.dries007.tfc.common.capabilities.food.FoodCapability')

	if(event.item.getItemStack().getCapability(FluidCapability.FLUID_HANDLER_CAPABILITY))
		console.log("wow! fluid!")
	else
		console.log("y not fluid??")
})