import TabsManager from './tabs.js'

$(function() {
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

    $('#carousel').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $("#prevButton"),
        nextArrow: $("#nextButton")
    });

    new window.TabsManager(document.querySelector('.tabs'));
});