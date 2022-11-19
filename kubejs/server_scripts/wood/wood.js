let twoods;

onEvent('recipes', event => {
    event.remove({id: 'minecraft:barrel'})
    event.shaped('minecraft:barrel', ['LTL', 'L L', 'LLL'], {
        L: 'tfc:lumber',
        T: 'minecraft:wooden_trapdoors'
    })

    event.remove({output: '#minecraft:wooden_trapdoors'})
    event.removeAllTagsFrom('minecraft:wooden_trapdoors')
})

onEvent('tags.items', event => {
    for (twoods of ['acacia', 'ash', 'aspen', 'brich', 'blackwood', 'chestnut', 'douglas_fir', 'hickory', 'kapok', 'maple', 'oak', 'palm', 'pine', 'rosewood', 'sequoia', 'spruce', 'sycamore', 'white_cedar', 'willow']){
        event.add('minecraft:wooden_trapdoors', 'tfc:wood/planks/'+twoods)
    }
})