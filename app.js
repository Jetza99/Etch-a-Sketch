const gridContainer = document.querySelector(".sketch_div");
let containerHeight = document.querySelector(".sketch_div").clientHeight;
//const gridBlock = document.createElement("div");


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



const blocks = document.querySelectorAll(".grid_block");

blocks.forEach(block => block.addEventListener("mouseover", (e) => {
    block.style.backgroundColor = "blueviolet";

}));


