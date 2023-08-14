onEvent('block.modification', event => {
    event.modify('minecraft:stone', block => {
      block.destroySpeed = 0.1
      block.hasCollision = false
    })
  })