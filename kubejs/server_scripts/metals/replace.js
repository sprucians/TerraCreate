/*
onEvent('tags.items', event => {
    
    const silvers = event.get('forge:ingots/silver').getObjecIds()
    const bronzes = event.get('forge:ingots/bronze').getObjecIds()
    const coppers = event.get('forge:ingots/copper').getObjecIds()
    const brasses = event.get('forge:ingots/brass').getObjecIds()
    const irons = event.get('forge:ingots/iron').getObjecIds()
    const zincs = event.get('forge:ingots/zinc').getObjecIds()
    const tins = event.get('forge:ingots/tin').getObjecIds()
    const steels = event.get('forge:ingots/steel').getObjecIds()
    const golds = event.get('forge:ingots/gold').getObjecIds()
    const rose_golds = event.get('forge:ingots/rose_gold').getObjecIds()
    const sterling_silvers = event.get('forge:ingots/sterling_silver').getObjecIds()
    const nickels = event.get('forge:ingots/nickel').getObjecIds()
    const bismuthes = event.get('forge:ingots/bismuth').getObjecIds()

    silvers.forEach(silver => {
        event.add('tfc:metal/ingot/silver', silver)
        event.remove('forge:ingots/silver', silver)
    })
    bronzes.forEach(bronze => {
        event.add('tfc:metal/ingot/bronze', bronze)
        event.remove('forge:ingots/bronze', bronze)
    })
    coppers.forEach(copper => {
        event.add('tfc:metal/ingot/copper', copper)
        event.remove('forge:ingots/copper', copper)
    })
    brasses.forEach(brass => {
        event.add('tfc:metal/ingot/brass', brass)
        event.remove('forge:ingots/brass', brass)
    })
    irons.forEach(iron => {
        event.add('tfc:metal/ingot/iron', iron)
        event.remove('forge:ingots/iron', iron)
    })
    zincs.forEach(zinc => {
        event.add('tfc:metal/ingot/zinc', zinc)
        event.remove('forge:ingots/zinc', zinc)
    })
    tins.forEach(tin => {
        event.add('tfc:metal/ingot/tin', tin)
        event.remove('forge:ingots/tin', tin)
    })
    steels.forEach(steel => {
        event.add('tfc:metal/ingot/steel', steel)
        event.remove('forge:ingots/steel', steel)
    })
    golds.forEach(gold => {
        event.add('tfc:metal/ingot/gold', gold)
        event.remove('forge:ingots/gold', gold)
    })
    rose_golds.forEach(rose_gold => {
        event.add('tfc:metal/ingot/rose_gold', rose_gold)
        event.remove('forge:ingots/rose_gold', rose_gold)
    })
    sterling_silvers.forEach(sterling_silver => {
        event.add('tfc:metal/ingot/sterling_silver', sterling_silver)
        event.remove('forge:ingots/sterling_silver', sterling_silver)
    })
    nickels.forEach(nickel => {
        event.add('tfc:metal/ingot/nickel', nickel)
        event.remove('forge:ingots/nickel', nickel)
    })
    bismuths.forEach(bismuth => {
        event.add('tfc:metal/ingot/bismuth', bismuth)
        event.remove('forge:ingots/bismuth', bismuth)
    })


    const p_irons = event.get('forge:plates/iron').getObjectIds()
    const p_golds = event.get('forge:plates/gold').getObjectIds()
    const p_brasses = event.get('forge:plates/brass').getObjectIds()
    const p_coppers = event.get('forge:plates/copper').getObjectIds()

    p_irons.forEach(iron => {
        event.add('tfc:metal/sheet/wrought_iron', iron)
        event.remove('forge:plates/wrought_iron', iron)
    })
    p_golds.forEach(gold => {
        event.add('tfc:metal/sheet/gold', gold)
        event.remove('forge:plates/gold', gold)
    })
    p_brasses.forEach(brass => {
        event.add('tfc:metal/sheet/brass', brass)
        event.remove('forge:plates/brass', brass)
    })
    p_coppers.forEach(copper => {
        event.add('tfc:metal/sheet/copper', copper)
        event.remove('forge:plates/copper', copper)
    })


for tag,item in replaceTagMap{
	Replacer.forTypes(craftingTable).excludingMods("tfc","immersiveengineering","theoneprobe","firmalife").replace(tag, item).execute();
	tag.clear();
	tag.add(item);
}

    
})
*/