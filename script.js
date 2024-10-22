const constants = {
    container: document.querySelector('.container'),
    currentColor: "black",
    defaultGridSize: 16,
    get boxes() {
        return document.querySelectorAll('.box'); // Dynamically get boxes after creation
    },
    width: document.querySelector('.container').offsetWidth,
    colorPicker: document.querySelector('input[type="color"]'),
    resetBtn: document.querySelector('.reset'),
    form: document.querySelector('form'),
    currentMode: 'click',
    darkeningBtn : document.querySelector('.darkening')
};

function createDivs(number = 16) {
    const container = constants.container;
    container.innerHTML = '';
    const boxSize = 100 / number;
    if (number >= 1 && number <= 100) {
        for (let i = 0; i < number * number; i++) { 
            let div = document.createElement('div');
            div.className = "box";
            div.style.cssText = `
                flex-basis: ${boxSize}%; 
                height: ${boxSize}%;
                background-color: offwhite;
            `;
            container.appendChild(div);
        }
    } else {
        alert("The valid range is 1 to 100")
    }
}

function handleColorChange(color = 'black') {
    const colorPicker = constants.colorPicker;

    function updateColor(event) {
        color = colorPicker.value;
    }

    colorPicker.addEventListener('input', updateColor);
}

function addEventListeners() {
    const boxes = constants.boxes;

    boxes.forEach(box => {
        box.addEventListener('mouseover', (event) => {
            if (constants.currentMode === 'hover') {
                event.target.style.backgroundColor = constants.colorPicker.value;
            }
        });

        box.addEventListener('click', (event) => {
            if (constants.currentMode === 'click') {
                event.target.style.backgroundColor = constants.colorPicker.value;
            }
        });
    });
}

function getFormData(callback) {
    const form = constants.form;

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        let size = formData.get('size');
        let choice = formData.get('choice');

        

        constants.currentMode = choice; // Update mode

        if (typeof callback === 'function') {
            callback(size, choice);
        }

        form.reset();
    });
}

function handleFormData(size, choice) {
    constants.choice = choice;
    createDivs(parseInt(size));
    addEventListeners(); 
}


function resetBtn() {
    const resetBtn = constants.resetBtn;
    const colorPicker = constants.colorPicker

    resetBtn.addEventListener('click', ()=> {
        const boxes = constants.boxes

        boxes.forEach((box) => {
            box.style.backgroundColor = 'white';
        
    })
    colorPicker.value = 'black'
    })
}

function darkening() {
    const darkeningBtn = constants.darkeningBtn;

    darkeningBtn.addEventListener('click', () => {
        alert("Darkening Mode will Reset the Canvas. \nDarkening Mode is Only Available in Click Mode. \nEach click will shade the boxes from light to dark.");
        const userChoice = prompt("Would You Like To Continue? Type Yes or No")

        if ( userChoice && userChoice.toLowerCase() === 'yes') {
            resetBtn()

        } else {
            return;
        }

    })
}
createDivs();
handleColorChange();
getFormData(handleFormData);
resetBtn()
darkening()
