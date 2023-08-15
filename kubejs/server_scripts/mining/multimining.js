onEvent('block.break', e => {
    let tfc_ore = new RegExp('(tfc|tfc_ie_addon|firmalife):ore/(rich|normal|poor).*/')
    if(e.getBlock().toString().match(tfc_ore)){
        if(Math.random()<0.6){
            e.getBlock().set(String(e.getBlock().toString()).replace(/rich|normal|poor/gi, function(x){
                return {'rich':'normal','normal':'poor','poor':'makeerrorhahahaha'}[x]
            }))
        }
        e.cancel()
        e.getBlock().popItem(tfc_ore.exec(e.getBlock().toString())[0].slice(0,-1))
    }
})