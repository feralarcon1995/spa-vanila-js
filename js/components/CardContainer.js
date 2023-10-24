import { Card } from "./Card.js";

export const CardContainer = (props) => {

    let { mascotas } = props;

    console.log(mascotas)
    let section = document.createElement('section');
  
    section.setAttribute('class', 'card-container')
    mascotas.forEach(mascota => {
        const card = Card(mascota);
        section.append(card);
    });

    return section;
}