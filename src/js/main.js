document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('contacts-form');

    form.addEventListener('submit', SendData);

    function SendData(event) {
        event.preventDefault();

        const {name, phone} = form.elements;

        const formData = {
            name: name.value,
            phone: phone.value
        };

        form.reset();
        console.log(formData);
    }
});