onEvent('block.loot_tables', event => {
    let tfc_ore = new RegExp('(tfc|tfc_ie_addon|firmalife):ore/(rich|normal|poor).*/')
    event.addBlock(tfc_ore, table => {
        table.addPool(pool => {
            pool.addItem('minecraft:air')
        })
    })
})

onEvent('level.explosion.post', e => {  
    let tfc_ore = new RegExp('(tfc|tfc_ie_addon|firmalife):ore/(rich|normal|poor).*/')  
    e.getAffectedBlocks()
        .filter(b => tfc_ore.test(b))
        .forEach(b => {
            let ore = tfc_ore.exec(b.toString())[0].slice(0, -1)
            while(!/norepeat/.test(ore)){
                b.popItem(ore)
                if (Math.random() < 0.6) {
                    ore = ore.replace(/rich|normal|poor/gi, function (x) {
                        return {'rich': 'normal', 'normal': 'poor', 'poor': 'norepeat' }[x]
                    })
                }
            }
        })
})