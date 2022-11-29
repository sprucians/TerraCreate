z/*
onEvent('tags.items', e => {
    
    const silvers = e.get('forge:ingots/silver').getObjectIds()
    const bronzes = e.get('forge:ingots/bronze').getObjectIds()
    const coppers = e.get('forge:ingots/copper').getObjectIds()
    const brasses = e.get('forge:ingots/brass').getObjectIds()
    const irons = e.get('forge:ingots/iron').getObjectIds()
    const zincs = e.get('forge:ingots/zinc').getObjectIds()
    const tins = e.get('forge:ingots/tin').getObjectIds()
    const steels = e.get('forge:ingots/steel').getObjectIds()
    const golds = e.get('forge:ingots/gold').getObjectIds()
    const rose_golds = e.get('forge:ingots/rose_gold').getObjectIds()
    const sterling_silvers = e.get('forge:ingots/sterling_silver').getObjectIds()
    const nickels = e.get('forge:ingots/nickel').getObjectIds()
    const bismuthes = e.get('forge:ingots/bismuth').getObjectIds()

    silvers.forEach(silver => {
        e.add('tfc:metal/ingot/silver', silver)
        e.remove('forge:ingots/silver', silver)
    })
    bronzes.forEach(bronze => {
        e.add('tfc:metal/ingot/bronze', bronze)
        e.remove('forge:ingots/bronze', bronze)
    })
    coppers.forEach(copper => {
        e.add('tfc:metal/ingot/copper', copper)
        e.remove('forge:ingots/copper', copper)
    })
    brasses.forEach(brass => {
        e.add('tfc:metal/ingot/brass', brass)
        e.remove('forge:ingots/brass', brass)
    })
    irons.forEach(iron => {
        e.add('tfc:metal/ingot/iron', iron)
        e.remove('forge:ingots/iron', iron)
    })
    zincs.forEach(zinc => {
        e.add('tfc:metal/ingot/zinc', zinc)
        e.remove('forge:ingots/zinc', zinc)
    })
    tins.forEach(tin => {
        e.add('tfc:metal/ingot/tin', tin)
        e.remove('forge:ingots/tin', tin)
    })
    steels.forEach(steel => {
        e.add('tfc:metal/ingot/steel', steel)
        e.remove('forge:ingots/steel', steel)
    })
    golds.forEach(gold => {
        e.add('tfc:metal/ingot/gold', gold)
        e.remove('forge:ingots/gold', gold)
    })
    rose_golds.forEach(rose_gold => {
        e.add('tfc:metal/ingot/rose_gold', rose_gold)
        e.remove('forge:ingots/rose_gold', rose_gold)
    })
    sterling_silvers.forEach(sterling_silver => {
        e.add('tfc:metal/ingot/sterling_silver', sterling_silver)
        e.remove('forge:ingots/sterling_silver', sterling_silver)
    })
    nickels.forEach(nickel => {
        e.add('tfc:metal/ingot/nickel', nickel)
        e.remove('forge:ingots/nickel', nickel)
    })
    bismuths.forEach(bismuth => {
        e.add('tfc:metal/ingot/bismuth', bismuth)
        e.remove('forge:ingots/bismuth', bismuth)
    })


    const p_irons = e.get('forge:plates/iron').getObjectIds()
    const p_golds = e.get('forge:plates/gold').getObjectIds()
    const p_brasses = e.get('forge:plates/brass').getObjectIds()
    const p_coppers = e.get('forge:plates/copper').getObjectIds()

    p_irons.forEach(iron => {
        e.add('tfc:metal/sheet/wrought_iron', iron)
        e.remove('forge:plates/wrought_iron', iron)
    })
    p_golds.forEach(gold => {
        e.add('tfc:metal/sheet/gold', gold)
        e.remove('forge:plates/gold', gold)
    })
    p_brasses.forEach(brass => {
        e.add('tfc:metal/sheet/brass', brass)
        e.remove('forge:plates/brass', brass)
    })
    p_coppers.forEach(copper => {
        e.add('tfc:metal/sheet/copper', copper)
        e.remove('forge:plates/copper', copper)
    })

/*
for tag,item in replaceTagMap{
	Replacer.forTypes(craftingTable).excludingMods("tfc","immersiveengineering","theoneprobe","firmalife").replace(tag, item).execute();
	tag.clear();
	tag.add(item);
}
})
*/

/*let forgePlateMetals = ['iron', 'gold', 'brass', 'copper']
let tfcSheetMetals = ['wrought_iron', 'gold', 'brass', 'copper']

let forgeIngotMetals = ['silver', 'bronze', 'copper', 'brass', 'iron', 'zinc', 'tin', 'steel', 'gold', 'rose_gold', 'sterling_silver', 'nickel', 'bismuth']
let tfcIngotMetals = ['silver', 'bronze', 'copper', 'brass', 'iron', 'zinc', 'tin', 'steel', 'gold', 'rose_gold', 'sterling_silver', 'nickel', 'bismuth']


onEvent('recipes', e => {
    for(let i = 0; i<forgePlateMetals.length; i++) {
        e.replaceInput('#forge:plates/' + forgePlateMetals[i], '#tfc:metal/sheet/' + tfcSheetMetals[i])
    }
    for(let i = 0; i<forgeIngotMetals.length; i++) {
        e.replaceInput('#forge:ingots/' + forgeIngotMetals[i], '#tfc:metal/ingot/' + tfcIngotMetals[i])
    }
   
})*/
