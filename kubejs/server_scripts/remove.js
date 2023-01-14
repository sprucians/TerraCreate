onEvent('recipes', event => {
    event.remove({type : "minecraft:smelting"})
    event.remove({type : "minecraft:blasting"})
})