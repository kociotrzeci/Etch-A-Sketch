let paintColor = 'black';
function color(pixel){
    pixel.setAttribute('style','background-color: '+ paintColor + ';');
}

function reset(){
    while (applicationWindow.lastChild) applicationWindow.removeChild(applicationWindow.lastChild)
    for (let i = 0; i<size; i++){
        const row = document.createElement("div");
        row.id = "row";
        row.classList.add("applicationWidth");
        for(let j = 0; j<size; j++)
        {
            const pixel = document.createElement("div");
            pixel.id = "pixel";
            pixel.addEventListener('mouseover',function(){
                color(this);
            });
            row.appendChild(pixel);
            console.log(j);
        }
        applicationWindow.appendChild(row);
    }
    pixels = document.querySelectorAll("#pixel");
    console.log(1);
    pixels.forEach(element => {
        element.setAttribute('style','background-color: white;')   
    });

    }



let size = 16;
const resetButton = document.getElementById("reset");
resetButton.addEventListener('click',reset)
const blackButton = document.getElementById("black");
blackButton.addEventListener('click',function(e){paintColor = 'black'})
const redButton = document.getElementById("red");
redButton.addEventListener('click',function(e){paintColor = 'red';})
const whiteButton = document.getElementById("white");
whiteButton.addEventListener('click',function(e){paintColor = 'white'})


const square = document.createElement("div");
const applicationWindow = document.querySelector("#applicationWindow");


reset();
const getSize = document.getElementById("slider");
const putSize = document.getElementById("size");
getSize.addEventListener('input', function(e){
    putSize.textContent = this.value;
    size = this.value;
})



//applicationWindow.appendChild(square); 