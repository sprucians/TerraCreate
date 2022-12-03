onEvent('tags.items', e => {
})



let removes = ['immersiveengineering:ersatz_leather']

onEvent('recipes', e => {
    removes.forEach(remove => {
        e.remove({output: remove})
        e.remove({id: remove})
    })
})
//backpack조합법으로 인해 ersatz_leather 삭제



onEvent('recipes', e => {
})
