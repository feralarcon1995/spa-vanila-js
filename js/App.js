import { Book } from "./components/Book.js";
import { CardContainer } from "./components/CardContainer.js";
import { SelectedMascota } from "./components/SelectedMascota.js";
import { Mascotines } from "./helpers/data.js";

export const App = () => {
    let appRoot = document.querySelector('#root');
    // console.log(appRoot)
    const userData = JSON.parse(localStorage.getItem('userTurn'));

    if(userData){
        appRoot.append(userData ? SelectedMascota() : '')
    } else {
        appRoot.append(CardContainer({ mascotas: Mascotines }));
        appRoot.append(Book({ mascotas: Mascotines }))
    }

}