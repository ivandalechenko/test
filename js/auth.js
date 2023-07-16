document.getElementById("signup_switcher").onclick = switch_to_sign_up
function switch_to_sign_up() {
    document.getElementById("login_switcher").classList.remove('active')
    document.getElementById("signup_switcher").classList.add('active')

    document.getElementById('safe').classList.add('rotate')
    setTimeout(() => { document.getElementById('safe').setAttribute('src', 'img/login/usd.png') }, 250)
    setTimeout(() => { document.getElementById('safe').classList.remove('rotate') }, 500)

    show_inp(document.getElementById("username"))
    show_inp(document.getElementById("rpassword"))
    show(document.getElementById("create_password_label"), 17, 10)
    show(document.getElementById("accept_terms"), 24, 20)
    hide(document.getElementById("forgot_password"))

}

document.getElementById("login_switcher").onclick = switch_to_log_in
function switch_to_log_in() {
    document.getElementById("login_switcher").classList.add('active')
    document.getElementById("signup_switcher").classList.remove('active')

    document.getElementById('safe').classList.add('rotate')
    setTimeout(() => { document.getElementById('safe').setAttribute('src', 'img/login/safe.png') }, 250)
    setTimeout(() => { document.getElementById('safe').classList.remove('rotate') }, 500)

    hide_inp(document.getElementById("username"))
    hide_inp(document.getElementById("rpassword"))
    hide(document.getElementById("create_password_label"))
    show(document.getElementById("forgot_password"), 24, 20)
    hide(document.getElementById("accept_terms"))

}


function hide(el) {
    el.style.height = "0px";
    el.style.marginTop = "0px";
}
function show(el, h, mt) {
    el.style.height = h + 'px';
    el.style.marginTop = mt + 'px';
}
function hide_inp(el) {
    el.style.padding = `0px 20px`;
    el.style.height = "0px";
    el.style.marginTop = "0px";
    setTimeout(() => { el.style.border = "1px solid rgba(27,28,29,0)"; }, 100)
}

function show_inp(el) {
    el.style.height = `65px`
    el.style.padding = `13px 20px`;
    el.style.marginTop = "10px";
    setTimeout(() => { el.style.border = "1px solid rgba(27,28,29,1)"; }, 100)

}

document.getElementById("accept_t_and_p").onclick = () => {
    document.getElementById('accept_t_and_p_check_img').classList.toggle('onone')
}


var code_input_elements = document.querySelectorAll(".code_input_element");
for (var i = 0; i < code_input_elements.length; i++) {
    code_input_elements[i].oninput = function () {
        console.log(this.nextElementSibling)
        this.nextElementSibling.focus()
    }
}


var elements = document.querySelectorAll(".eye");
for (var i = 0; i < elements.length; i++) {
    elements[i].onclick = function () {
        if (this.classList.contains('closed')) {
            this.classList.remove('closed')
            this.querySelector('img').setAttribute('src', 'img/login/eye.svg')
            this.parentElement.querySelector('input').setAttribute('type', 'text');
        } else {
            this.classList.add('closed')
            this.querySelector('img').setAttribute('src', 'img/login/eye_closed.svg')
            this.parentElement.querySelector('input').setAttribute('type', 'password');
        }
    };
}

function switch_to_code() {
    console.log('code')
}

function switch_to_code() {
    console.log('code')
}
document.getElementById("recovery_password").onclick = () => { show_modal() }
document.getElementById("back_to_login").onclick = () => { hide_modal() }

function show_modal() {
    document.getElementById("left").classList.add('o0')
    document.getElementById("right").classList.add('o0')
    setTimeout(() => {
        document.getElementById("left").classList.add('dnone')
        document.getElementById("right").classList.add('dnone')
        document.getElementById("modal").classList.remove('o0')
        setTimeout(() => {
            document.getElementById("modal").classList.remove('dnone')
        }, 100)
    }, 300)

    document.getElementById("modal_h2").innerHTML = `
    Forget password?<br> Not a problem
    `
    document.getElementById("modal_body").innerHTML = `
    Provide us e-mail of your account and we will send a code to your mailbox
    `
    hide(document.getElementById("didnt_recieve_the_code"))
    hide_inp(document.getElementById("modal_password"))
    hide_inp(document.getElementById("modal_rpassword"))
    show(document.getElementById("dont_have_account"), 20, 20)
    show_inp(document.getElementById("modal_email"))


    document.getElementById("send_a_code").classList.remove('dnone')
    document.getElementById("reset_password_button").classList.add('dnone')
    document.getElementById("change_password").classList.add('dnone')
    hide(document.getElementById("code_input"))



}
function hide_modal() {
    document.getElementById("modal").classList.add('o0')
    setTimeout(() => {
        document.getElementById("left").classList.remove('dnone')
        document.getElementById("right").classList.remove('dnone')
        document.getElementById("modal").classList.add('dnone')
        setTimeout(() => {
            document.getElementById("left").classList.remove('o0')
            document.getElementById("right").classList.remove('o0')
        }, 100)
    }, 300)
}


document.getElementById("send_a_code").onclick = () => {
    document.getElementById("modal_h2").innerHTML = `
    Enter code
    `
    document.getElementById("modal_body").innerHTML = `
    We had sent code to tradexeth@gmail.com. Please check the mail and provide the code
    `
    document.getElementById("send_a_code").classList.add('dnone')
    document.getElementById("reset_password_button").classList.remove('dnone')
    show(document.getElementById("didnt_recieve_the_code"), 20, 20)
    hide(document.getElementById("dont_have_account"))
    show(document.getElementById("code_input"), 90, 24)

    hide_inp(document.getElementById("modal_email"))
}

document.getElementById("reset_password_button").onclick = () => {
    document.getElementById("modal_h2").innerHTML = `
    Create new password
    `
    document.getElementById("modal_body").innerHTML = `
    The password must be at least 8 and no more than 14 characters long. The password must consist of Latin letters (A-z), Arabic numerals (0-9) and special characters
    `
    document.getElementById("reset_password_button").classList.add('dnone')
    document.getElementById("change_password").classList.remove('dnone')

    hide(document.getElementById("code_input"))
    hide(document.getElementById("didnt_recieve_the_code"))


    show_inp(document.getElementById('modal_password'))
    show_inp(document.getElementById('modal_rpassword'))

    hide_inp(document.getElementById("modal_email"))
}


