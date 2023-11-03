console.log("Let's get this party started!");

const searchButton = document.getElementById('search');
searchButton.addEventListener('click',async function(e){
    e.preventDefault();

    // accessing input value
    const input = document.querySelector('input');
    let gifUrl = input.value;
    let gifStuff = await axios.get(gifUrl);
    console.log(gifStuff);

    // append the gif
    const container = document.getElementById("gifContainer");
    container.appendChild(gifStuff.data);

    // form reset
    const form = document.querySelector('form');
    form.reset();

    // remove button functionality
    const remove = document.getElementById("remove");
    remove.addEventListener('click', function(e){
        e.preventDefault();
        container.children.remove();
    })
})


// async function addGif(){
//     const input = document.querySelector('input');
//     let gifUrl = input.value;
//     let gifStuff = await axios.get(gifUrl);
//     console.log(gifStuff);

//     // form reset
//     const form = document.querySelector('form');
//     form.reset();
// }