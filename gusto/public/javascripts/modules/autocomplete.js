function autocomplete(input, latInput, lngInput) {
    if(!input) return;
    const dropdown = client.geocodeForward(input);

    dropdown.addListener('place_changed', () => {
        const place = dropdown.getPlace();
        latInput.value = place.geometry.location.lat();
        lngInput.value = place.geometry.location.lng();
    });

    // for when someone hits enter
    input.on('keydown', (e) => {
        if(e.keyCode === 13) e.preventDefault();
    });
}

export default autocomplete;