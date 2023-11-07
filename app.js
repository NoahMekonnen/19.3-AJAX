console.log("Let's get this party started!");

const searchButton = document.getElementById('search');
searchButton.addEventListener('click',async function(e){
    e.preventDefault();

    // accessing input value
    const input = document.querySelector('#gifInput');
    let gifUrl = input.value;
    let gifStuff = await axios.get(gifUrl);

    // append the gif
    const container = document.getElementById("gifContainer");
    const img = document.createElement('img');
    img.src = gifStuff.config.url
    container.appendChild(img);

    // form reset
    const form = document.querySelector('form');
    form.reset();

    // remove button functionality
    const remove = document.getElementById("remove");
    remove.addEventListener('click', function(e){
        e.preventDefault();
        let i = container.children.length;
        while (i != 0){
            container.children[0].remove();
            i--;
        }
    })
})


