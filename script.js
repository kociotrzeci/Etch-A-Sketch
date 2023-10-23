function color(){
    console.log("test");
}


let size = 32;
const pixel = document.createElement("div");
pixel.id = "pixel";
pixel.addEventListener('click',color);


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
        pixel.addEventListener('click',color);
        row.appendChild(pixel);
    }
    applicationWindow.appendChild(row);
}





//applicationWindow.appendChild(square); 