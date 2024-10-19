const container = document.querySelector(".container");

function createDivs() {
    for (let i = 0; i < 256; i++) { // 16 x 16 = 256 divs
        let div = document.createElement('div');
        div.className = "box"
        container.appendChild(div);
    }
}

function colorChangeOnHover() {
    let boxes = container.querySelectorAll('.box')

    boxes.forEach((box) => {
        box.addEventListener('mouseover' , () => {
            box.style.cssText = "background-color: black;"
        })
    })
    
}

function resetBoxes() {
    let boxes = container.querySelectorAll('.box')
    const resetBtn = document.querySelector('.reset')
    resetBtn.addEventListener('click', (e) => {
        boxes.forEach((box) => {
            box.style.cssText = "background-color: white;"
            console.log(e.target);
        })
    }) 
    
}
createDivs();
colorChangeOnHover()
resetBoxes()
console.log(container);