onEvent('recipes', e => {
    e.remove({id: 'minecraft:barrel'})
    e.remove({id: '#minecraft:wooden_trapdoors'})
})


onEvent('recipes', e => {
    e.shaped('minecraft:barrel', ['LTL', 'L L', 'LLL'], {
        L: '#tfc:lumber',
        T: '#minecraft:wooden_trapdoors',
    })
})

let woods = ['acacia', 'ash', 'aspen', 'birch', 'blackwood', 'chestnut', 'douglas_fir', 'hickory', 'kapok', 'maple', 'oak', 'palm', 'pine', 'rosewood', 'sequoia', 'spruce', 'sycamore', 'white_cedar', 'willow']
onEvent('tags.items', e => {

    woods.forEach(wood => {
        e.add('minecraft:wooden_trapdoors', 'tfc:wood/planks/' + wood + '_trapdoor')
    })   
})
