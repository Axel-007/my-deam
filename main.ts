namespace SpriteKind {
    export const B_Story = SpriteKind.create()
    export const gate = SpriteKind.create()
    export const Car = SpriteKind.create()
    export const Door = SpriteKind.create()
    export const Open_door = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Johnny,
    [img`
        . . . . . . . . . . . . . . 
        . . . . . f f f f . . . . . 
        . . . f f c f f f f f . . . 
        . . f f f c f f f c f f . . 
        . . f f c f f f f c c f . . 
        . . f c f f f f f f c f . . 
        . . f f f f f f f f f f . . 
        . . f f f f f f f f f f . . 
        . . f f f f f f f f f f . . 
        . . . 4 f f f f f f 4 . . . 
        . . . . 4 4 4 4 4 4 . . . . 
        . . e 4 2 2 2 2 2 2 4 e . . 
        . . 4 4 2 2 2 2 2 2 d 4 . . 
        . . . . 6 6 6 6 6 6 4 4 . . 
        . . . . f f f f f f . . . . 
        . . . . f f . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . 
        . . . . . f f f f . . . . . 
        . . . f f c f f f f f . . . 
        . . f f f c f f f c f f . . 
        . . f f c f f f f c c f . . 
        . . f c f f f f f f c f . . 
        . . f f f f f f f f f f . . 
        . . f f f f f f f f f f . . 
        . . f f f f f f f f f f . . 
        . . . 4 f f f f f f 4 . . . 
        . . . . 4 4 4 4 4 4 . . . . 
        . . e 4 2 2 2 2 2 2 4 e . . 
        . . 4 d 2 2 2 2 2 2 d 4 . . 
        . . 4 4 6 6 6 6 6 6 4 4 . . 
        . . . . f f f f f f . . . . 
        . . . . f f . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . . 
        . . . . . f f f f . . . . . 
        . . . f f c f f f f f . . . 
        . . f f f c f f f c f f . . 
        . . f f c f f f f c c f . . 
        . . f c f f f f f f c f . . 
        . . f f f f f f f f f f . . 
        . . f f f f f f f f f f . . 
        . . f f f f f f f f f f . . 
        . . . 4 f f f f f f 4 . . . 
        . . . . 4 4 4 4 4 4 . . . . 
        . . e 4 2 2 2 2 2 2 4 e . . 
        . . 4 d 2 2 2 2 2 2 4 4 . . 
        . . 4 4 6 6 6 6 6 6 . . . . 
        . . . . f f f f f f . . . . 
        . . . . . . . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . . 
        . . . . . f f f f . . . . . 
        . . . f f c f f f f f . . . 
        . . f f f c f f f c f f . . 
        . . f f c f f f f c c f . . 
        . . f c f f f f f f c f . . 
        . . f f f f f f f f f f . . 
        . . f f f f f f f f f f . . 
        . . f f f f f f f f f f . . 
        . . . 4 f f f f f f 4 . . . 
        . . . . 4 4 4 4 4 4 . . . . 
        . . e 4 2 2 2 2 2 2 4 e . . 
        . . 4 d 2 2 2 2 2 2 d 4 . . 
        . . 4 4 6 6 6 6 6 6 4 4 . . 
        . . . . f f f f f f . . . . 
        . . . . f f . . f f . . . . 
        `],
    250,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.B_Story, function (sprite, otherSprite) {
    controller.moveSprite(Johnny, 0, 0)
    gate.destroy()
    story.printText("the door is open", 658, 375, 1, 15, story.TextSpeed.Normal)
    controller.moveSprite(Johnny, 40, 40)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Johnny,
    [img`
        . . . . . f f f f f . . . . 
        . . . f f f f f f f f f . . 
        . . f f f c f f f f f f . . 
        . . f f c f f f c f f f f . 
        . f c c f f f c c f f c f . 
        . f f f f 4 f f f f c c f . 
        . . f f 4 4 f f f f f f f . 
        . . . . 4 4 f b f f f f f . 
        . . . . 4 4 f 1 4 f f f . . 
        . . . . 4 4 4 4 4 f f f . . 
        . . . . . 4 4 4 4 e . . . . 
        . . . . . 2 2 2 4 4 . . . . 
        . . . . . 2 2 2 4 4 . . . . 
        . . . . . 6 6 6 6 6 . . . . 
        . . . . f f f f f f . . . . 
        . . . . f f . . f f . . . . 
        `,img`
        . . . . . f f f f f . . . . 
        . . . f f f f f f f f f . . 
        . . f f f c f f f f f f . . 
        . . f f c f f f c f f f f . 
        . f c c f f f c c f f c f . 
        . f f f f 4 f f f f c c f . 
        . . f f 4 4 f f f f f f f . 
        . . . . 4 4 f b f f f f f . 
        . . . . 4 4 f 1 4 f f f . . 
        . . . . 4 4 4 4 4 f f f . . 
        . . . . . 4 4 4 4 e . . . . 
        . . . . . 2 2 2 4 4 . . . . 
        . . . . . 2 2 2 4 4 . . . . 
        . . . . . 6 6 6 6 6 . . . . 
        . . . . . f f f f f . . . . 
        . . . . . . f f f . . . . . 
        `,img`
        . . . . . f f f f f . . . . 
        . . . f f f f f f f f f . . 
        . . f f f c f f f f f f . . 
        . . f f c f f f c f f f f . 
        . f c c f f f c c f f c f . 
        . f f f f 4 f f f f c c f . 
        . . f f 4 4 f f f f f f f . 
        . . . . 4 4 f b f f f f f . 
        . . . . 4 4 f 1 4 f f f . . 
        . . . . 4 4 4 4 4 f f f . . 
        . . . . . 4 4 4 4 e . . . . 
        . . . . . 2 2 2 4 4 . . . . 
        . . . . . 2 2 2 4 4 . . . . 
        . . . . . 6 6 6 6 6 . . . . 
        . . . . . f f f f f . . . . 
        . . . . . f f . f f . . . . 
        `,img`
        . . . . . f f f f f . . . . 
        . . . f f f f f f f f f . . 
        . . f f f c f f f f f f . . 
        . . f f c f f f c f f f f . 
        . f c c f f f c c f f c f . 
        . f f f f 4 f f f f c c f . 
        . . f f 4 4 f f f f f f f . 
        . . . . 4 4 f b f f f f f . 
        . . . . 4 4 f 1 4 f f f . . 
        . . . . 4 4 4 4 4 f f f . . 
        . . . . . 4 4 4 4 e . . . . 
        . . . . . 2 2 2 4 4 . . . . 
        . . . . . 2 2 2 4 4 . . . . 
        . . . . . 6 6 6 6 6 . . . . 
        . . . . . f f f f f . . . . 
        . . . . . . f f f . . . . . 
        `],
    250,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Door, function (sprite, otherSprite) {
    animation.runImageAnimation(
    Door,
    [img`
        ffffffffffffffff
        feeeeeeeeeeeeeef
        feffffffffffffef
        fefeeeeeeeeeefef
        fefeeeeeeeeeefef
        fefeeeffffeeefef
        fefeef6666feefef
        fefef666666fefef
        fefef666666fefef
        fefef666666fefef
        fefef666666fefef
        fefeffffffffefef
        fefeeeeeeeeeefef
        fefeeeeeeeeeefef
        feffffffffffffef
        feeeeeeeeeeeeeef
        feeeeeeeeeee5def
        feeeeeeeeeee55ef
        feeeeeeeeeeeeeef
        feffffffffffffef
        fefeeeeeeeeeefef
        fefeeeeeeeeeefef
        fefeeeeeeeeeefef
        fefeeeeeeeeeefef
        fefeeeeeeeeeefef
        fefeeeeeeeeeefef
        fefeeeeeeeeeefef
        fefeeeeeeeeeefef
        fefeeeeeeeeeefef
        feffffffffffffef
        feeeeeeeeeeeeeef
        ffffffffffffffff
        `,img`
        ffffffffffffffff
        feeefefeffffffff
        feefeefeffffffff
        fefefffeffffffff
        feff66feffffffff
        fef666feffffffff
        fef66ffeffffffff
        fef6fefeffffffff
        feffefeeffffffff
        fefefeeeffffffff
        feffeeeeffffffff
        feeeeeeeffffffff
        feeeee4effffffff
        feeee55effffffff
        feeeee5effffffff
        feeeeeeeffffffff
        feeeeeeeffffffff
        feeeeffeffffffff
        feeefefeffffffff
        feefeefeffffffff
        fefeeefeffffffff
        fefeeefeffffffff
        fefeeefeffffffff
        fefeeefeffffffff
        fefeeefeffffffff
        fefeeefeffffffff
        fefeefeefeeeeeee
        fefefeefffffffff
        feffeefeeefeeeee
        fefeefffffffffff
        feeeffeeeeeeeeee
        ffffffffffffffff
        `,img`
        ffffffffffffffff
        feefffffffffffff
        feefffffffffffff
        feffffffffffffff
        ff6fffffffffffff
        ff6fffffffffffff
        ff6fffffffffffff
        ff6fffffffffffff
        feffffffffffffff
        feefffffffffffff
        feefffffffffffff
        feefffffffffffff
        feefffffffffffff
        feefffffffffffff
        feefffffffffffff
        fee5ffffffffffff
        fee5ffffffffffff
        feefffffffffffff
        feefffffffffffff
        feefffffffffffff
        feefffffffffffff
        feefffffffffffff
        feefffffffffffff
        feefffffffffffff
        feefffffffffffff
        feefffffffffffff
        feffeeeefeeeeeee
        feffffffffffffff
        ffeeeeeeeefeeeee
        ffffffffffffffff
        feeeefeeeeeeeeee
        ffffffffffffffff
        `,img`
        efffffffffffffff
        efffffffffffffff
        efffffffffffffff
        efffffffffffffff
        efffffffffffffff
        efffffffffffffff
        efffffffffffffff
        efffffffffffffff
        efffffffffffffff
        efffffffffffffff
        efffffffffffffff
        efffffffffffffff
        efffffffffffffff
        efffffffffffffff
        efffffffffffffff
        efffffffffffffff
        efffffffffffffff
        efffffffffffffff
        efffffffffffffff
        efffffffffffffff
        efffffffffffffff
        efffffffffffffff
        efffffffffffffff
        efffffffffffffff
        efffffffffffffff
        efffffffffffffff
        eeeeeeeefeeeeeee
        efffffffffffffff
        eeeeeeeeeefeeeee
        efffffffffffffff
        eeeeefeeeeeeeeee
        efffffffffffffff
        `],
    100,
    false
    )
    Door.destroy()
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Johnny,
    [img`
        . . . . f f f f f . . . . . 
        . . f f f f f f f f f . . . 
        . . f f f f f f c f f f . . 
        . f f f f c f f f c f f . . 
        . f c f f c c f f f c c f . 
        . f c c f f f f e f f f f . 
        . f f f f f f f 4 4 f f f . 
        . f f f f f b f 4 4 f f . . 
        . . f f f 4 1 f 4 4 . . . . 
        . . f f f 4 4 4 4 4 . . . . 
        . . . . e 4 4 4 4 . . . . . 
        . . . . 4 4 2 2 2 . . . . . 
        . . . . 4 4 2 2 2 . . . . . 
        . . . . 6 6 6 6 6 . . . . . 
        . . . . f f f f f f . . . . 
        . . . . f f . . f f . . . . 
        `,img`
        . . . . f f f f f . . . . . 
        . . f f f f f f f f f . . . 
        . . f f f f f f c f f f . . 
        . f f f f c f f f c f f . . 
        . f c f f c c f f f c c f . 
        . f c c f f f f e f f f f . 
        . f f f f f f f 4 4 f f f . 
        . f f f f f b f 4 4 f f . . 
        . . f f f 4 1 f 4 4 . . . . 
        . . f f f 4 4 4 4 4 . . . . 
        . . . . e 4 4 4 4 . . . . . 
        . . . . 4 4 2 2 2 . . . . . 
        . . . . 4 4 2 2 2 . . . . . 
        . . . . 6 6 6 6 6 . . . . . 
        . . . . f f f f f . . . . . 
        . . . . . f f f . . . . . . 
        `,img`
        . . . . f f f f f . . . . . 
        . . f f f f f f f f f . . . 
        . . f f f f f f c f f f . . 
        . f f f f c f f f c f f . . 
        . f c f f c c f f f c c f . 
        . f c c f f f f e f f f f . 
        . f f f f f f f 4 4 f f f . 
        . f f f f f b f 4 4 f f . . 
        . . f f f 4 1 f 4 4 . . . . 
        . . f f f 4 4 4 4 4 . . . . 
        . . . . e 4 4 4 4 . . . . . 
        . . . . 4 4 2 2 2 . . . . . 
        . . . . 4 4 2 2 2 . . . . . 
        . . . . 6 6 6 6 6 . . . . . 
        . . . . f f f f f . . . . . 
        . . . . f f . f f . . . . . 
        `,img`
        . . . . f f f f f . . . . . 
        . . f f f f f f f f f . . . 
        . . f f f f f f c f f f . . 
        . f f f f c f f f c f f . . 
        . f c f f c c f f f c c f . 
        . f c c f f f f e f f f f . 
        . f f f f f f f 4 4 f f f . 
        . f f f f f b f 4 4 f f . . 
        . . f f f 4 1 f 4 4 . . . . 
        . . f f f 4 4 4 4 4 . . . . 
        . . . . e 4 4 4 4 . . . . . 
        . . . . 4 4 2 2 2 . . . . . 
        . . . . 4 4 2 2 2 . . . . . 
        . . . . 6 6 6 6 6 . . . . . 
        . . . . f f f f f . . . . . 
        . . . . . f f f . . . . . . 
        `],
    250,
    true
    )
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Johnny,
    [img`
        . . . . . . . . . . . . . . 
        . . . . . f f f f . . . . . 
        . . . f f f f f c f f . . . 
        . . f f c f f f c f f f . . 
        . . f c c f f f f c f f . . 
        . . f c f f e e f f c f . . 
        . . f f f 4 4 e e f f f . . 
        . . f f d f 4 4 f d f f . . 
        . . f 4 1 f 4 4 f 1 4 f . . 
        . . . 4 4 4 4 4 4 4 4 . . . 
        . . f e 4 4 4 4 4 4 . . . . 
        . . 4 d d e 2 2 2 b 4 e . . 
        . . e d d e 2 2 2 2 d 4 . . 
        . . . e e f 6 6 6 6 4 4 . . 
        . . . . f f f f f f . . . . 
        . . . . f f . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . 
        . . . . . f f f f . . . . . 
        . . . f f f f f c f f . . . 
        . . f f c f f f c f f f . . 
        . . f c c f f f f c f f . . 
        . . f c f f e e f f c f . . 
        . . f f f 4 4 e e f f f . . 
        . . f f d f 4 4 f d f f . . 
        . . f 4 1 f 4 4 f 1 4 f . . 
        . . . 4 4 4 4 4 4 4 4 . . . 
        . . . . 4 4 4 4 4 4 . . . . 
        . . e 4 b 2 2 2 2 b 4 e . . 
        . . 4 d 2 2 2 2 2 2 d 4 . . 
        . . 4 4 6 6 6 6 6 6 4 4 . . 
        . . . . f f f f f f . . . . 
        . . . . f f . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . . 
        . . . . . f f f f . . . . . 
        . . . f f f f f c f f . . . 
        . . f f c f f f c f f f . . 
        . . f c c f f f f c f f . . 
        . . f c f f e e f f c f . . 
        . . f f f 4 4 e e f f f . . 
        . . f f d f 4 4 f d f f . . 
        . . f 4 1 f 4 4 f 1 4 f . . 
        . . . 4 4 4 4 4 4 4 4 . . . 
        . . . . 4 4 4 4 4 4 e f . . 
        . . e 4 b 2 2 2 e d d 4 . . 
        . . 4 d 2 2 2 2 e d d e . . 
        . . 4 4 6 6 6 6 6 e e . . . 
        . . . . f f f f f f . . . . 
        . . . . . . . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . . 
        . . . . . f f f f . . . . . 
        . . . f f f f f c f f . . . 
        . . f f c f f f c f f f . . 
        . . f c c f f f f c f f . . 
        . . f c f f e e f f c f . . 
        . . f f f 4 4 e e f f f . . 
        . . f f d f 4 4 f d f f . . 
        . . f 4 1 f 4 4 f 1 4 f . . 
        . . . 4 4 4 4 4 4 4 4 . . . 
        . . . . 4 4 4 4 4 4 . . . . 
        . . e 4 b 2 2 2 2 b 4 e . . 
        . . 4 d 2 2 2 2 2 2 d 4 . . 
        . . 4 4 6 6 6 6 6 6 4 4 . . 
        . . . . f f f f f f . . . . 
        . . . . f f . . f f . . . . 
        `],
    250,
    true
    )
})
let mySprite: Sprite = null
let gate: Sprite = null
let Johnny: Sprite = null
let Door: Sprite = null
Door = sprites.create(img`
    ffffffffffffffff
    feeeeeeeeeeeeeef
    feffffffffffffef
    fefeeeeeeeeeefef
    fefeeeeeeeeeefef
    fefeeeffffeeefef
    fefeef6666feefef
    fefef666666fefef
    fefef666666fefef
    fefef666666fefef
    fefef666666fefef
    fefeffffffffefef
    fefeeeeeeeeeefef
    fefeeeeeeeeeefef
    feffffffffffffef
    feeeeeeeeeeeeeef
    feeeeeeeeeee5def
    feeeeeeeeeee55ef
    feeeeeeeeeeeeeef
    feffffffffffffef
    fefeeeeeeeeeefef
    fefeeeeeeeeeefef
    fefeeeeeeeeeefef
    fefeeeeeeeeeefef
    fefeeeeeeeeeefef
    fefeeeeeeeeeefef
    fefeeeeeeeeeefef
    fefeeeeeeeeeefef
    fefeeeeeeeeeefef
    feffffffffffffef
    feeeeeeeeeeeeeef
    ffffffffffffffff
    `, SpriteKind.Door)
Door.setPosition(648, 208)
let open_door = sprites.create(img`
    ffffffffffffffff
    feeeeeeeeeeeeeef
    feffffffffffffef
    fefeeeeeeeeeefef
    fefeeeeeeeeeefef
    fefeeeffffeeefef
    fefeef6666feefef
    fefef666666fefef
    fefef666666fefef
    fefef666666fefef
    fefef666666fefef
    fefeffffffffefef
    fefeeeeeeeeeefef
    fefeeeeeeeeeefef
    feffffffffffffef
    feeeeeeeeeeeeeef
    feeeeeeeeeee5def
    feeeeeeeeeee55ef
    feeeeeeeeeeeeeef
    feffffffffffffef
    fefeeeeeeeeeefef
    fefeeeeeeeeeefef
    fefeeeeeeeeeefef
    fefeeeeeeeeeefef
    fefeeeeeeeeeefef
    fefeeeeeeeeeefef
    fefeeeeeeeeeefef
    fefeeeeeeeeeefef
    fefeeeeeeeeeefef
    feffffffffffffef
    feeeeeeeeeeeeeef
    ffffffffffffffff
    `, SpriteKind.Open_door)
open_door.setPosition(648, 208)
let Car = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . 2 2 2 2 2 2 2 2 2 . . 
    . . . . 2 c 2 2 2 2 2 2 2 4 2 . 
    . . . 2 c c 2 2 2 2 2 2 2 4 c 2 
    . d 2 4 c c 2 4 4 4 4 4 4 4 c c 
    d 2 2 4 c b e e e e e e e e 2 c 
    2 2 2 4 b e e b b b e e b b e 2 
    2 2 2 2 2 e b b b b e e b b b e 
    2 2 2 2 e 2 2 2 2 2 e e 2 2 2 e 
    2 d d 2 e f e e e f e e e e e e 
    d d 2 e e e f e e f e e e e e e 
    e e e e e e e f f f e e e e e e 
    e e e e f f f e e e e e f f f f 
    . . e f f f f f e e e f f f f f 
    . . . f f f f . . . . . f f f . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Car)
Car.setPosition(800, 407)
scene.cameraFollowSprite(Car)
Car.setVelocity(-50, 0)
Johnny = sprites.create(img`
    . . . . . . . . . . . . . . 
    . . . . . f f f f . . . . . 
    . . . f f f f f c f f . . . 
    . . f f c f f f c f f f . . 
    . . f c c f f f f c f f . . 
    . . f c f f e e f f c f . . 
    . . f f f 4 4 e e f f f . . 
    . . f f d f 4 4 f d f f . . 
    . . f 4 1 f 4 4 f 1 4 f . . 
    . . . 4 4 4 4 4 4 4 4 . . . 
    . . . . 4 4 4 4 4 4 . . . . 
    . . e 4 b 2 2 2 2 b 4 e . . 
    . . 4 d 2 2 2 2 2 2 d 4 . . 
    . . 4 4 6 6 6 6 6 6 4 4 . . 
    . . . . f f f f f f . . . . 
    . . . . f f . . f f . . . . 
    `, SpriteKind.Player)
Johnny.setPosition(760, 760)
gate = sprites.create(img`
    6 6 6 f 6 6 6 6 6 6 6 6 6 b c b 
    6 6 6 6 6 6 6 6 6 6 6 6 6 b c b 
    6 f 6 6 6 6 6 f 6 6 6 f 6 b c b 
    6 6 6 6 6 6 6 f 6 f f 6 6 b c b 
    6 6 6 6 6 6 6 6 f f 6 6 6 b c b 
    6 6 6 f 6 6 6 6 6 6 6 6 6 b b b 
    6 6 6 6 6 6 6 6 6 6 6 6 f b c b 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.B_Story)
gate.setPosition(648, 344)
tiles.setTilemap(tilemap`level1`)
pause(8075)
Car.setVelocity(0, 0)
pause(1000)
animation.runImageAnimation(
Car,
[img`
    ....................
    .....222222222......
    ....2c222222242.....
    ...2cc22222224c2....
    .d24cc24444444cc....
    d224cbeeeeeeee2c..d.
    2224beebbbeebbe2.d..
    22222ebbbbeebbbe..d.
    2222e22222ee222e.d..
    2dd2efeeefeeeeee.d..
    dd2eeefeefeeeeeed...
    eeeeeeefffeeeeee....
    eeeefffeeeeeffff....
    ..efffffeeefffff....
    ...ffff.....fff.....
    ....................
    `,img`
    ....................
    .....222222222......
    ....2c222222242.....
    ...2cc22222224c2....
    .d24cc24444444cc....
    d224cbeeeeeeee2c..d.
    2224beebbbeebbe2.d..
    22222ebbbbeebbbe..d.
    2222e22222ee222e..d.
    2dd2efeeefeeeeee.d..
    dd2eeefeefeeeeeed...
    eeeeeeefffeeeeee....
    eeeefffeeeeeffff....
    ..efffffeeefffff....
    ...ffff.....fff.....
    ....................
    `,img`
    ....................
    .....222222222......
    ....2c222222242.....
    ...2cc22222224c2....
    .d24cc24444444cc..d.
    d224cbeeeeeeee2c.d..
    2224beebbbeebbe2..d.
    22222ebbbbeebbbe..d.
    2222e22222ee222e..d.
    2dd2efeeefeeeeee.dd.
    dd2eeefeefeeeeeed...
    eeeeeeefffeeeeee....
    eeeefffeeeeeffff....
    ..efffffeeefffff....
    ...ffff.....fff.....
    ....................
    `,img`
    ....................
    .....222222222......
    ....2c222222242.....
    ...2cc22222224c2....
    .d24cc24444444cc...d
    d224cbeeeeeeee2c.dd.
    2224beebbbeebbe2..d.
    22222ebbbbeebbbe.dd.
    2222e22222ee222e....
    2dd2efeeefeeeeee.d..
    dd2eeefeefeeeeeed...
    eeeeeeefffeeeeee....
    eeeefffeeeeeffff....
    ..efffffeeefffff....
    ...ffff.....fff.....
    ....................
    `],
50,
true
)
pause(1000)
Johnny.setPosition(400, 407)
scene.cameraFollowSprite(Johnny)
story.printText("Argh! I hate this scrap, and now where am I?", 425, 450, 1, 15, story.TextSpeed.Slow)
controller.moveSprite(Johnny, 40, 40)
tiles.setWallAt(tiles.getTileLocation(25, 25), true)
