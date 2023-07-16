function show_menu() {
    document.getElementById('burger_opener').classList.add('dnone')
    document.getElementById('burger_closer').classList.remove('dnone')
    document.getElementById('sidebar').style.height = `${document.getElementById('sidebar').scrollHeight}px`
}
function hide_menu() {
    document.getElementById('sidebar').style.height = ``
    document.getElementById('burger_closer').classList.add('dnone')
    document.getElementById('burger_opener').classList.remove('dnone')
}

function show_modal() {
    document.getElementById("modal").classList.remove('dnone')
    setTimeout(() => { document.getElementById("modal").classList.remove('onone') }, 50)
}
function hide_modal() {
    document.getElementById("modal").classList.add('onone')
    setTimeout(() => { document.getElementById("modal").classList.add('dnone') }, 500)
}

// profile_opener

function show(el) {
    el.classList.remove('dnone')
    setTimeout(remove_onone, 50, el)
}

function hide_all(target_page) {
    pages = document.querySelectorAll('.page')
    for (var i = 0; i < pages.length; i++) {
        if (pages[i].id != target_page.id) {
            pages[i].classList.add('onone')
            setTimeout(add_dnone, 500, pages[i])
        }
    }
}
function add_dnone(el) {
    el.classList.add('dnone')
}
function remove_onone(el) {
    el.classList.remove('onone')
}

document.getElementById('burger_opener').onclick = show_menu

document.getElementById('burger_closer').onclick = hide_menu

document.getElementById('modal_closer').onclick = hide_modal
document.getElementById('add_api_keys_button').onclick = show_modal

document.getElementById("manage_tarif_opener").onclick = () => {
    hide_all(document.getElementById("page_manage_tarif"))
    show(document.getElementById("page_manage_tarif"))
}
document.getElementById("profile_opener").onclick = () => {
    hide_all(document.getElementById("page_profile"))
    show(document.getElementById("page_profile"))
}
