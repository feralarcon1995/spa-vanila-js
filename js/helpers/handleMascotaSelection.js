export const handleMascotaSelection = (mascota) => {
    const selectedMascota = mascota;

    localStorage.setItem('selectedMascota', JSON.stringify(selectedMascota));

    const selectedMascotaDisplay = document.querySelector('#selected-mascota');
    selectedMascotaDisplay.textContent= `Queres irte de paseo con ${mascota.name}`
}