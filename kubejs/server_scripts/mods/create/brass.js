onEvent('tags.items', e => {
})



let brass_removes = []

onEvent('recipes', e => {
    brass_removes.forEach(remove => {
        e.remove({output: remove})
        e.remove({id: remove})
    })
})



onEvent('recipes', e => {
})