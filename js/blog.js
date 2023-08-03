// Открытие-закрытие меню с кнопки
document.getElementById('burger_menu_button').onclick = () => {
    elBlock = document.getElementById('mobile_menu')
    if (elBlock.style.height === "0px") {
        document.getElementById('header').classList.add('show_mobile_menu')
        // document.getElementById('usp').classList.add('filter_blur')
        // document.getElementById('lb1').classList.add('filter_blur')
        document.getElementById('body').classList.add('no_scroll')
        elBlock.style.height = `${elBlock.scrollHeight}px`
        document.getElementById('mobile_menu_img_burger').classList.add('dnone')
        document.getElementById('mobile_menu_img_cross').classList.remove('dnone')
    } else {
        hide_menu()
    }
}
// Функция закрытие меню
function hide_menu() {
    document.getElementById('body').classList.remove('no_scroll')
    // document.getElementById('lb1').classList.remove('filter_blur')
    // document.getElementById('usp').classList.remove('filter_blur')
    document.getElementById('mobile_menu').style.height = `${elBlock.scrollHeight}px`;
    window.getComputedStyle(document.getElementById('mobile_menu'), null).getPropertyValue("height");
    document.getElementById('mobile_menu').style.height = "0";
    setTimeout(() => { document.getElementById('header').classList.remove('show_mobile_menu') }, 400);
    document.getElementById('mobile_menu_img_burger').classList.remove('dnone')
    document.getElementById('mobile_menu_img_cross').classList.add('dnone')
}
// Закрытие меню при нажатии на кнопки
var elements = document.querySelectorAll(".header_mobile_menu_element_a");
for (var i = 0; i < elements.length; i++) {
    elements[i].onclick = function () {
        hide_menu()
    };
}

document.getElementById('lang_changer_block').onclick = () => {
    document.getElementById('lang_changer').classList.toggle('dnone')
}