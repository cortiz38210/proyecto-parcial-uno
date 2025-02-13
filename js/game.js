//crear una escena
let gameScene = new Phaser.Scene('Game');

//PRELOAD
gameScene.preload = function(){
    //cargar las imagenes
    this.load.image('pasto', 'assets/background.png');
    this.load.image('oneguy', 'assets/oneguy.png');
    this.load.image('twoguy', 'assets/twoguy.png');
    this.load.image('threeguy', 'assets/threeguy.png');
    this.load.image('fourguy', 'assets/fourguy.png');
    this.load.image('yellowguy', 'assets/yellowguy.png');
    this.load.image('pinkguy', 'assets/pinkguy.png');
    this.load.image('objective', 'assets/objective.png');
};

//se llama una sola vez despues del preload
gameScene.create = function() {
    
    this.onedead = 0;
    this.twodead = 0;
    this.threedead = 0;    
    this.fourdead = 0;
    this.yellowdead = 0;
    this.pinkdead = 0;
    
    //crear el sprite del fondo
    let bg = this.add.sprite(500,231, 'pasto');
    
    //crear el sprite del fondo
    this.objective = this.add.sprite(500,300, 'objective');
    this.objective.setScale(1.75);
    
    //mono uno
    this.oneguy = this.add.sprite(500,230, 'oneguy');
    this.oneguy.depth = 1;
    this.oneguy.setScale(.3);
    
    //mono dos
    this.twoguy = this.add.sprite(410,231, 'twoguy');
    this.twoguy.depth = 1;
    this.twoguy.setScale(.3);
    
    //mono tres
    this.threeguy = this.add.sprite(590,231, 'threeguy');
    this.threeguy.depth = 1;
    this.threeguy.setScale(.3);
    
    //mono cuatro
    this.fourguy = this.add.sprite(500,330, 'fourguy');
    this.fourguy.depth = 1;
    this.fourguy.setScale(.3);
    
    //mono amarillo
    this.yellowguy = this.add.sprite(410,330, 'yellowguy');
    this.yellowguy.depth = 1;
    this.yellowguy.setScale(.3);
    
    //mono rosita
    this.pinkguy = this.add.sprite(500,231, 'pinkguy');
    this.pinkguy.depth = 1;
    this.pinkguy.setScale(.3);
    
    this.oneguy.setInteractive();
    this.oneguy.on('pointerdown', () =>{
        console.log('MATASTE AL MONO DE UN OJO');
        this.onedead = 1;
    })
    
    this.twoguy.setInteractive();
    this.twoguy.on('pointerdown', () =>{
        console.log('ERES UN MONSTRUO MATASTE AZUL');
        this.twodead = 1;
    })
    
    this.threeguy.setInteractive();
    this.threeguy.on('pointerdown', () =>{
        console.log('TODOS MENOS AL DE TRES OJOS');
        this.threedead = 1;
    })
    
    this.fourguy.setInteractive();
    this.fourguy.on('pointerdown', () =>{
        console.log('ok mataste al que si me daba miedo');
        this.fourdead = 1;
    })
    
    this.yellowguy.setInteractive();
    this.yellowguy.on('pointerdown', () =>{
        console.log('JUGADOR 2027 ELIMINADO');
        this.yellowdead = 1;
    })
    
    this.pinkguy.setInteractive();
    this.pinkguy.on('pointerdown', () =>{
        console.log('EL ROSA MURIO');
        this.pinkdead = 1;
    })
};

//updates que se llaman 60 veces por segundo
gameScene.update = function(){
    
    //movimiento unoguy
    this.oneguy.y += 10;
    this.oneguy.x += .5;
    if (this.oneguy.y == 460){
        this.oneguy.y = 0;
    };
    if (this.oneguy.x == 1000){
        this.oneguy.x = 0;
    };
    
    //movimiento dos gay
    this.twoguy.x += 10;
    this.twoguy.y -= 1;
    if (this.twoguy.x == 1000){
        this.twoguy.x = 0;
    };
    if (this.twoguy.y == 0){
        this.twoguy.y = 462;
    };
    
    //movimiento del tres gays
    this.threeguy.x -= 10;
    this.threeguy.y += 1;
    if (this.threeguy.y == 460){
        this.threeguy.y = 0;
    };
    if (this.threeguy.x == 0){
        this.threeguy.x = 1000;
    };
    
    //movimiento del cuatro guy
    this.fourguy.y -= 5;
    this.fourguy.x -= 5;
    if (this.fourguy.y == 0){
        this.fourguy.y = 460;
    };
    if (this.fourguy.x == 0){
        this.fourguy.x = 1000;
    };
     
    //movimiento del amarillo
    this.yellowguy.y -= 1;
    this.yellowguy.x -= .25;
    if (this.yellowguy.y == 0){
        this.yellowguy.y = 460;
    };
    if (this.yellowguy.x == 0){
        this.yellowguy.x = 1000;
    };
    
    //movimiento del rosa
    this.pinkguy.y += .25;
    this.pinkguy.x += .25;
    if (this.pinkguy.y == 460){
        this.pinkguy.y = 0;
    };
    if (this.pinkguy.x == 1000){
        this.pinkguy.x = 0;
    };
    
    //muerte del uno
    if (this.onedead == 1){
        this.oneguy.destroy();
    };
    
    //muerte del dos
    if (this.twodead == 1){
        this.twoguy.destroy();
    };
    
    //muerte del tres
    if (this.threedead == 1){
        this.threeguy.destroy();
    };
    
    //muerte del cuatro
    if (this.fourdead == 1){
        this.fourguy.destroy();
    };
    
    //muerte del amarillo
    if (this.yellowdead == 1){
        this.yellowguy.destroy();
    };
    
    //muerte del rosa
    if (this.pinkdead == 1){
        this.pinkguy.destroy();
    };
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

