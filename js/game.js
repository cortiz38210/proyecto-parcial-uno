//crear una escena
let gameScene = new Phaser.Scene('Game');

//PRELOAD
gameScene.preload = function(){
    //cargar las imagenes
    this.load.image('pasto', 'assets/background.png');
    this.load.image('aldeano', 'assets/villager.png');
    this.load.image('dragon', 'assets/demon.png');
    this.load.image('tesoro', 'assets/treasure.png');
};

//se llama una sola vez despues del preload
gameScene.create = function() {
    //crear el sprite del fondo
    let bg = this.add.sprite(500,231, 'pasto');
    
    //crear jugador
    let villager = this.physics.add.sprite(100,230, 'aldeano');
    villager.depth = 1;
    villager.setScale(.35);
    
    //crear al enemigo
    let dragon1 = this.add.sprite(500,100, 'dragon');
    dragon1.depth = 1;
    dragon1.setScale(.35);
    
    //segundo enemigo queeeee
    let dragon2 = this.add.sprite(400,100, 'dragon');
    dragon2.depth = 1;
    dragon2.setScale(.35);
    
    //tercer enemigo aaaaa
    let dragon3 = this.add.sprite(600,100, 'dragon');
    dragon3.depth = 1;
    dragon3.setScale(.35);
    
    //asignar botoncitos
    const keyCodes = Phaser.Input.Keyboard.KeyCodes;
    this.keyup = this.input.keyboard.addKey(keyCodes.UP);
    this.keydown = this.input.keyboard.addKey(keyCodes.DOWN);
    this.keyleft = this.input.keyboard.addKey(keyCodes.LEFT);
    this.keyright = this.input.keyboard.addKey(keyCodes.RIGHT);
};

//acomodar la configuracion del juego
let config = {
    type: Phaser.AUTO,
    width: 1000,
    height: 462,
    scene: gameScene
};

//crear un nuevo juego y pasarle la configuracion
let game = new Phaser.Game(config);

