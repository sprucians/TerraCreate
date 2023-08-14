onEvent('tags.items', e => {
})

onEvent('recipes', e => {
    ['immersiveengineering:ersatz_leather'].forEach(remove => {
        e.remove({output: remove})
        e.remove({id: remove})
    })
})
//backpack조합법으로 인해 ersatz_leather 삭제
