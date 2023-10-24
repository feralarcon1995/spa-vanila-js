export const SelectedMascota = () => {

    const userData = JSON.parse(localStorage.getItem('userTurn'));

    const form = document.querySelector('.form-container');
    form.remove();
    
    const div = document.createElement('div');
    div.setAttribute('class', 'reserva-container');

    div.innerHTML = `
    <div class="paseo-content">
        <div class="paseo-content-left">
            <h2>Reservo el paseo</h2>
            <h3>A nombre de: ${userData.name}</h3>
            <p>Contacto: ${userData.email}</p>
            <p>Fecha: ${userData.day}</p>
        </div>
        <div class="paseo-content-rigth">
            <h2>Con la mascota</h2>
            <img src=${userData.mascota.thumbnail} alt="fotito hermosa de ${userData.mascota.name}">
            <h3>${userData.mascota.name}</h3>
            <p>Del dueño: ${userData.mascota.owner}</p>
            <button class="delete-button">Eliminar Reserva</button>
        </div>
    </div>
    
    `;

    const deleteButton = div.querySelector('.delete-button');
    deleteButton.addEventListener('click', () => {
        localStorage.clear();
        window.location.reload();
    })

    return div;
}