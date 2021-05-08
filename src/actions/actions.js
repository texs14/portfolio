import {EXAMP, YOU_HERE, MAIN_SCROLL} from "./actionConst";

export const examp = () => {
    return {
        type: EXAMP
    }
}

export const whereYou = (thisAbout) => {
    return {
        type: YOU_HERE,
        payload: thisAbout
    }
}

export const mainScroll = (main) => {
    console.log('main.current.scrollHeight > window.innerHeight', main.current.scrollHeight > window.innerHeight);
    console.log('main.current.scrollHeight', main.current.scrollHeight);
    console.log('window.innerHeight', window.innerHeight);
    return {
        type: MAIN_SCROLL,
        payload: main.current.scrollHeight > window.innerHeight
    }
}