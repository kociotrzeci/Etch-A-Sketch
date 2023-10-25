let paintColor = 'black';
function color(pixel){
    pixel.setAttribute('style','background-color: '+ paintColor + ';');
}

function reset(){
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
    }
    applicationWindow.appendChild(row);
}

const putSize = document.querySelector(".slider");
const getSize = document.getElementById("size");
getSize.addEventListener('input', function(e){console.log("a")})



//applicationWindow.appendChild(square); 