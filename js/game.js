/**
*@version 1.0
*@date 14/02/2025
*@author PatBi9
*@title MATA A LOS MONOS CUADRADOS
*@brief Game where six square-shaped fast moving characters have to be clicked and killed
**/

let gameScene = new Phaser.Scene('Game');

gameScene.preload = function(){
    /**
    @brief Loads all the sprites
    **/
    this.load.image('pasto', 'assets/background.png'),this.load.image('oneguy', 'assets/oneguy.png'),this.load.image('twoguy', 'assets/twoguy.png'),this.load.image('threeguy', 'assets/threeguy.png'),this.load.image('fourguy', 'assets/fourguy.png'),this.load.image('yellowguy', 'assets/yellowguy.png'),this.load.image('pinkguy', 'assets/pinkguy.png'),this.load.image('objective', 'assets/objective.png');
};


gameScene.create = function() {
    /**
    @brief Indicates if characters are dead.
    **/
    this.onedead = 0;
    this.twodead = 0;
    this.threedead = 0;    
    this.fourdead = 0;
    this.yellowdead = 0;
    this.pinkdead = 0;
    
    /**
    @brief Creates grass background.
    **/
    this.bg = this.add.sprite(500,231, 'pasto');
    
    /**
    @brief Creates the text that shows the objective and changes their size.
    **/
    this.objective = this.add.sprite(500,300, 'objective');
    this.objective.setScale(1.75);
    
    /**
    @brief Creates one eyed character, establishes its depth, and changes their size.
    **/
    this.oneguy = this.add.sprite(500,230, 'oneguy');
    this.oneguy.depth = 1;
    this.oneguy.setScale(.3);
    
    /**
    @brief Creates two eyed character, establishes its depth, and changes their size.
    **/
    this.twoguy = this.add.sprite(410,231, 'twoguy');
    this.twoguy.depth = 1;
    this.twoguy.setScale(.3);
    
    /**
    @brief Creates three eyed character, establishes its depth, and changes their size.
    **/
    this.threeguy = this.add.sprite(590,231, 'threeguy');
    this.threeguy.depth = 1;
    this.threeguy.setScale(.3);
    
    /**
    @brief Creates four eyed character, establishes its depth, and changes their size.
    **/
    this.fourguy = this.add.sprite(500,330, 'fourguy');
    this.fourguy.depth = 1;
    this.fourguy.setScale(.3);
    
    /**
    @brief Creates yellow character, establishes its depth, and changes their size.
    **/
    this.yellowguy = this.add.sprite(410,330, 'yellowguy');
    this.yellowguy.depth = 1;
    this.yellowguy.setScale(.3);
    
    /**
    @brief Creates pink character, establishes its depth, and changes their size.
    **/
    this.pinkguy = this.add.sprite(500,231, 'pinkguy');
    this.pinkguy.depth = 1;
    this.pinkguy.setScale(.3);
    
    /**
    @brief Turns one eyed guy interactive, console logs a message when clicked, and turns their dead variable to true.
    **/
    this.oneguy.setInteractive();
    this.oneguy.on('pointerdown', () =>{
        console.log('MATASTE AL MONO DE UN OJO');
        this.onedead = 1;
    })
    
    /**
    @brief Turns two eyed guy interactive, console logs a message when clicked, and turns their dead variable to true.
    **/
    this.twoguy.setInteractive();
    this.twoguy.on('pointerdown', () =>{
        console.log('ERES UN MONSTRUO MATASTE AZUL');
        this.twodead = 1;
    })
    
    /**
    @brief Turns three eyed guy interactive, console logs a message when clicked, and turns their dead variable to true.
    **/
    this.threeguy.setInteractive();
    this.threeguy.on('pointerdown', () =>{
        console.log('TODOS MENOS AL DE TRES OJOS');
        this.threedead = 1;
    })
    
    /**
    @brief Turns four eyed guy interactive, console logs a message when clicked, and turns their dead variable to true.
    **/
    this.fourguy.setInteractive();
    this.fourguy.on('pointerdown', () =>{
        console.log('ok mataste al que si me daba miedo');
        this.fourdead = 1;
    })
    
    /**
    @brief Turns yellow guy interactive, console logs a message when clicked, and turns their dead variable to true.
    **/
    this.yellowguy.setInteractive();
    this.yellowguy.on('pointerdown', () =>{
        console.log('JUGADOR 2027 ELIMINADO');
        this.yellowdead = 1;
    })
    
    /**
    @brief Turns pink guy interactive, console logs a message when clicked, and turns their dead variable to true.
    **/
    this.pinkguy.setInteractive();
    this.pinkguy.on('pointerdown', () =>{
        console.log('EL ROSA MURIO');
        this.pinkdead = 1;
    })
};

gameScene.update = function(){
    
    /**
    @brief Sets one eyed guy's movement and teleports them to the opposite side when they reach the screen border.
    **/
    this.oneguy.y += 10;
    this.oneguy.x += .5;
    if (this.oneguy.y == 460){
        this.oneguy.y = 0;
    };
    if (this.oneguy.x == 1000){
        this.oneguy.x = 0;
    };
    
    /**
    @brief Sets two eyed guy's movement and teleports them to the opposite side when they reach the screen border.
    **/
    this.twoguy.x += 10;
    this.twoguy.y -= 1;
    if (this.twoguy.x == 1000){
        this.twoguy.x = 0;
    };
    if (this.twoguy.y == 0){
        this.twoguy.y = 462;
    };
    
    /**
    @brief Sets three eyed guy's movement and teleports them to the opposite side when they reach the screen border.
    **/
    this.threeguy.x -= 10;
    this.threeguy.y += 1;
    if (this.threeguy.y == 460){
        this.threeguy.y = 0;
    };
    if (this.threeguy.x == 0){
        this.threeguy.x = 1000;
    };
    
    /**
    @brief Sets four eyed guy's movement and teleports them to the opposite side when they reach the screen border.
    **/
    this.fourguy.y -= 5;
    this.fourguy.x -= 5;
    if (this.fourguy.y == 0){
        this.fourguy.y = 460;
    };
    if (this.fourguy.x == 0){
        this.fourguy.x = 1000;
    };
     
    /**
    @brief Sets yellow guy's movement and teleports them to the opposite side when they reach the screen border.
    **/
    this.yellowguy.y -= 1;
    this.yellowguy.x -= .25;
    if (this.yellowguy.y == 0){
        this.yellowguy.y = 460;
    };
    if (this.yellowguy.x == 0){
        this.yellowguy.x = 1000;
    };
    
    /**
    @brief Sets pink guy's movement and teleports them to the opposite side when they reach the screen border.
    **/
    this.pinkguy.y += .25;
    this.pinkguy.x += .25;
    if (this.pinkguy.y == 460){
        this.pinkguy.y = 0;
    };
    if (this.pinkguy.x == 1000){
        this.pinkguy.x = 0;
    };
    
    /**
    @brief Destroys one eyed guy's sprite when their dead variable is true.
    **/
    if (this.onedead == 1){
        this.oneguy.destroy();
    };

    /**
    @brief Destroys two eyed guy's sprite when their dead variable is true.
    **/
    if (this.twodead == 1){
        this.twoguy.destroy();
    };
    
    /**
    @brief Destroys three eyed guy's sprite when their dead variable is true.
    **/
    if (this.threedead == 1){
        this.threeguy.destroy();
    };
    
    /**
    @brief Destroys four eyed guy's sprite when their dead variable is true.
    **/
    if (this.fourdead == 1){
        this.fourguy.destroy();
    };
    
    /**
    @brief Destroys yellow guy's sprite when their dead variable is true.
    **/
    if (this.yellowdead == 1){
        this.yellowguy.destroy();
    };
    
    /**
    @brief Destroys pink guy's sprite when their dead variable is true.
    **/
    if (this.pinkdead == 1){
        this.pinkguy.destroy();
    };
};

let config = {
    type: Phaser.AUTO,
    width: 1000,
    height: 462,
    scene: gameScene
};

let game = new Phaser.Game(config);

