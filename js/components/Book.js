export const Book = () => {
    const form = document.querySelector('#form');
    const formContainer = document.querySelector('.form-container-inputs');

    const saveData = () => {
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const day = document.querySelector('#day').value;

        const selectedMascota = JSON.parse(localStorage.getItem('selectedMascota'));

        if (name && email && day && selectedMascota && selectedMascota.id) {
            const data = {
                name,
                email,
                day,
                mascota:selectedMascota
            }
            localStorage.setItem('userTurn', JSON.stringify(data));
            console.log(data)
        }
    }


    formContainer.innerHTML = `
    <div>
        <label for="name">Nombre:</label>
        <input id="name" placeholder="Ingresa tu nombre por favor" type"text">
    </div>
    <div>
        <label for="email">Email:</label>
        <input id="email" placeholder="Ingrese su email" type"email">
    </div>
    <div>
        <label for="day">Día de paseo:</label>
        <input id="day" type="date">
    </div>
    <p id="selected-mascota"></p>
    <button id="save-button">Reservar Paseo</button>
    `;

    const saveButton = document.querySelector('#save-button');
    saveButton.addEventListener('click', saveData)

    form.appendChild(formContainer);

    return form;
}