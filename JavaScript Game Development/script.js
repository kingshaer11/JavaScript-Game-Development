document.addEventListener('DOMContentLoaded', function() {
    var canvas = document.getElementById('canvas1');
    var ctx = canvas.getContext('2d');
   const CANVAS_WIDTH = canvas.clientWidth = 600;
   const CANVAS_HEIGHT = canvas.clientHeight = 600;
    
    const PlayerImage = new Image();
    PlayerImage.src = 'shadow_dog.png';
    const spriteWidth = 573;
    const spriteHeight = 523;
    let frameX = 0;
    let FrameY = 1;
    let gameFrame = 0;
    const staggerFrame = 5;
    cos
    const animationStates = [
        {
            name: 'idle',
            frames: 7,
        },
        {
            name:'jump',
            frames: 7,
        },
        {
            name:'fall',
            frames: 8,
        },
        {
            name:'run',
            frames: 9,
        },
        {
            name:'dizzy',
            frames: 11,
        },
        {
            name:'sit',
            frames: 5,
        },
        {
            name:'roll',
            frames: 7,
        },
        {
            name:'bite',
            frames: 7,
        },
        {
            name:'ko',
            frames: 12,
        },
        {
            name:'getHit',
            frames: 4,
        }
    ];
    animationStates.forEach((state,index) => {
        let frames ={
            loc:[],
        }
        for(let j = 0; j < state.frames; j++){
            let positionX = j * spriteWidth;
            let positionY = index * spriteHeight;
            frames.loc.push({x: positionX, y: positionY});
        }
        spriteAnimations[state.name] = frames;
    });
    console.log(animationStates);

    function animate(){
        ctx.clearRect(0 ,0 ,CANVAS_WIDTH,CANVAS_HEIGHT);
        //ctx.fillRect(10,10,20,10);
        //ctx.drawImage(PlayerImage ,0,0);
        let position = Math.floor(gameFrame/staggerFrame) % animationStates["jump"];
        let frameX = spriteWidth * position;
        let FrameY = spriteAnimations["jump"].loc[position].y;
        ctx.drawImage(PlayerImage, frameX, FrameY, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);

        gameFrame++;
        requestAnimationFrame(animate);
    };
    animate();
});