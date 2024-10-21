const container = document.querySelector(".container");
let currentColor = "black";


function createDivs() {
    for (let i = 0; i < 256; i++) { // 16 x 16 = 256 divs
        let div = document.createElement('div');
        div.className = "box";
        container.appendChild(div);
    }
}

function colorChangeOnHover() {
    let boxes = container.querySelectorAll('.box');
    boxes.forEach((box) => {
        box.addEventListener('mouseover', () => {
            box.style.cssText = `background-color: ${currentColor};`;
        });
    });
}

function performReset() {
    let boxes = container.querySelectorAll('.box');
    boxes.forEach((box) => {
        box.style.cssText = "background-color: white;";
    });
    currentColor = "black"; 
}



function resetBoxes() {
    const resetBtn = document.querySelector('.reset');
    resetBtn.addEventListener('click', (e) => {
        performReset()
    });
}

function changeColor() {
    const colorPicker = document.querySelector('input[type="color"]');
    colorPicker.addEventListener('input', (event) => {
        currentColor = event.target.value;
    });
}


function getFormData(callBack) {
    const form = document.querySelector('form')
    
    form.addEventListener('submit', (event) => {
        event.preventDefault()


        const formData = new FormData(form)
        
         let size = formData.get("size")
         let choice = formData.get("choice")
        
         console.log(size, choice);
        if (callBack) {
            callBack(x,y)
        }
       
    })
}




function darkenBoxes() {
    const colors = [
        "#FAFAFA",
        "#F0F0F0",
        "#D9D9D9",
        "#BFBFBF",
        "#808080",
        "#404040",
        "#1A1A1A",
        "#000000"
    ];

    const darkeningBtn = document.querySelector('.darkening');

    darkeningBtn.addEventListener('click', () => {
        alert("DARKENING IS ONLY AVAILABLE WITH THE COLOR BLACK. SO YOUR CURRENT STYLES WILL BE RESET");
        let choice = prompt("Would You like to reset the canvas to use the darkening feature? \n enter YES or NO")
        console.log(choice);

        if (choice && choice.toLowerCase() === "yes") {
            performReset()
        } else {
            return
        }

        // let boxes = doucment.querySelectorAll('.box') 

        // boxes.forEach((box) => {
        //     box.addEventListener('mouseover', ()=> {

        //     })
        // })
        
    });
}


createDivs();
colorChangeOnHover();
resetBoxes();
changeColor();
darkenBoxes();
getFormData((size, choice) => {
    x = size
    y = choice
})
