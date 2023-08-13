onEvent('tags.items', e => {
})



let immersive_removes = ['immersiveengineering:ersatz_leather']

onEvent('recipes', e => {
    immersive_removes.forEach(remove => {
        e.remove({output: remove})
        e.remove({id: remove})
    })
})
//backpack조합법으로 인해 ersatz_leather 삭제
