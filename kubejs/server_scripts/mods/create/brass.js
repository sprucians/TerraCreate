onEvent('tags.items', e => {
})



onEvent('recipes', e => {
    [].forEach(remove => {
        e.remove({output: remove})
        e.remove({id: remove})
    })
})



onEvent('recipes', e => {
})