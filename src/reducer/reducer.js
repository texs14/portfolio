import {YOU_HERE} from "../actions/actionConst";

const initialState = {
    projects: [
        {
            name: 'Another site',
            path: 'another-project',
            description: 'сайт хуё маё',
            images: [
                'https://s.poembook.ru/theme/e4/ce/3e/acd5e666cb88d555bafccf3c0cd04ae0cd17f290.jpeg'
            ],

        },
        {
            name: 'Another site2',
            path: 'another-project2',
            description: 'сайт хуё маё',
            images: [
                'https://avatars.mds.yandex.net/get-zen_doc/251164/pub_5c93853642c5cc00b3ccea6e_5c9388c0a328fe00af70f332/scale_1200'
            ],

        },
        {
            name: 'Another site22',
            path: 'another-project22',
            description: 'сайт хуё маё',
            images: [
                'https://faunistics.com/wp-content/uploads/2020/01/11-4.jpg'
            ],

        },
        {
            name: 'Another site222',
            path: 'another-project222',
            description: 'сайт хуё маё',
            images: [
                'http://andrey-eltsov.ru/wp-content/uploads/2021/01/yhe382994bh_sh-wago-gh_a7239kkkw_3-6mjh_j-amerikanskaja-kunica-na-sn.jpg'
            ],

        }
    ],
    menu: {
        youAreHere: window.location.pathname,
        elements: [
            {
                title: 'Home',
                path: "/"
            },
            {
                title: 'About',
                    path: "/about",
                    projects:
                        [
                            {
                                title: 'another project',
                                path: '/another-project'
                            },
                            {
                                title: 'another project2',
                                path: '/another-project2'
                            },
                            {
                                title: 'another project22',
                                path: '/another-project22'
                            },
                            {
                                title: 'another project222',
                                path: '/another-project222'
                            }
                        ]
            }
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