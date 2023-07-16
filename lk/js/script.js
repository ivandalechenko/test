document.addEventListener("DOMContentLoaded", () => {
    // Открытие-закрытие меню с кнопки
    document.getElementById('burger_menu_button').onclick = () => {
        elBlock = document.getElementById('mobile_menu')
        if (elBlock.style.height === "0px") {
            document.getElementById('header').classList.add('show_mobile_menu')
            document.getElementById('usp').classList.add('filter_blur')
            document.getElementById('lb1').classList.add('filter_blur')
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
        document.getElementById('lb1').classList.remove('filter_blur')
        document.getElementById('usp').classList.remove('filter_blur')
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
    // Плавная прокрутка к якорям
    document.querySelectorAll('a[href^="#"').forEach(link => {

        link.addEventListener('click', function (e) {
            e.preventDefault();

            let href = this.getAttribute('href').substring(1);

            const scrollTarget = document.getElementById(href);

            const topOffset = 70; // если не нужен отступ сверху 
            const elementPosition = scrollTarget.getBoundingClientRect().top;
            const offsetPosition = elementPosition - topOffset;

            window.scrollBy({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    });
    const faq = [
        {
            question: "Когда я смогу получить первую прибыль?",
            answer: "Все зависит от того, какой алгоритм торговли ботом вы выберите. Как правило, первые “плюсы” могут быть уже в течение суток"
        },
        {
            question: "Можно ли модифицировать ваш бот?",
            answer: "Наш торговый бот использует уникальный код, доступ к которому не предоставляется широкой аудитории"
        },
        {
            question: "Мои личные данные на ByBit, Binance и прочих торговых биржах под надежной защитой?",
            answer: "Абсолютно! Наш торговый бот не располагает доступом к вашим личным данным и к вашему финансовому счету на любой подключенной к нему торговой бирже"
        },
        {
            question: "Я могу получить уведомления и отчет о деятельности торгового бота? ",
            answer: "Да, все данные о совершаемых торговым ботом операциях будут доступны в вашем личном кабинете на сайте"
        },
        {
            question: "На каком устройстве я могу пользоваться вашим торговым ботом?"
            ,
            answer: "Абсолютно на любом устройстве, наши алгоритмы лежат на серверах партнера"
        },
        {
            question: "Какое ограничение пользователей может быть?"
            ,
            answer: "У нас есть лимиты пользователей, для стабильной работы мы можем только 550 человек подключить"
        },
        {
            question: "Какое количество сделок происходит в месяц?"
            ,
            answer: "Как правило,с помощью нашего бота происходит от 5 до 7 сделок на криптовалютных биржах"
        },
        {
            question: "Есть риск лишиться всего депозита, который я сделаю?"
            ,
            answer: "Это исключено! Мы выставляем tp/sl моментально, вариация от 0,7 до 1,7%"
        },
        {
            question: "Каким образом я могу следить за работой алгоритма онлайн? "
            ,
            answer: "Все это доступно в личном кабинете на нашей платформе, либо в личном кабинете на выбранной вами криптовалютной бирже"
        },
        {
            question: "Я могу каким-либо образом корректировать работу алгоритма и/или остановить его?"
            ,
            answer: "Это функционально возможно. Но мы настоятельно не рекомендуем делать это!"
        },
        {
            question: "Мои личные данные кто-либо видит?"
            ,
            answer: "Наша платформа абсолютно не получает доступ к вашей персональной информации и личным данным. Мы видим только адрес вашей электронной почты и используем его исключительно для обратной связи с вами"
        },
        {
            question: "Какой принцип работы алгоритма AI RiskFreeBot-а, какой процент?"
            ,
            answer: "При балансе от 10 тысяч долларов будет порядка 15%. Возможно внести корректировки в работу алгоритма, все обговаривается в индивидуальном порядке"
        },
        {
            question: "Я могу получить онлайн помощь касательно работы алгоритма и его запуска?"
            ,
            answer: "У нас работает круглосуточная служба поддержки. Обратная связь происходит через адрес электронной почты, указанный на сайте, либо через Telegram"
        }
    ]
    // Первоначальная отрисовка вопросов
    faq.forEach(function (aq, i, faq) {
        if (i == 0) {
            var style = 'style="margin-top: 8px"'
            var style2 = 'faq_questions_question_show'
        } else {
            var style = 'style="height: 0px"'
            var style2 = ''
        }
        document.getElementById('faq_list').innerHTML += `
            <div class="faq_questions_question">
                <div class="faq_questions_question_dot">
                    <img width="18" height="18" alt="dot" src="img/quest/dot.svg">
                </div>
                <div class="faq_questions_question_text">
                    <div class="faq_questions_question_text_visible">
                        `+ aq['question'] + `
                    </div>
                    <div class="faq_questions_question_text_hidden" `+ style + `>
                    `+ aq['answer'] + `
                    </div>
                </div>
                <div class="faq_questions_question_question_arrow `+ style2 + `">
                    <img width="16" height="16" alt="show answer" class=" plus" src="img/quest/plus.svg">
                    <img width="16" height="16" alt="show answer" class=" plus_mob" src="img/quest/plus_mob.svg">
                    <img width="16" height="3" alt="hide answer" class=" minus" src="img/quest/minus.svg">
                </div>
            </div>
        `
    });



    // Показ и скрытие ответов к вопросам
    var elements = document.querySelectorAll(".faq_questions_question");
    for (var i = 0; i < elements.length; i++) {
        elements[i].onclick = function () {
            this.querySelector(".faq_questions_question_question_arrow").classList.toggle('faq_questions_question_show')
            var elBlock = this.querySelector(".faq_questions_question_text_hidden")
            if (elBlock.style.height === "0px") {
                elBlock.style.height = `${elBlock.scrollHeight}px`
                elBlock.style.marginTop = `8px`
            } else {
                elBlock.style.height = `${elBlock.scrollHeight}px`;
                window.getComputedStyle(elBlock, null).getPropertyValue("height");
                elBlock.style.height = "0";
                setTimeout(() => { elBlock.style.marginTop = `0`; }, 500);
            }
        };
    }


});
lozad('.lozad', {
    load: function (el) {
        el.src = el.dataset.src;
        el.onload = function () {
            el.classList.add('fade')
            el.classList.remove('lozad')
        }
    }
}).observe()


