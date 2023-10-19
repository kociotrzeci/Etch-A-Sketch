let size = 16;
const pixel = document.createElement("div");
pixel.id = "pixel";
pixel.textContent = "+";
const row = document.createElement("div");
const square = document.createElement("div");

for (let i = 0; i<16;i++)
{
    row.appendChild(pixel);
}
for (let i; i<16;i++)
{
    square.appendChild(row);
}

const applicationWindow = document.querySelector("#applicationWindow");
applicationWindow.textContent = "dupa";
applicationWindow.appendChild(square);