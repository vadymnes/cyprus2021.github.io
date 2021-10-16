var config = {
    style: 'mapbox://styles/vadenvmapkyiv/ckuu47gpmneik17o4k94zngi5',
    accessToken: 'pk.eyJ1IjoidmFkZW52bWFwa3lpdiIsImEiOiJja2RwczBzcXYwMjgzMnprdWVxMTB2aWU0In0.OBDKIqeo6YDnxaEZR4bdIA',
    showMarkers: false,
    theme: 'yellow',
    use3dTerrain: true,
    title: 'Подорож на Кіпр 12-19 серпня 2021 року',
    subtitle: '',
    byline: '',
    footer: '',
    chapters: [
        {
            id: 'cyprus-on',
            alignment: 'left',
            title: 'Приліт на Кіпр',
            image: 'photos/fly_to_cyprus.jpg',
            description: 'Ура! Ми в аеропорті :)',
            location: {
                center: { lon: 33.61003, lat: 34.87022 },
                zoom: 12.80,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: '',
                    opacity: 0.25
                },
                {
                    layer: '',
                    opacity: 0.25
                }
            ],
            onChapterExit: [
                {
                    layer: '',
                    opacity: 0
                }
            ]
        },
        {
            id: 'limassol-first-day',
            alignment: 'left',
            title: 'Лімасол - перший день',
            image: 'photos/limassol_first_day_vadym_and_valeri.jpg',
            description: 'Зробили загальний огляд міста, перші засмаги',
            location: {
                center: { lon: 33.03464, lat: 34.67904 },
                zoom: 10.34,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: [
                // {
                //     layer: 'gnpglaciers-2015',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'cornaro-art-hostel',
            alignment: 'left',
            title: 'Заселення до житла Андреаса',
            image: 'photos/view_from_window_cornaro.jpg',
            description: 'Нагулявшись, заселилися до хостелу Cornaro Art Hostel.',
            location: {
                center: { lon: 33.03640, lat: 34.67236 },
                zoom: 17.36,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: '',
                    opacity: 0.25
                }
            ],
            onChapterExit: [
                {
                    layer: '',
                    opacity: 0
                }
            ]
        },
        {
            id: 'limassol-next-episode',
            alignment: 'left',
            title: 'Продовження туси в Лімасолі',
            image: '',
            description: 'Їли морозиво, дуже багато гуляли по місту, загорали та купалися на пляжах. Відвідали ботанічний сад міста.',
            location: {
                center: { lon: 33.03449, lat: 34.69044 },
                zoom: 12.22,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'troodos-track',
            alignment: 'left',
            title: 'Гори кличуть',
            image: 'photos/valeri_on_atalante_trail.jpg',
            description: 'Вирушили далі до гір після моря! Приїхали автобусом до Троодоса, а потім пройшли близько 16 км туристичним маршрутом навколо гори Олімп - найвищої гори острова. Однак на гору не змогли піднятися, оскільки вхід на неї був закритий, оскільки там розміщена військова частина',
            location: {
                center: { lon: 32.88020, lat: 34.92392 },
                zoom: 13.81,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'troodos-track',
                    opacity: 0.9
                }
            ],
            onChapterExit: [
                {
                    layer: 'troodos-track',
                    opacity: 0
                }
            ]
        },
        {
            id: 'pano-platres-night',
            alignment: 'left',
            title: 'Ночівля в горах?',
            image: '',
            description: 'Як виявилось, у Кіпрі може бути холодно! Щоб не замерзнути під час ночівлі в гамаках, ми ввечері стопимо поляків, які нас спускають внизу відразу на 600 м, до населеного пункту Пано-Платрес, де ми з деякою важкістю знайшли дерева для розвішення гамаків. Хоч і спустились вниз, але нічка виявилась все одно дещо холодною... Але ми вижили!!!',
            location: {
                center: { lon: 32.85997, lat: 34.88037 },
                zoom: 16.00,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'caledonia-waterfalls',
            alignment: 'left',
            title: 'Неочікуваний день в Пано-Платресі',
            image: 'photos/first_waterfall.jpg',
            description: 'Затишне гірське поселення виявилося багатим на воду та, відповідно, водоспади, тому ми пішли в хайк до водоспадів. Першим був Caledonia Waterfalls.',
            location: {
                center: { lon: 32.87005, lat: 34.90290 },
                zoom: 18.42,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: '',
                    opacity: 0.25,
                }
            ],
            onChapterExit: [
                {
                    layer: '',
                    opacity: 0
                }
            ]
        },
        {
            id: 'milomeris-waterfalls',
            alignment: 'left',
            title: 'Milomeris Waterfalls',
            image: 'photos/second_waterfall.jpg',
            description: 'Другим за день був водоспад Milomeris Waterfalls - високий, "вибитий" у скелі, здається, більш популярний. Гарно!',
            location: {
                center: { lon: 32.86507, lat: 34.88387 },
                zoom: 19.94,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'pafos-enter',
            alignment: 'left',
            title: 'Переїзд до Пафоса',
            image: '',
            description: 'Після дня в Пано-Платресі ми спустились до Лімасолу (автобусом), і відразу пересіли на бус до Пафосу, де в нас був запланований хост у жінки з Сербії, яка з собачкою хостить гостей і дещо заробляє кошти :) Локація господарки - на карті ',
            location: {
                center: { lon: 32.42126, lat: 34.76982 },
                zoom: 15.94,
                pitch: 49.00,
                bearing: 14.40
            },
            onChapterEnter: [
                {
                    layer: '',
                    opacity: 0.25
                }
            ],
            onChapterExit: [
                {
                    layer: '',
                    opacity: 0
                }
            ]
        },
        {
            id: 'coral-bay',
            alignment: 'left',
            title: 'Coral Bay',
            image: '',
            description: 'Засиджуватись у Пафосі не хо, тому ми помчали до пригод. Спочатку заїхали на Coral Bay - хоч і доволі популярний, але затишний пляж.',
            location: {
                center: { lon: 32.36848, lat: 34.85437 },
                zoom: 16.13,
                pitch: 60.00,
                bearing: 29.60
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'avakas-gorge',
            alignment: 'left',
            title: 'Avakas Gorge',
            image: 'photos/avakas.jpg',
            description: 'Після пляжику пересіли на автобусік, який нас погнав ще далі. На цей раз таким став каньйон Avakas Gorge посеред напівгірських схилів. Спека була неймовірна, але ж це був не перший наш день на Кіпрі :))) Вижили і тут.',
            location: {
                center: { lon: 32.34680, lat: 34.92474 },
                zoom: 15.26,
                pitch: 0.00,
                bearing: 8.00
            },
            onChapterEnter: [
                {
                    layer: '',
                    opacity: 0.25
                }
            ],
            onChapterExit: [
                {
                    layer: '',
                    opacity: 0
                }
            ]
        },
        {
            id: 'pafos-second-night',
            alignment: 'left',
            title: 'Друга ночівля в Пафосі',
            image: '',
            description: 'Так сталось, що у Пафосі ми проводимо три ночі, і всі ночі у різних помешканнях. Цього разу - тризірковий, схожий на невідремонтовані радянські апартаменти, але тим більш цікавий готель майже на лінії моря.',
            location: {
                center: { lon: 32.41441, lat: 34.75655 },
                zoom: 19.60,
                pitch: 36.00,
                bearing: -9.60
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'pafos-third-night',
            alignment: 'left',
            title: 'Третій день у Пафоському регіоні - ще дальші краї!',
            image: '',
            description: 'З самого ранку третього дня закупилися в супермаркеті і помчали раннім рейсом на північ - спочатку до населеного пункту Поліс, звідти -  ще одним автобусом, аж до домів Afrodita Bay - місця, де гарні схили і пляжі. Місце популярне, туристичне, але краса його перевершує всі мінуси туристичних розваг',
            location: {
                center: { lon: 32.33638, lat: 35.06599 },
                zoom: 15.11,
                pitch: 35.00,
                bearing: -144.00
            },
            onChapterEnter: [
                {
                    layer: '',
                    opacity: 0.25
                }
            ],
            onChapterExit: [
                {
                    layer: '',
                    opacity: 0
                }
            ]
        },
        {
            id: 'sperry2015',
            alignment: 'left',
            title: 'Остання ніч в Пафосі',
            image: '',
            description: 'Поруч все вже побачили, а саме місто Пафос залишалось загадкою, тому ми швидко це почали виправляти останнього дня. Гуляємо, гуляємо, а надвечір заселилися до найкрутіших за нашу подорож апартаментів за 50 євро - окремої квартири з сучасним ремонтом, всіма зручностями. Коротше, суто прокайфували. Це саме те, що потрібно було останньої ночі на Кіпрі....',
            location: {
                center: { lon: 32.42436, lat: 34.77661 },
                zoom: 14.23,
                pitch: 9.50,
                bearing: 68.00
            },
            onChapterEnter: [
                {
                    layer: '',
                    opacity: 0.25
                }
            ],
            onChapterExit: [
                {
                    layer: '',
                    opacity: 0
                }
            ]
        },
        {
            id: 'our_way',
            alignment: 'left',
            title: 'Загальний маршрут',
            image: '',
            description: '',
            location: {
                center: { lon: 32.90786, lat: 34.81611 },
                zoom: 9.17,
                pitch: 32.50,
                bearing: -12.42
            },
            onChapterEnter: [
                {
                    layer: 'cyprus-track',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: '',
                    opacity: 0
                }
            ]
        }
    ]
};