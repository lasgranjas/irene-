let mySprite = sprites.create(img`
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 f f 9 9 9 9 9 f f 9 9 9 9 
    9 9 9 f f 1 1 1 1 1 f f 9 9 9 9 
    9 9 1 1 1 1 1 1 1 1 1 1 1 9 9 9 
    9 9 1 f f f 1 1 1 f f f 1 9 9 9 
    9 9 1 f 1 f 1 1 1 f 1 f 1 9 9 9 
    9 9 1 f f f 1 f 1 f f f 1 9 9 9 
    9 9 1 3 3 1 1 1 1 1 3 3 1 9 9 9 
    9 9 1 1 1 f 1 1 1 f 1 1 1 9 9 9 
    9 9 1 1 1 1 f f f 1 1 1 1 9 9 9 
    9 9 9 1 1 1 1 3 1 1 1 1 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    `, SpriteKind.Player)
scene.setBackgroundColor(9)
controller.moveSprite(mySprite)
