import {YOU_HERE} from "../actions/actionConst";

const initialState = {
    projects: [
        {
            name: 'Isolation Project',
            path: 'isolation-project',
            url: 'https://new.isolation-project.ru/',
            gitUrl: null,
            preview: 'https://sun9-4.userapi.com/impg/lcYySOnmzSzgKcAK1PzaDni13MJ6L_wJQ7Dt_A/R0fjv94yFMk.jpg?size=890x179&quality=96&sign=a683ffd9c2b3342b0a95cca891ed03ab&type=album',
            description: 'Сайт не большого Квест-рума. Стек Front-end: React & Redux, SCSS. Основная задача сайта — информирование и запист на квесты. Имеет главную страницу с информацией о компании, списком квестов, контактную информацией. Страницы квестов с описанием, и инфомацией по квесту, формой записи. Адаптирован под все размеры экранов.',
            images: [
                'https://sun9-52.userapi.com/impg/6X7ktezXv3DvCjY6SZ0ZSTQyrPCNudwcve8wfQ/PZtfgGz4DHw.jpg?size=1280x740&quality=96&sign=36c86b915b9f0353045208216add37fb&type=album',
                'https://sun9-46.userapi.com/impg/OiwLdSxEhbKJVnsHDX9UMU--SnpVfODbuv8SKg/eJnDEkbPlSg.jpg?size=1280x740&quality=96&sign=8d7d17646bcefe9e5ae4a49a7515c7bc&type=album',
                'https://sun9-49.userapi.com/impg/XypOs5_p9gkSoA0zptZYFlmx3p7qub-lP2mrGA/wxlmyX-vH30.jpg?size=1280x740&quality=96&sign=553f3d102cf24987e2f8799552635b3d&type=album',
                'https://psv4.userapi.com/c520036/u132463526/docs/d48/bf320bb8e519/mobile.png?extra=gH7kTi2mj8ju12P--frPhWTf733TKrGSR0s23ilA4gEKTt0mbGevlhZzc2_H4Ij-Q7K7opRYE9Z0epRd3suq0jDz-l71byPESgLmU4a_EBMWRe44X-fN2caGpg9tplUUtqzX_Fyvl1YpfbekYN7NhuHeeQ',
            ]
        },
        {
            name: 'Автострахование',
            path: 'save-house',
            url: 'https://test-site-me1.000webhostapp.com',
            gitUrl: 'https://github.com/texs14/save_car',
            preview: 'https://sun9-44.userapi.com/impg/3nVeN7dTclu42rhI3AXGLgMYbWEzB3tiQ4Fs9w/XgWm7EjrQaU.jpg?size=1280x328&quality=96&sign=103926afd3b180594f90e63fa401bccc&type=album',
            description: 'Визитка страхового агента, реализована на WordPress. Страницы: Главная с информацией о "компанию", статьи о всяком страховом для СЕО продвижения, и калькулятор расчёта ОСАГО вставленный со стороннего сайта через iframe. Адаптирован под все размеры экранов.',
            images: [
                'https://sun9-1.userapi.com/impg/N4F3EB5MUgHn5f6nKo12AsRQt9gSZ9SHXdj1DQ/GNbzWWofLoQ.jpg?size=1280x740&quality=96&sign=5e42ea19eaa3f0005710bef3f23d1576&type=album',
                'https://sun9-36.userapi.com/impg/megZ-fwyowdlMzd7lgMIPj0dWPw1ZcDEguzLtQ/PtIQojPBzKY.jpg?size=1280x740&quality=96&sign=52f006f1ea612d87baccb72323d29071&type=album',
                'https://sun9-6.userapi.com/impg/5RcCbqMRyZIlBNLCSnPeF3jnlvWFyN_5NAbz2g/QBOmmYsWKqg.jpg?size=1280x740&quality=96&sign=b9c268abdce4f00444e31f60408fc0b8&type=album',
                'https://psv4.userapi.com/c520036/u132463526/docs/d46/b3dfe62bd82a/osago_nobile.png?extra=C43cPmidPhtyWe3kGNU1L-0yfo-hXgyjrOENwH-qqNYkVElKkMPPR5Wv_dmPyzjg9VbAwA3cMhDcX0Ku2kEBrGWxtLD2FH3x7gUanh8SRZMUGBNIYpOwHey2wyZHmE7FtqvpJgv3pPVD9fhFx3UJa3Tm-w',
            ]

        },
        {
            name: 'Тестовая работа',
            path: 'test_job',
            url: null,
            gitUrl: 'https://github.com/texs14/test_work_1',
            preview: 'https://sun9-29.userapi.com/impg/LhG2qDdZSeWZkhRBUuuJSH_zhcEWS6vaJluDqQ/U2-itT5TGnk.jpg?size=1280x734&quality=96&sign=78e96530ae7bf51b0177a3be55c3944a&type=album',
            description: 'Тестовая работа. ТЗ уже не найду. Нужно было сделать три карточки с товаром, одна в состоянии "disable". Две активные, с состояниями: "наведения курсором", "выбрано", "выбрано и наведено". Адаптирован под все размеры экранов.',
            images: [
                'https://sun9-29.userapi.com/impg/LhG2qDdZSeWZkhRBUuuJSH_zhcEWS6vaJluDqQ/U2-itT5TGnk.jpg?size=1280x734&quality=96&sign=78e96530ae7bf51b0177a3be55c3944a&type=album',
                'https://sun9-69.userapi.com/impg/Kp8LcyBLfhPLuthg5b3WFdU8pl4iRp2VVK-LHQ/sbGlYoRVd4Y.jpg?size=1280x734&quality=96&sign=e355ecfcc4b7ce7322d0e63e9c114954&type=album',
                'https://sun9-32.userapi.com/impg/zUfBjWdGCGG2B9O_VqU2Zd2v--zpQGGID7jyFA/VCde0_SMvvM.jpg?size=1280x735&quality=96&sign=84e4f2cf077b49e723eaf148e82cce59&type=album',
                'https://sun9-10.userapi.com/impg/O4mF2eTXwBbaBNQtVfx4JyvjQ7JdmeYFFeiyrw/RjsmW44hOGU.jpg?size=1280x734&quality=96&sign=156ee5af6646a3e66db2fc6a4f1ffd26&type=album'
            ]
        },
        {
            name: 'Портфолио',
            path: 'portfolio',
            url: 'https://russite.000webhostapp.com',
            gitUrl: 'https://github.com/texs14/portfolio',
            preview: 'https://sun9-56.userapi.com/impg/rFs4HAWa1JYaDBUogjNcVg7C7xcfTRSTHr0sew/rkbKnW3dwkQ.jpg?size=1280x250&quality=96&sign=e22c63e111125a81a59c0fbbdfdbb235&type=album',
            description: 'Сайт-портфолио —  моя визитная карточка для поиска работы и предназначен исключительно для мини-презентаций моих работ и кратким описанием меня. С одной стороны он не имеет особого смысла, ведь почти дублирует резюме с HH, но пусть будет.',
            images: [
                'https://sun9-23.userapi.com/impg/lqIMFGtkX60SIUNx7-9hgcdaqpr9afJxPLe1iw/uA5iwGTSJyk.jpg?size=1280x734&quality=96&sign=65e90fb56e8c7c91d3cffa939d3c40c6&type=album',
                'https://sun9-69.userapi.com/impg/aJU-vYyMYcPvefNya9nGKPvcIFTTwsl0WizLFQ/UweS8BR8ai4.jpg?size=1280x734&quality=96&sign=b4b12d4857a652f06d3238be6e59e6ae&type=album',
                'https://sun9-11.userapi.com/impg/XMJZ5zSB1GiqbWUUfYfrtVxt0bzSYeXUcBHR-g/1aKjoPqOrcw.jpg?size=1280x734&quality=96&sign=461c774afe8aaf2ec3bfc7c175bba269&type=album',

            ]
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
                    path: "/cases"
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