
let metals = ['bismuth', 'bismuth_bronze', 'black_bronze', 'black_steel', 'blue_steel', 'brass', 'bronze', 'cast_iron', 'copper', 'gold', 'nickel', 'red_steel', 'rose_gold', 'silver', 'steel', 
'sterling_silver', 'tin', 'wrought_iron', 'zinc']

onEvent('tags.items', e => {

    metals.forEach(metal => {
        e.add('terracreate:double_sheets', 'tfc:metal/double_sheet/' + metals)
    })
})