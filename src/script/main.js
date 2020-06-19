const main = () => {
    const animalsList = document.getElementById("animalsList");
    const searchBar = document.getElementById("searchBar");
    let hpAnimals = [];
    console.log(searchBar);

    // search bar
    searchBar.addEventListener('keyup', (e) => {
        const searchString = e.target.value.toLowerCase();

        const filteredAnimals = hpAnimals.filter((animal) => {
            return (
                animal.first_name.toLowerCase().includes(searchString) 
                || animal.last_name.toLowerCase().includes(searchString)
                || animal.class.toLowerCase().includes(searchString)
                || animal.family.toLowerCase().includes(searchString)
                || animal.ordo.toLowerCase().includes(searchString)
            );
        });
        displayAnimals(filteredAnimals);
    });

    const loadAnimals = async () => {
        try {
            const res = await fetch('https://my-json-server.typicode.com/antoniluthfi/api/animals');
            hpAnimals = await res.json();
            displayAnimals(hpAnimals);
            console.log(hpAnimals);
        } catch (err) {
            console.error(err);
        }
    };

    const displayAnimals = (animals) => {
        const htmlString = animals
            .map((animal) => {
                return `
                <li class="animal">
                    <img src="${animal.image}" alt="" width="100%">
                    <h3><a href="${animal.link}" target="_blank">${animal.first_name}</a></h3>
                    <p>Scientific Name</p>
                    <h3><a href="${animal.link}" target="_blank">${animal.last_name}</a></h3>
                    <p>Class</p>
                    <h4>${animal.class}</h4>
                    <p>Family</p>
                    <h4>${animal.family}</h4>
                    <p>Order</p>
                    <h4>${animal.ordo}</>
                </li>`;
            })
            .join('');
        animalsList.innerHTML = htmlString;
    };

    loadAnimals();
};

export default main;