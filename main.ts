function Button (Start: string) {
	
}
let A: Sprite = null
info.setScore(0)
music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 1, 4291, 34, 207, 1492, SoundExpressionEffect.Warble, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999992222299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999922222229999922999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999992299999999999999222999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999229999999999999999999229999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999922999999999999999999999992299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999299999999999999999999999999922999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999992999999999999999999999999999999299999999999999999999999999999999999922222299999999999999999999999999999999999999999999992999999999999999
    9999999999999999999999929999999999999999999999999999999929999999999999999999999999999999992999999922299999999999999999999999999999999999999999922999999999999999
    9999999999999999999999299999999999999999999999999999999929999999999999999999999999999999992999999999922999999999999999999999999999999999999999922999999999999999
    9999999999999999999999999999999999999999999999999999999992999999999999999999999999999999992999999999999299999999999999999999992999999999999999922999999999999999
    9999999999999999999999999999999999999999999999999999999999299999999999999999999999999999992999999999999929999999999999999999992999999999999999292999999999999999
    9999999999999999999999999999999999999999999999999999999999929999999999999999999999999999992999999999999929999999999999999999992999999999999999299299999999999999
    9999999999999999999999999999999999999999999999999999999999992999999999999999999999999999992999999999999992999999999999999999922999999999999999299299999999999999
    9999999999999999999999999999999999999999999999999999999999999299999999999999999999999999992999999999999992999999999999999999922999999999999992999299999999999999
    9999999999999999999999999999999999999999999999999999999999999299999999999999999999999999929999999999999999299999999999999999292999999999999992999299999999999999
    9999999999999999999999999999999999999999999999999999999999999299999999999999999999999999929999999999999999299999999999999999292999999999999992999929999999999999
    9999999999999999999999999999999999999999999999999999999999999299999999999999999999999999929999999999999999299999999999999992992999999999999929999929999999999999
    9999999999999999999999999999999999999999999999999999999999999299999999999999999999999999929999999999999999299999999999999992992999999999999929999929999999999999
    9999999999999999999999999999999999999999999999999999999999999929999999999999999999999999929999999999999999299999999999999929992999999999999929999929999999999999
    9999999999999999999999999999999999999999999999999999999999999929999999999999999999999999929999999999999999299999999999999929992999999999999929999992999999999999
    9999999999999999999999999999999999999999999999999999999999999929999999999999999999999999929999999999999999299999999999999299992999999999999929999992999999999999
    9999999999999999999999999999999999999999999999999999999999999929999999999999999999999999929999999999999999299999999999999299992999999999999299999992999999999999
    9999999999999999999999999999999999999999999999999999999999999299999999999999999999999999929999999999999999299999999999992999999299999999999299999992999999999999
    9999999999999999999999999999999999999999999999999999999999992299999999999999999999999999929999999999999999929999999999992999999299999999999299999999299999999999
    9999999999999999999999999999999999999999999999999999999999922999999999999999999999999999929999999999999999929999999999992999999299999999999299999999299999999999
    9999999999999999999999999999999999999999999999999999999999299999999999999999999999999999929999999999999999929999999999929999999299999999999299999999299999999999
    9999999999999999999999999999999999999999999999999999999999299999999999999999999999999999929999999999999999929999999999299999999299999999999299999999929999999999
    9999999999999999999999999999999999999999999999999999999992999999999999999999999999999999929999999999999999929999999999299999999929999999992999999999929999999999
    9999999999999999999999999999999999999999999999999999999992999999999999999999999999999999929999999999999999929999999992999999999929999999992999999999929999999999
    9999999999999999999999999999999999999999999999999999999929999999999999999999999999999999929999999999999999299999999992999999999929999999992999999999929999999999
    9999999999999999999999999999999999999999999999999999999299999999999999999999999999999999929999999999999999299999999929999999999992999999992999999999929999999999
    9999999999999999999999999999999999999999999999999999992999999999999999999999999999999999929999999999999992999999999929999999999992999999992999999999929999999999
    9999999999999999999999999999999999999999999999999999992999999999999999999999999999999999929999999999999992999999999929999999999999299999929999999999992999999999
    9999999999999999999999999999999999999999999999999999929999999999999999999999999999999999929999999999999992999999999299999999999999299999929999999999992999999999
    9999999999999999999999999999999999999999999999999992299999999999999999999999999999999999929999999999999929999999999299999999999999299999929999999999992999999999
    9999999999999999999999999999999999999999999999999229999999999999999999999999999999999999929999999999992299999999999299999999999999299999929999999999992999999999
    9999999999999999999999999999999999999999999999992999999999999999999999999999999999999999929999999999929999999999992999999999999999299999929999999999992999999999
    9999999999999999999999999999999999999999999999929999999999999999999999999999999999999999929999999992299999999999992999999999999999299999929999999999992999999999
    9999999999999999999999999999999999999999999999299999999999999999999999999999999999999999929999999929999999999999992999999999999999299999929999999999999299999999
    9999999999999999999999999999999999999999999992999999999999999999999999999999999999999999929999999299999999999999992999999999999999929999929999999999999299999999
    9999999999999999999999999999999999999999999229999999999999999999999999999999999999999999299999922999999999999999992999999999999999929999929999999999999299999999
    9999999999999999999999999999999999999992222999999999999999999999999999999999999999999999299992299999999999999999999999999999999999992999929999999999999929999999
    9999999999999999999999999999999999999229999999999999999999999999999999999999999999999999222229999999999999999999999999999999999999992999299999999999999929999999
    9999999999999999999999999999992222222999999999999999999999999999999999999999999999999922299999999999999999999999999999999999999999992999299999999999999922999999
    9999999999999999999999222222222222222222229999999999999999999999999999999999999999992229999999999999999999999999999999999999999999992992999999999999999999999999
    9999999999999999999999999999999999999999992222222222222222222222222222299999999999999999999999999999999999999999999999999999999999992992999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999992999999999999999999999999999999999999999999999999999999999999992992999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999992992999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999992992999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999229999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999229999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999922222222222222222222222222222222222222229999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999922222222222222222222222222222222222222229999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999222222222222222222222222222222222222222229999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999222222222222222222222222222222222222222229999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999222222222222111112222222222222222222222229999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999222222222222211111122222222222222222222229999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999222222222222211111111222222222222222222229999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999222222222222221111122222222222222222222229999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999222222222222221111222222222222222222222229999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999222222222222221112222222222222222222222229999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999222222222222221222222222222222222222222999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999222222222222222222222222222222222222999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999992222222222222222222299999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999922222222229999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999997777777777999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999997777777777999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999997777777777999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999997777777777999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999997777777777999999999999999999999999999988888881888888888888888888888888888899999919999999999999999999999999999999999999999999999999
    9999999999999999999999999999997777777777999999999999999999999999999988888881888888188888811118888888888818888818888888888888888888888888888899999999999999999999
    9999999999999999999999999999997777777777999999999999999999999999999988888881188888188881188811888888888818888818888888888888888888888888888899999999999999999999
    9999999999999999999999999999997777777777999999999999999999999999999988888881188888188811888881888888888118888181888888881111188888888888888899999999999999999999
    9999999999999999999999999999997777777777799999999999999999999999999988888881188881888111188881888188888118888188888888118888188888888888888899999999999999999999
    9999999999999999999999999999997777777777799999999999999999999999999988888881188881888118118881888188888118888188888888188888111888888888888899999999999999999999
    9999999999999999999999999999997777777777799999999999999999999999999888888881818881888818811181888188881811881188888888188888111888888888888889999999999999999999
    9999999999999999999999999999997777777777799999999999999999999999999888888881881881888818881111888188881881881888888881888888181888888888888889999999999999999999
    9999999999999999999977777777997777777777799999999999999999999999999888888888881118888811888888888818818881881888888881888881181888888888888889999999999999999999
    9999999999999999999977777777777777777777779999999999999999999999999888888888888118888881188888888818818888181888888881888881881888888888888889999999999999999999
    9999999999999999999977777777777777777777777777777779999999999999999888888888888118888888811111888881188888181888888881888818881888888888888889999999999999999999
    9999999999999999999977777777777777777777777777777779999999999999999888888888888888888888888888188881188888818888888881111188881888888888888889999999999999999999
    9999999999999999999977777777777777777777777777777779999999999999999888888888888888888888888888888888888888888888888888888888181188888888888889999999999999999999
    9999999999999999999977777777777777777777777777777779999999999999999999999999999999999999999999888888888888888888888888888881111188888888888889999999999999999999
    9999999999999999999977777777777777777777777777777779999999999999999999999999999999999999999999999999999999988888888888881111888888888889999999999999999999999999
    9999999999999999999977777777777777777777777777777779999999999999999999999999999999999999999999999999999999998888888888111188888888888889999999999999999999999999
    9999999999999999999977777777777777777777777777777777999999999999999999999999999999999999999999999999999999999888881111118888888888888889999999999999999999999999
    9999999999999999999977777777777777777777777777777777999999999999999999999999999999999999999999999999999999998888888888888888888888888899999999999999999999999999
    9999999999999999999977777777777eeeeee777777777777777999999999999999999999999999999999999999999999999999999998888888888888888888888888899999999999999999999999999
    9999999999999999999977777777777eeeeeee77777777777777999999999999999999999999999999999999999999999999999999998888888888888888888888899999999999999999999999999999
    9999999999999999999977777777777eeeeeeee7777777777777999999999999999999999999999999999999999999999999999999998888888888888888888999999999999999999999999999999999
    9999999999999999999977777777777eeeeeeee7777777777779999999999999999999999999999999999999999999999999999999998888888888888888999999999999999999999999999999999999
    9999999999999999999999999999977777777777777777779999999999999999999999999999999999999999999999999999999999999888888888889999999999999999999999999999999999999999
    9999999999999999999999999999799eeeeeeee9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999eeeeeeee9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999eeeeeeee9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999eeeeeeee9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999eeeeeeee9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999eeeeeeee9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999eeeeeeee9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999eeeeeee9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999eeeeeee9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999eeeeeee9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999eeeeeee9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
`)
controller.player1.moveSprite(A, 100, 100)
