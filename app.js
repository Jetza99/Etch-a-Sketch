const gridContainer = document.querySelector(".sketch_div");
//const gridBlock = document.createElement("div");



for(let i = 0; i <= 5; i++){
    const gridBlock = document.createElement("div");
    gridBlock.classList.add("grid_block");
    gridContainer.appendChild(gridBlock);
}






//loop through number of blocks example 16x16
//each time create a div gridBlock
//assign its class