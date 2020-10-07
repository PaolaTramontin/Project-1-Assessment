//variables


let plusButton = document.getElementById("plus")
let minusButton = document.getElementById("minus")
let input = document.querySelector("input")




const increase = () => {
    input.value = parseInt(input.value) +1
    if (input.value< 0){   //this didnt work
        input.classList.add("red")
    }
}

plusButton.addEventListener("click", increase)


//short way 
minusButton.addEventListener("click", ()=> {
    input.value = parseInt(input.value) -1;
    
})



