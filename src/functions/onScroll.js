export default function onScroll(main) {
    main.current.style.overflowY = main.current.scrollHeight > window.innerHeight ? 'scroll' : null;
}