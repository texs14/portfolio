import {YOU_HERE} from "../actions/actionConst";

const initialState = {
    modalWindow: {
        isOpen: false,
        src: ''
    },
    projects: [
        {
            name: 'Isolation Project',
            path: 'isolation-project',
            preview: 'https://sun9-4.userapi.com/impg/lcYySOnmzSzgKcAK1PzaDni13MJ6L_wJQ7Dt_A/R0fjv94yFMk.jpg?size=890x179&quality=96&sign=a683ffd9c2b3342b0a95cca891ed03ab&type=album',
            description: {
                desctop:
                    [
                        {
                            paragraph: 'Вот вам яркий пример современных тенденций - граница обучения кадров напрямую зависит от новых принципов формирования материально-технической и кадровой базы. С другой стороны, курс на социально-ориентированный национальный проект, а также свежий взгляд на привычные вещи - безусловно открывает новые горизонты для переосмысления внешнеэкономических политик. В своём стремлении повысить качество жизни, они забывают, что повышение уровня гражданского сознания создаёт предпосылки для направлений прогрессивного развития.',
                            image: 'https://sun9-2.userapi.com/impg/x23mBhVYlBHfajGnDe0_OCbvU4FYdNh9-XqjyA/hPcWwjkxoSY.jpg?size=375x812&quality=96&sign=57cddb77de0249778cdd9606c02d2fbd&type=album'
                        },
                        {
                            paragraph: 'Лишь активно развивающиеся страны третьего мира являются только методом политического участия и призваны к ответу. Современные технологии достигли такого уровня, что базовый вектор развития, в своём классическом представлении, допускает внедрение анализа существующих паттернов поведения.',
                            image: 'https://sun9-46.userapi.com/impg/OiwLdSxEhbKJVnsHDX9UMU--SnpVfODbuv8SKg/eJnDEkbPlSg.jpg?size=1280x740&quality=96&sign=8d7d17646bcefe9e5ae4a49a7515c7bc&type=album'
                        },
                        {
                            paragraph: 'В целом, конечно, семантический разбор внешних противодействий выявляет срочную потребность поставленных обществом задач.',
                            image: 'https://sun9-2.userapi.com/impg/x23mBhVYlBHfajGnDe0_OCbvU4FYdNh9-XqjyA/hPcWwjkxoSY.jpg?size=375x812&quality=96&sign=57cddb77de0249778cdd9606c02d2fbd&type=album'
                        },
                        {
                            paragraph: 'Fourth paragraph',
                            image: 'https://sun9-49.userapi.com/impg/XypOs5_p9gkSoA0zptZYFlmx3p7qub-lP2mrGA/wxlmyX-vH30.jpg?size=1280x740&quality=96&sign=553f3d102cf24987e2f8799552635b3d&type=album'
                        },
                    ],
                    mobile: {
                        paragraph: 'description mobile',
                        image: 'https://sun9-1.userapi.com/impg/3M90Ccx_VWn-VhRMx80lFJ9jQMkuTyXJDGcxrQ/UJjWpbYHCAY.jpg?size=1280x832&quality=96&sign=973d0fe798ea3298073d00816e68040d&type=album'
                    },
            },

        },
        {
            name: 'Isolation Project2',
            path: 'isolation-project2',
            preview: 'https://sun9-4.userapi.com/impg/lcYySOnmzSzgKcAK1PzaDni13MJ6L_wJQ7Dt_A/R0fjv94yFMk.jpg?size=890x179&quality=96&sign=a683ffd9c2b3342b0a95cca891ed03ab&type=album',
            description: {
                desctop:
                    [
                        {
                            paragraph: 'Вот вам яркий пример современных тенденций - граница обучения кадров напрямую зависит от новых принципов формирования материально-технической и кадровой базы. С другой стороны, курс на социально-ориентированный национальный проект, а также свежий взгляд на привычные вещи - безусловно открывает новые горизонты для переосмысления внешнеэкономических политик. В своём стремлении повысить качество жизни, они забывают, что повышение уровня гражданского сознания создаёт предпосылки для направлений прогрессивного развития.',
                            image: 'https://sun9-2.userapi.com/impg/x23mBhVYlBHfajGnDe0_OCbvU4FYdNh9-XqjyA/hPcWwjkxoSY.jpg?size=375x812&quality=96&sign=57cddb77de0249778cdd9606c02d2fbd&type=album'
                        },
                        {
                            paragraph: 'Лишь активно развивающиеся страны третьего мира являются только методом политического участия и призваны к ответу. Современные технологии достигли такого уровня, что базовый вектор развития, в своём классическом представлении, допускает внедрение анализа существующих паттернов поведения.',
                            image: 'https://sun9-46.userapi.com/impg/OiwLdSxEhbKJVnsHDX9UMU--SnpVfODbuv8SKg/eJnDEkbPlSg.jpg?size=1280x740&quality=96&sign=8d7d17646bcefe9e5ae4a49a7515c7bc&type=album'
                        },
                        {
                            paragraph: 'В целом, конечно, семантический разбор внешних противодействий выявляет срочную потребность поставленных обществом задач.',
                            image: 'https://sun9-2.userapi.com/impg/x23mBhVYlBHfajGnDe0_OCbvU4FYdNh9-XqjyA/hPcWwjkxoSY.jpg?size=375x812&quality=96&sign=57cddb77de0249778cdd9606c02d2fbd&type=album'
                        },
                        {
                            paragraph: 'Fourth paragraph',
                            image: 'https://sun9-49.userapi.com/impg/XypOs5_p9gkSoA0zptZYFlmx3p7qub-lP2mrGA/wxlmyX-vH30.jpg?size=1280x740&quality=96&sign=553f3d102cf24987e2f8799552635b3d&type=album'
                        },
                    ],
                    mobile: {
                        paragraph: 'description mobile',
                        image: 'https://sun9-1.userapi.com/impg/3M90Ccx_VWn-VhRMx80lFJ9jQMkuTyXJDGcxrQ/UJjWpbYHCAY.jpg?size=1280x832&quality=96&sign=973d0fe798ea3298073d00816e68040d&type=album'
                    },
            },

        },
        {
            name: 'Isolation Project3',
            path: 'isolation-project3',
            preview: 'https://sun9-4.userapi.com/impg/lcYySOnmzSzgKcAK1PzaDni13MJ6L_wJQ7Dt_A/R0fjv94yFMk.jpg?size=890x179&quality=96&sign=a683ffd9c2b3342b0a95cca891ed03ab&type=album',
            description: {
                desctop:
                    [
                        {
                            paragraph: 'Сайт квест рума. Основной задача которого — информирование и запись на квест. ',
                            image: 'https://sun9-52.userapi.com/impg/F7C0PVFDmvazlje9oEDfCt_LjeqYcWoswHVEGg/_vVImOadxo8.jpg?size=1280x740&quality=96&sign=bb1e2e20b55740fedb01cc3fac0193d9&type=album'
                        },
                        {
                            paragraph: 'Лишь активно развивающиеся страны третьего мира являются только методом политического участия и призваны к ответу. Современные технологии достигли такого уровня, что базовый вектор развития, в своём классическом представлении, допускает внедрение анализа существующих паттернов поведения.',
                            image: 'https://sun9-46.userapi.com/impg/OiwLdSxEhbKJVnsHDX9UMU--SnpVfODbuv8SKg/eJnDEkbPlSg.jpg?size=1280x740&quality=96&sign=8d7d17646bcefe9e5ae4a49a7515c7bc&type=album'
                        },
                        {
                            paragraph: 'В целом, конечно, семантический разбор внешних противодействий выявляет срочную потребность поставленных обществом задач.',
                            image: 'https://sun9-49.userapi.com/impg/XypOs5_p9gkSoA0zptZYFlmx3p7qub-lP2mrGA/wxlmyX-vH30.jpg?size=1280x740&quality=96&sign=553f3d102cf24987e2f8799552635b3d&type=album'
                        },
                    ],
                    mobile: {
                        paragraph: 'description mobile',
                        image: 'https://sun9-1.userapi.com/impg/3M90Ccx_VWn-VhRMx80lFJ9jQMkuTyXJDGcxrQ/UJjWpbYHCAY.jpg?size=1280x832&quality=96&sign=973d0fe798ea3298073d00816e68040d&type=album'
                    },
            },

        },
    ],
    menu: {
        youAreHere: window.location.pathname,
        elements: [
            {
                title: 'Главная',
                path: "/"
            },
            {
                title: 'Работы',
                    path: "/about"
            },
        ]
    },
};

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case YOU_HERE:
            return {
                ...state,
                menu: {
                    ...state.menu,
                    youAreHere: action.payload
                }
            };

        default:
            return state;
    }
}

export default reducer;