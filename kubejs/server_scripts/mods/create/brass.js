onEvent('tags.items', e => {
})



let removes = []

onEvent('recipes', e => {
    removes.forEach(remove => {
        e.remove({output: remove})
        e.remove({id: remove})
    })
})



onEvent('recipes', e => {
})