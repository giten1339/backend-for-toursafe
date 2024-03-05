document.querySelector('.geo-btn').addEventListener('click', () => {
    const showDetails = document.querySelector('.details'); // Assuming .details is the element where you want to display the details

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                showDetails.textContent = `The latitude ${latitude} & longitude ${longitude}`;
            },
            (error) => {
                showDetails.textContent = error.message;
                console.log(error.message);
            }
        );
    } else {
        showDetails.textContent = "Geolocation is not supported by your browser.";
        console.log("Geolocation is not supported by your browser.");
    }
});
