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
        question: "When can I make my first profits?",
        answer: "It all depends on which bot trading algorithm you choose. Usually, you can get the first profits within a day."
    },
    {
        question: "Is it possible to modify your bot?",
        answer: "Our trading bot uses a unique code that is not accessible to masses."
    },
    {
        question: "Is my personal data on ByBit, Binance, and other exchanges protected?",
        answer: "Absolutely! Our trading bot does not have access to your personal data and your financial account on any trading exchange connected to it."
    },
    {
        question: "Is it possible to get notifications and a report on the trading bot's activity?",
        answer: "Yes, all the data on transactions made by the trading bot will be available in your personal account on the website."
    },
    {
        question: "On what devices can I use your trading bot?",
        answer: "You can use our trading bot on any device since our algorithms are on the partner's servers."
    },
    {
        question: "Are there any user limits?",
        answer: "Yes, we have user limits. To ensure stable operation of our bot, we can only connect 550 people."
    },
    {
        question: "How many deals are there per month?",
        answer: "Usually, our bot helps to make from 5 to 7 trades on crypto exchanges."
    },
    {
        question: "Is there any risk of losing the deposit I made?",
        answer: "Absolutely not! We place tp/sl instantly, with a variation of 0.7 to 1.7%."
    },
    {
        question: "How can I keep track of the algorithm online?",
        answer: "All this is available in your personal account on our platform, or in your personal account on the crypto exchange you choose."
    },
    {
        question: "Is there any way I can make adjustments to the algorithm and/or stop it?",
        answer: "Yes, that is functionally possible. However, we urge you to avoid doing so!"
    },
    {
        question: "Can anyone see my personal data?",
        answer: "Our platform has no access to your personal information and personal data. The only information we see is your email address so we can contact you."
    },
    {
        question: "What is the operating principle of the AI RiskFreeBot algorithm, and what is its percentage?",
        answer: "If your balance is 10 thousand dollars or more, the percentage will be about 15%. It is possible to make adjustments to the algorithm, we can discuss it on an individual basis."
    },
    {
        question: "Can I get online assistance on how the algorithm works and how to run it?",
        answer: "We have round-the-clock support service. You can contact us via the e-mail address mentioned on the website or via Telegram."
    }
]
// Первоначальная отрисовка вопросов
faq.forEach(function (aq, i, faq) {
    if (i == 0) {
        var style = 'style="margin-top: 16px"'
        var style2 = 'faq_questions_question_show'
    } else {
        var style = 'style="height: 0px"'
        var style2 = ''
    }
    document.getElementById('faq_list').innerHTML += `
            <div class="faq_questions_question">
                <div class="faq_questions_question_dot">
                    <img width="18" height="18" alt="dot" src="/img/quest/dot.svg">
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
                    <img width="16" height="16" alt="show answer" class=" plus" src="/img/quest/plus.svg">
                    <img width="16" height="16" alt="show answer" class=" plus_mob" src="/img/quest/plus_mob.svg">
                    <img width="16" height="3" alt="hide answer" class=" minus" src="/img/quest/minus.svg">
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
            elBlock.style.marginTop = `16px`
            elBlock.style.height = `${elBlock.scrollHeight}px`
        } else {
            elBlock.style.height = `${elBlock.scrollHeight}px`;
            window.getComputedStyle(elBlock, null).getPropertyValue("height");
            elBlock.style.paddingTop = `0px`
            elBlock.style.height = "0";
            elBlock.style.borderTop = `0px solid white`

            setTimeout(() => { elBlock.style.marginTop = `0`; }, 500);
        }
    };
}
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
    return '<div class="element element_loading"><div class="num element_info"><div class="info">' + props.id + '</div></div><div class="type element_info"><div class="info"><div class="' + props.type + '">' + props.type + '</div><div class="lev">' + props.margin + '</div></div></div><div class="pair element_info"><div class="info"><img src="/img/currency/btc.png" width="35" height="35" /><div class="text">BTC/USDT.P</div></div></div><div class="date element_info"><div class="name">Date</div><div class="info">' + props.date + '</div></div><div class="count element_info"><div class="name">Count</div><div class="info">' + props.amount + '</div></div><div class="price element_info"><div class="name">Price</div><div class="info">$ ' + props.price + '</div></div><div class="profit element_info"><div class="name">Profit</div><div class="info"><div class="usdt">$ ' + props.income + '</div><div class="percent ' + props.percentClass + '">' + props.percent + ' %</div></div></div></div>'
    // return '<div class="element element_loading"><div class="num element_info"><div class="info">' + props.id + '</div></div><div class="type element_info"><div class="info"><div class="' + props.type + '">' + props.type + '</div><div class="lev">isol x10</div></div></div><div class="pair element_info"><div class="info"><img src="/img/currency/btc.png" /><div class="text">BNB/USDT</div></div></div><div class="date element_info"><div class="name">Дата</div><div class="info">' + props.date + '</div></div><div class="count element_info"><div class="name">Кол-во</div><div class="info">' + props.amount + '</div></div><div class="price element_info"><div class="name">Цена</div><div class="info">' + props.price + '</div></div><div class="volume element_info"><div class="name">Объем</div><div class="info">50,324</div></div><div class="profit element_info"><div class="name">Прибыль</div><div class="info"><div class="usdt">$' + props.income + '</div><div class="percent">+38,39%</div></div></div></div>'
}

const get_trades = (limit, page, cat) => {
    document.getElementById('table_elements_loader').classList.remove('dnone')
    document.getElementById('table_elements_loader').classList.remove('onone')
    fetch('https://apisite.tradecoinai.com/api/users/transactions?limit=' + limit + '&page=' + page + '&category=' + cat)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            document.getElementById('loadMoreTariffBasic').innerHTML = 'Load more'
            document.getElementById('loadMoreTariffAiPremium').innerHTML = 'Load more'
            document.getElementById('loadMoreTariffAiPro').innerHTML = 'Load more'
            // Pagination

            if (data.total > limit) {
                function get_page(limit, page, cat) {
                    return (event) => {
                        get_trades(limit, page, cat)
                    }
                }
                document.getElementById('table_elements_pagination').innerHTML = '';
                if (page != 1) {
                    document.getElementById('table_elements_pagination').innerHTML += '<button id="prev_page"  aria-label="Transactions previous page"><img src="/img/left_arr.svg" alt="left arrow" width="8" height="14" /></button>';
                }
                const pages_count = Math.ceil(data.total / limit)
                if (pages_count < 6) {
                    for (let i = 1; i < pages_count + 1; i++) {
                        if (i == page) {
                            document.getElementById('table_elements_pagination').innerHTML += '<button class="active">' + i + '</button>';
                        } else {

                            document.getElementById('table_elements_pagination').innerHTML += '<button id="page' + i + '">' + i + '</button>';
                        }
                    }
                } else {
                    var prevDots = false
                    for (let i = 1; i < pages_count + 1; i++) {
                        if (i == page) {
                            document.getElementById('table_elements_pagination').innerHTML += '<button class="active">' + i + '</button>';
                            prevDots = false
                        } else if (i == page - 1 || i == page + 1 || i == pages_count || i == 1) {
                            document.getElementById('table_elements_pagination').innerHTML += '<button id="page' + i + '">' + i + '</button>';
                            prevDots = false
                        } else if (!prevDots) {
                            document.getElementById('table_elements_pagination').innerHTML += '<button>...</button>';
                            prevDots = true
                        }
                    }
                }
                if (page != pages_count) {
                    document.getElementById('table_elements_pagination').innerHTML += '<button id="next_page"  aria-label="Transactions next page"><img src="/img/right_arr.svg" alt="right arrow" width="8" height="14" /></button>';
                }

                if (page != 1) {
                    document.getElementById('prev_page').onclick = get_page(limit, page - 1, cat);
                }
                if (page != pages_count) {
                    document.getElementById('next_page').onclick = get_page(limit, page + 1, cat);
                }
                if (pages_count < 6) {
                    for (let i = 1; i < pages_count + 1; i++) {
                        if (i != page) {
                            const pageId = 'page' + i
                            document.getElementById(pageId).onclick = get_page(limit, i, cat);

                        }
                    }
                } else {
                    var prevDots = false
                    for (let i = 1; i < pages_count + 1; i++) {
                        if (i == page) {
                            prevDots = false
                        } else if (i == page - 1 || i == page + 1 || i == pages_count || i == 1) {
                            const pageId = 'page' + i
                            document.getElementById(pageId).onclick = get_page(limit, i, cat);
                            prevDots = false
                        } else if (!prevDots) {
                            prevDots = true
                        }
                    }
                }
                document.getElementById('table_elements_pagination').classList.remove('onone')
            } else {
                document.getElementById('table_elements_pagination').innerHTML = '';
            }
            setTimeout(() => { document.getElementById('table_elements_loader').classList.add('dnone') }, 100)
            document.getElementById('table_elements_loader').classList.add('onone')
            document.getElementById('table_elements_pagination').classList.remove('onone')
            document.getElementById('table').classList.remove('onone')
            document.getElementById('transactions_navigation').classList.remove('onone')
            document.getElementById('transactions_secure').classList.remove('onone')

            document.getElementById('table_elements').innerHTML = ''
            data.transactions.map((d, i) => {
                var percent = '+';
                +((d.percent).toString().replaceAll(",", ".")) > 0 ? percent += d.percent : percent = d.percent;
                +((d.percent).toString().replaceAll(",", ".")) > 0 ? percentClass = 'plus' : percentClass = 'minus'
                document.getElementById('table_elements').innerHTML += table_element({
                    id: (page - 1) * limit + i + 1,
                    type: d.type,
                    date: d.date,
                    amount: d.amount,
                    price: d.price,
                    income: d.income,
                    percent: percent,
                    margin: d.margin,
                    percentClass: percentClass
                })
            })

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
        get_trades(6, 1, 'basic')
    }
};

const scroll_listener = () => { Visible(document.querySelector('#all_trades')); }
window.addEventListener('scroll', scroll_listener);
Visible(document.querySelector('#all_trades'));

const tarifBasicClick = () => {
    window.removeEventListener('scroll', scroll_listener);
    document.getElementById('tariffBasic').classList.add('transactions_navigation_active')
    document.getElementById('tariffAiPro').classList.remove('transactions_navigation_active')
    document.getElementById('tariffAiPremium').classList.remove('transactions_navigation_active')

    document.getElementById('loadMoreTariffBasic').classList.remove('dnone')
    document.getElementById('loadMoreTariffAiPro').classList.add('dnone')
    document.getElementById('loadMoreTariffAiPremium').classList.add('dnone')
    document.getElementById('loadMoreTariffBasic').value = 6
    get_trades(6, 1, 'basic')

}
document.getElementById('tariffBasic').onclick = tarifBasicClick;

const tarifAiProClick = () => {
    window.removeEventListener('scroll', scroll_listener);

    document.getElementById('tariffBasic').classList.remove('transactions_navigation_active')
    document.getElementById('tariffAiPro').classList.add('transactions_navigation_active')
    document.getElementById('tariffAiPremium').classList.remove('transactions_navigation_active')

    document.getElementById('loadMoreTariffBasic').classList.add('dnone')
    document.getElementById('loadMoreTariffAiPro').classList.remove('dnone')
    document.getElementById('loadMoreTariffAiPremium').classList.add('dnone')
    document.getElementById('loadMoreTariffAiPro').value = 6
    get_trades(6, 1, 'ai_pro')
}
document.getElementById('tariffAiPro').onclick = tarifAiProClick;

const tarifAiPremiumClick = () => {
    window.removeEventListener('scroll', scroll_listener);

    document.getElementById('tariffBasic').classList.remove('transactions_navigation_active')
    document.getElementById('tariffAiPro').classList.remove('transactions_navigation_active')
    document.getElementById('tariffAiPremium').classList.add('transactions_navigation_active')

    document.getElementById('loadMoreTariffBasic').classList.add('dnone')
    document.getElementById('loadMoreTariffAiPro').classList.add('dnone')
    document.getElementById('loadMoreTariffAiPremium').classList.remove('dnone')
    document.getElementById('loadMoreTariffAiPremium').value = 6

    get_trades(6, 1, 'ai_premium')
}
document.getElementById('tariffAiPremium').onclick = tarifAiPremiumClick;

document.getElementById('loadMoreTariffBasic').onclick = () => {
    document.getElementById('loadMoreTariffBasic').innerHTML = 'Loading...'
    get_trades(parseInt(document.getElementById('loadMoreTariffBasic').value, 10) + 6, 1, 'basic')
    document.getElementById('loadMoreTariffBasic').value = parseInt(document.getElementById('loadMoreTariffBasic').value) + 6
}
document.getElementById('loadMoreTariffAiPro').onclick = () => {
    document.getElementById('loadMoreTariffAiPro').innerHTML = 'Loading...'
    get_trades(parseInt(document.getElementById('loadMoreTariffAiPro').value, 10) + 6, 1, 'ai_pro')
    document.getElementById('loadMoreTariffAiPro').value = parseInt(document.getElementById('loadMoreTariffAiPro').value) + 6
}
document.getElementById('loadMoreTariffAiPremium').onclick = () => {
    document.getElementById('loadMoreTariffAiPremium').innerHTML = 'Loading...'
    get_trades(parseInt(document.getElementById('loadMoreTariffAiPremium').value, 10) + 6, 1, 'ai_premium')
    document.getElementById('loadMoreTariffAiPremium').value = parseInt(document.getElementById('loadMoreTariffAiPremium').value) + 6
}
