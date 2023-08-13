onEvent('block.break', e => {
    if(e.getBlock().toString().match('(tfc|tfc_ie_addon):ore/(rich|normal|poor)')){
        if(Math.random()<0.6){
            e.getBlock().set(String(e.getBlock().toString()).replace(/rich|normal|poor/gi, function(x){
                return {'rich':'normal','normal':'poor','poor':'makeerrorhahahaha'}[x]
            }))
        }
        e.getBlock().getDrops().forEach(d => {e.getBlock().popItem(d)})
        e.cancel()
    }
})