import { handleMascotaSelection } from "../helpers/handleMascotaSelection.js";

export const Card = (props) => {

    let { name, owner, thumbnail, gender, species, id } = props;
    let div = document.createElement('div');
    div.setAttribute('class', 'card-content');
    div.innerHTML =
        `
      <img src=${thumbnail} alt="fotito hermosa de ${name}">
      <div class="card-body">
        <p><span>${species}</span> <span>${gender}</span></p>
        <h2> ${name}</h2>
        <p>Dueño:${owner}</p>
        <a data-id=${id} class="card-link">Seleccionar Mascota</a>
      </div>
    `;

    const selectedMascotaLink = div.querySelector('.card-link');
    selectedMascotaLink.addEventListener('click', () => handleMascotaSelection(props));

    return div;
}