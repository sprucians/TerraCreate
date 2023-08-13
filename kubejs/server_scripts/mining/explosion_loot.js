const $Registry = java('net.minecraft.core.Registry')

onEvent('block.loot_tables', event => {
    []
    .filter(b => b.toString().match('(tfc|tfc_ie_addon):ore/(rich|normal|poor)'))
    .forEach(b => {
        event.addSimpleBlock(b.toString(),'minecraft:dirt')
        
    });
})
