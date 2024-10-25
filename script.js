const elements = {
    container: document.querySelector('.container'),
    colorPickerInput: document.querySelector('input[type="color"]'),
    get boxes() {
        return document.querySelectorAll('.box');
    },
    form: document.querySelector('form'),
    resetBtn: document.querySelector('.reset'),
    darkeningBtn: document.querySelector('.darkening'),
    random: document.querySelector('.random')
};

const appValues = {
    color: 'black',
    defaultMode: 'hover',
    currentMode: null,
    darken: false
};

// Function to draw the canvas with the given size
function drawCanvas(size = 16) {
    const container = elements.container;
    container.innerHTML = ''; // Clear the container before drawing
    const boxSize = 100 / size; // Declare boxSize correctly

    if (size >= 1 && size <= 100) {
        for (let i = 0; i < size * size; i++) {
            let box = document.createElement('div');
            box.className = 'box';
            box.style.cssText = `flex-basis: ${boxSize}%; height: ${boxSize}%; background-color: white;`;
            container.appendChild(box);
        }
    }

    console.log(`Canvas drawn with size: ${size}`);
    handleColors(); // Apply color handling based on the current mode
}

// Function to handle colors and events based on the current mode
function handleColors() {
    const colorPicker = elements.colorPickerInput;
    colorPicker.addEventListener('input', (e) => {
        appValues.color = e.target.value;
        console.log(`Color updated to: ${appValues.color}`);
    });

    const boxes = elements.boxes;

    // Function to apply color on hover
    function applyColorOnHover(e) {
        e.target.style.backgroundColor = appValues.color || 'black';
    }

    // Function to apply color on click
    function applyColorOnClick(e) {
        e.target.style.backgroundColor = appValues.color || 'black';
    }

    
    function darkenColor(e) {
        let currentOpacity = parseFloat(e.target.style.opacity) || 0.1;
        
        if (currentOpacity < 1) {
            e.target.style.opacity = Math.min(currentOpacity + 0.1 , 1)
            e.target.style.backgroundColor = appValues.color || 'black'
        }
    }
    function random(e) {
        
        const r = Math.floor(Math.random() * 256)
        const g = Math.floor(Math.random() * 256)
        const b = Math.floor(Math.random() * 256)

        e.target.style.backgroundColor = `rgb(${r,g ,b})`
        
    
    }

    // Remove existing event listeners to avoid duplicates
    function removeEvents() {
        boxes.forEach((box) => {
            box.removeEventListener('mouseover', applyColorOnHover);
            box.removeEventListener('click', applyColorOnClick);
            box.removeEventListener('click', darkenColor);
            box.removeEventListener('click', random)
        });
    }

    removeEvents();

    
    if (appValues.currentMode === 'click') {
        if (appValues.darken) {
            
            boxes.forEach((box) => {
                box.addEventListener('click', darkenColor); // Apply darkening effect on click
            });
        } else {
            boxes.forEach((box) => {
                box.addEventListener('click', applyColorOnClick);
            });
        }
    } else {
        boxes.forEach((box) => {
            box.addEventListener('mouseover', applyColorOnHover);
        });
    }

    console.log(`Color handling applied in ${appValues.currentMode} mode`);
}

// Function to handle form submission and apply the canvas size and mode
function getFormData() {
    const form = elements.form;
    form.addEventListener('submit', handleFormData);

    function handleFormData(e) {
        e.preventDefault();

        const formData = new FormData(form);
        const inputSize = formData.get('size');
        const size = parseInt(inputSize, 10) || 16;
        const inputChoice = formData.get('choice');
        const choice = inputChoice || 'hover';

        appValues.currentMode = choice;

        console.log(`Form submitted with size: ${size} and mode: ${choice}`);

        drawCanvas(size); 
        form.reset();
    }
}

// Reset function to clear the grid and reset the color picker
function reset() {
    const resetBtn = elements.resetBtn;
    resetBtn.addEventListener('click', () => {
        performReset();
    });
}

function performReset() {
    const boxes = elements.boxes;
    const darkeningBtn = elements.darkeningBtn;
    const randomBtn = elements.random
    appValues.currentMode = appValues.defaultMode;
    appValues.color = 'black';
    elements.colorPickerInput.value = '#000000';

    if (appValues.random) {
        randomBtn.style.cssText = `
            
            border: none;
            
            
        `;
    }

    if (appValues.darken) {
        appValues.darken = false;
        darkeningBtn.style.cssText = `
            
            border: none;
            
            
        `;
    }

    boxes.forEach((box) => {
        box.style.backgroundColor = 'white'; 
    });
    drawCanvas()
    console.log('Grid reset to default white color and mode reset to hover');
}


function darkening() {
    const darkeningBtn = elements.darkeningBtn;
    darkeningBtn.addEventListener('click', (e) => {
        const message = 'Darkening Mode will reset the canvas. \nIt is only available in Click Mode.\nEach click will shade the boxes from light to dark.';
        alert(message);
        console.warn(message);

        const promptMessage = prompt('Would you like to continue? Type Yes or No');
        const formattedMessage = promptMessage ? promptMessage.toLowerCase() : '';

        if (formattedMessage === 'yes' || formattedMessage === 'y') {
            performReset();
            if (true) {
                appValues.currentMode = 'click';
                appValues.darken = true;
                e.target.style.cssText = 'border: 2px solid yellow;';
                drawCanvas()
            }
           
        } else {
            appValues.darken = false;
            appValues.currentMode = appValues.defaultMode
            alert("Darkening mode canceled.");
            return;
        }
    });
}

function random() {
    const randomBtn = elements.random

    randomBtn.addEventListener('click', (e) => {
        const message = 'Random Mode will reset the canvas. \nIt is only available in Click Mode.\nEach click will be a random color.';
        alert(message);
        console.warn(message);

        const promptMessage = prompt('Would you like to continue? Type Yes or No');
        const formattedMessage = promptMessage ? promptMessage.toLowerCase() : '';

        if (formattedMessage === 'yes' || formattedMessage === 'y') {
            performReset()
            if (true) {
                appValues.currentMode = 'click';
                appValues.random = true;
                e.target.style.cssText =  
                `
                    
                    box-shadow: 5px 5px 1px white;
                     
                    ;
                
                `
            } else {
                appValues.random = false;
                alert("Darkening mode canceled.");
                return;
            }
        }

    })

}

// Initialize the application
function init() {
    appValues.currentMode = 'hover'; 
    drawCanvas(); 
    getFormData();
    reset();
    darkening();
    random()
}

// Initialize everything on DOMContentLoaded
document.addEventListener('DOMContentLoaded', init);
