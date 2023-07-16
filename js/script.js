document.addEventListener("DOMContentLoaded", () => {
    // Открытие-закрытие меню с кнопки
    // document.getElementById('burger_menu_button').onclick = () => {
    //     elBlock = document.getElementById('mobile_menu')
    //     if (elBlock.style.height === "0px") {
    //         document.getElementById('header').classList.add('show_mobile_menu')
    //         document.getElementById('usp').classList.add('filter_blur')
    //         document.getElementById('lb1').classList.add('filter_blur')
    //         document.getElementById('body').classList.add('no_scroll')
    //         elBlock.style.height = `${elBlock.scrollHeight}px`
    //         document.getElementById('mobile_menu_img_burger').classList.add('dnone')
    //         document.getElementById('mobile_menu_img_cross').classList.remove('dnone')
    //     } else {
    //         hide_menu()
    //     }
    // }
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
            answer: "У нас есть лимиты пользователей для стабильной работы, на данный момент загрузка 74%"
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
            question: "Какой принцип работы алгоритма AI Premium, какой процент?"
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

const table_element = (props) => {
    return '<div class="element element_loading"><div class="num element_info"><div class="info">' + props.id + '</div></div><div class="type element_info"><div class="info"><div class="' + props.type + '">' + props.type + '</div><div class="lev">isol x10</div></div></div><div class="pair element_info"><div class="info"><img src="img/currency/btc.png" /><div class="text">BNB/USDT</div></div></div><div class="date element_info"><div class="name">Дата</div><div class="info">' + props.date + '</div></div><div class="count element_info"><div class="name">Кол-во</div><div class="info">' + props.amount + '</div></div><div class="price element_info"><div class="name">Цена</div><div class="info">' + props.price + '</div></div><div class="volume element_info"><div class="name">Объем</div><div class="info">50,324</div></div><div class="profit element_info"><div class="name">Прибыль</div><div class="info"><div class="usdt">$' + props.income + '</div><div class="percent">+38,39%</div></div></div></div>'
}

const get_trades = (limit, page, cat) => {
    document.getElementById('table_elements_loader').classList.remove('dnone')
    document.getElementById('table_elements_loader').classList.remove('onone')
    fetch('https://apisite.tradecoinai.com/api/users/transactions?limit=' + limit + '&page=' + page + '&category=' + cat)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            setTimeout(() => {
                document.getElementById('table_elements_loader').classList.add('onone')
                setTimeout(() => {
                    document.getElementById('table_elements_loader').classList.add('dnone')
                    document.getElementById('table_elements').innerHTML = ''
                    data.transactions.map((d) => {
                        console.log(d)
                        document.getElementById('table_elements').innerHTML += table_element({
                            id: d.id,
                            type: d.type,
                            date: d.date,
                            amount: d.amount,
                            price: d.price,
                            income: d.income,
                        })
                    })
                }, 200, data)
            }, 2000, data)

        })
}
var Visible = function (target) {
    var targetPosition = {
        top: window.scrollY + target.getBoundingClientRect().top,
        bottom: window.scrollY + target.getBoundingClientRect().bottom
    },
        windowPosition = {
            top: window.scrollY,
            bottom: window.scrollY + document.documentElement.clientHeight
        };

    if (targetPosition.bottom > windowPosition.top &&
        targetPosition.top < windowPosition.bottom) {
        window.removeEventListener('scroll', scroll_listener);
        console.log('Вы видите элемент :)');
        get_trades(6, 1, 'basic')
    }
};

const scroll_listener = () => { Visible(document.querySelector('#all_trades')); }
window.addEventListener('scroll', scroll_listener);
Visible(document.querySelector('#all_trades'));

