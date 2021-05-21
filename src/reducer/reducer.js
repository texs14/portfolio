import {YOU_HERE} from "../actions/actionConst";

const initialState = {
    projects: [
        {
            name: 'Another site',
            path: 'another-project',
            description: {
                paragraphFirst: 'First paragraph',
                paragraphSecond: 'Second paragraph',
                paragraphThird: 'Third paragraph',
                paragraphFourth: 'Fourth paragraph',
            },
            preview: 'https://sun9-4.userapi.com/impg/lcYySOnmzSzgKcAK1PzaDni13MJ6L_wJQ7Dt_A/R0fjv94yFMk.jpg?size=890x179&quality=96&sign=a683ffd9c2b3342b0a95cca891ed03ab&type=album',
            images: {
                desktop: [
                    'https://sun9-46.userapi.com/impg/OiwLdSxEhbKJVnsHDX9UMU--SnpVfODbuv8SKg/eJnDEkbPlSg.jpg?size=1280x740&quality=96&sign=8d7d17646bcefe9e5ae4a49a7515c7bc&type=album',
                'https://sun9-52.userapi.com/impg/F7C0PVFDmvazlje9oEDfCt_LjeqYcWoswHVEGg/_vVImOadxo8.jpg?size=1280x740&quality=96&sign=bb1e2e20b55740fedb01cc3fac0193d9&type=album',
                'https://sun9-49.userapi.com/impg/XypOs5_p9gkSoA0zptZYFlmx3p7qub-lP2mrGA/wxlmyX-vH30.jpg?size=1280x740&quality=96&sign=553f3d102cf24987e2f8799552635b3d&type=album'
                ],
                mobile: [
                    'https://sun9-1.userapi.com/impg/3M90Ccx_VWn-VhRMx80lFJ9jQMkuTyXJDGcxrQ/UJjWpbYHCAY.jpg?size=1280x832&quality=96&sign=973d0fe798ea3298073d00816e68040d&type=album'
                ]
            },

        },
        {
            name: 'Another site2',
            path: 'another-project2',
            description: {
                paragraphFirst: 'First paragraph',
                paragraphSecond: 'Second paragraph',
                paragraphThird: 'Third paragraph',
                paragraphFourth: 'Fourth paragraph',
            },
            preview: 'https://sun9-4.userapi.com/impg/lcYySOnmzSzgKcAK1PzaDni13MJ6L_wJQ7Dt_A/R0fjv94yFMk.jpg?size=890x179&quality=96&sign=a683ffd9c2b3342b0a95cca891ed03ab&type=album',
            images: {
                desktop: [
                    'https://sun9-2.userapi.com/impg/x23mBhVYlBHfajGnDe0_OCbvU4FYdNh9-XqjyA/hPcWwjkxoSY.jpg?size=375x812&quality=96&sign=57cddb77de0249778cdd9606c02d2fbd&type=album',
                    'https://sun9-10.userapi.com/impg/65MfyJOBPca5sHH93C7Zhc3arKTKjz9j30rIQg/2u-J2NISP3U.jpg?size=375x812&quality=96&sign=0e234b0479181225bcf8292af3d03e45&type=album',
                    'https://sun9-45.userapi.com/impg/l8kuJzaqJvGDi0Npu8l7piuvgCx9Qrumc5RQJA/eUeF-5i6Lqw.jpg?size=375x812&quality=96&sign=28b79b1eea79cef53d0c6983f62aa76a&type=album'
                ],
                mobile: [
                    'https://sun9-1.userapi.com/impg/3M90Ccx_VWn-VhRMx80lFJ9jQMkuTyXJDGcxrQ/UJjWpbYHCAY.jpg?size=1280x832&quality=96&sign=973d0fe798ea3298073d00816e68040d&type=album'
                ]
            },

        },
        {
            name: 'Another site22',
            path: 'another-project22',
            description: {
                paragraphFirst: 'First paragraph',
                paragraphSecond: 'Second paragraph',
                paragraphThird: 'Third paragraph',
                paragraphFourth: 'Fourth paragraph',
            },
            preview: 'https://sun9-4.userapi.com/impg/lcYySOnmzSzgKcAK1PzaDni13MJ6L_wJQ7Dt_A/R0fjv94yFMk.jpg?size=890x179&quality=96&sign=a683ffd9c2b3342b0a95cca891ed03ab&type=album',
            images: {
                desktop: [
                    'https://sun9-2.userapi.com/impg/x23mBhVYlBHfajGnDe0_OCbvU4FYdNh9-XqjyA/hPcWwjkxoSY.jpg?size=375x812&quality=96&sign=57cddb77de0249778cdd9606c02d2fbd&type=album',
                    'https://sun9-10.userapi.com/impg/65MfyJOBPca5sHH93C7Zhc3arKTKjz9j30rIQg/2u-J2NISP3U.jpg?size=375x812&quality=96&sign=0e234b0479181225bcf8292af3d03e45&type=album',
                    'https://sun9-45.userapi.com/impg/l8kuJzaqJvGDi0Npu8l7piuvgCx9Qrumc5RQJA/eUeF-5i6Lqw.jpg?size=375x812&quality=96&sign=28b79b1eea79cef53d0c6983f62aa76a&type=album'
                ],
                mobile: [
                    'https://sun9-1.userapi.com/impg/3M90Ccx_VWn-VhRMx80lFJ9jQMkuTyXJDGcxrQ/UJjWpbYHCAY.jpg?size=1280x832&quality=96&sign=973d0fe798ea3298073d00816e68040d&type=album'
                ]
            },

        },
        {
            name: 'Another site222',
            path: 'another-project222',
            description: {
                paragraphFirst: 'First paragraph',
                paragraphSecond: 'Second paragraph',
                paragraphThird: 'Third paragraph',
                paragraphFourth: 'Fourth paragraph',
            },
            preview: 'https://sun9-4.userapi.com/impg/lcYySOnmzSzgKcAK1PzaDni13MJ6L_wJQ7Dt_A/R0fjv94yFMk.jpg?size=890x179&quality=96&sign=a683ffd9c2b3342b0a95cca891ed03ab&type=album',
            images: {
                desktop: [
                    'https://sun9-2.userapi.com/impg/x23mBhVYlBHfajGnDe0_OCbvU4FYdNh9-XqjyA/hPcWwjkxoSY.jpg?size=375x812&quality=96&sign=57cddb77de0249778cdd9606c02d2fbd&type=album',
                    'https://sun9-10.userapi.com/impg/65MfyJOBPca5sHH93C7Zhc3arKTKjz9j30rIQg/2u-J2NISP3U.jpg?size=375x812&quality=96&sign=0e234b0479181225bcf8292af3d03e45&type=album',
                    'https://sun9-45.userapi.com/impg/l8kuJzaqJvGDi0Npu8l7piuvgCx9Qrumc5RQJA/eUeF-5i6Lqw.jpg?size=375x812&quality=96&sign=28b79b1eea79cef53d0c6983f62aa76a&type=album'
                ],
                mobile: [
                    'https://sun9-1.userapi.com/impg/3M90Ccx_VWn-VhRMx80lFJ9jQMkuTyXJDGcxrQ/UJjWpbYHCAY.jpg?size=1280x832&quality=96&sign=973d0fe798ea3298073d00816e68040d&type=album'
                ]
            },

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
                title: 'Projects',
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