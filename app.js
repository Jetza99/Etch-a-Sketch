const body = document.querySelector("body");
const gridContainer = document.querySelector(".sketch_div");
let containerHeight = document.querySelector(".sketch_div").clientHeight;
const colorPicker = document.querySelector("#pen_color");
const bgColorPicker = document.querySelector("#bg_color");
const eraserBtn = document.querySelector("#eraser_btn");
const rainbowBtn = document.querySelector("#rainbow_btn");
const resetBtn = document.querySelector("#reset_btn");

let colorPicked = colorPicker.value;
let bgColorPicked = bgColorPicker.value;
let rainbowArr = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"];

/* GENERATE BLOCKS INTO THE GRID */

//let numBlocks = parseInt(prompt("Give number of blocks"));
let numBlocks = 10;
let blockSize = Math.round(containerHeight / numBlocks);


//loop through number of blocks example 16x16
for(let i = 1; i <= numBlocks*numBlocks; i++){
    //each time create a div gridBlock
    const gridBlock = document.createElement("div");
    //assign its class
    gridBlock.classList.add("grid_block");
    //resize it
    gridBlock.style.cssText = `height: ${blockSize}px;`;
    gridContainer.appendChild(gridBlock);

}

//put the blocks inside the gird container
gridContainer.style.cssText = `grid-template-columns: repeat(auto-fill, ${blockSize}px);`;


colorPicker.addEventListener("input", () => {
    colorPicked = colorPicker.value;
});

bgColorPicker.addEventListener("input", () => {
    bgColorPicked = bgColorPicker.value;
    blocks.forEach(block => block.style.backgroundColor = `${bgColorPicked}`);

});

let paint = false;


const blocks = document.querySelectorAll(".grid_block");
blocks.forEach(block => block.style.backgroundColor = `${bgColorPicked}`);

blocks.forEach(block => block.addEventListener('mouseover', function(){
    block.style.backgroundColor = `${colorPicked}`;
}));

/*  RESET BUTTON FUNCTIONALITY */


resetBtn.addEventListener('click' , () => {
    resetBtn.classList.toggle("not_toggled");
    resetBtn.classList.toggle("toggled");
    setTimeout(function(){
        resetBtn.classList.toggle("not_toggled");
        resetBtn.classList.toggle("toggled");
    }, 100);
    blocks.forEach(block => block.style.backgroundColor = "White");
});


/*  ERASER BUTTON FUNCTIONALITY */
    let eraseButtonToggled = false;
    eraserBtn.addEventListener('click' , eraserClicked);


    function eraserClicked() {
        if((eraseButtonToggled == false) && (rainbowButtonToggled == false)){
            eraserBtn.classList.toggle("not_toggled");
            eraserBtn.classList.toggle("toggled");
            eraseButtonToggled = true;
            blocks.forEach(block => block.addEventListener('mouseover', function(){
                block.style.backgroundColor = `${bgColorPicked}`;
            }));
        } else if(eraseButtonToggled == true){
            eraserBtn.classList.toggle("not_toggled");
            eraserBtn.classList.toggle("toggled");
            eraseButtonToggled = false;
            blocks.forEach(block => block.addEventListener('mouseover', function(){
                block.style.backgroundColor = `${colorPicked}`;
        }));
    }

    if((eraseButtonToggled == false) && (rainbowButtonToggled == true)){
        rainbowBtn.classList.toggle("not_toggled");
        rainbowBtn.classList.toggle("toggled");
        rainbowButtonToggled = false;

        eraserBtn.classList.toggle("not_toggled");
        eraserBtn.classList.toggle("toggled");
        eraseButtonToggled = true;
        blocks.forEach(block => block.addEventListener('mouseover', function(){
            block.style.backgroundColor = `${bgColorPicked}`;
        }));
    }
}


/*  RAINBOW BUTTON FUNCTIONALITY */

function randomRainbowColor(){
    let x = 0;
    x = Math.floor(Math.random() * 7);
    return rainbowArr[x];
}
   
let rainbowButtonToggled = false;
rainbowBtn.addEventListener('click' , rainbowClicked);


function rainbowClicked(){
    if((rainbowButtonToggled == false) && (eraseButtonToggled == false)){
        rainbowBtn.classList.toggle("not_toggled");
        rainbowBtn.classList.toggle("toggled");
        rainbowButtonToggled = true;
        blocks.forEach(block => block.addEventListener('mouseover', function(){
            block.style.backgroundColor = `${randomRainbowColor()}`;
        }));
        
    }else if(rainbowButtonToggled == true){
        rainbowBtn.classList.toggle("not_toggled");
        rainbowBtn.classList.toggle("toggled");
        rainbowButtonToggled = false;
        blocks.forEach(block => block.addEventListener('mouseover', function(){
            block.style.backgroundColor = `${colorPicked}`;
        }));
}

if((rainbowButtonToggled == false) && (eraseButtonToggled == true)){
    eraserBtn.classList.toggle("not_toggled");
    eraserBtn.classList.toggle("toggled");
    eraseButtonToggled = false;
    rainbowBtn.classList.toggle("not_toggled");
    rainbowBtn.classList.toggle("toggled");
    rainbowButtonToggled = true;
    blocks.forEach(block => block.addEventListener('mouseover', function(){
        block.style.backgroundColor = `${randomRainbowColor()}`;
    }));
    
}

}

/*  RAINBOW BUTTON FUNCTIONALITY */
// blocks.forEach(block => block.block.style.backgroundColor = "White");




