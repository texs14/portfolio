
// Функция проверяет текущий путь и путь на который введёт ссылка и добавляет ссылке класс активности

export function onActive(pathNameLocation, linkToPath) {
    const arrPath = pathNameLocation.split('/');
    const newLinkToPath = linkToPath === '/' ? "/" : linkToPath.replace(/\//g, '');

    if(pathNameLocation === linkToPath) return true;
    if(arrPath.findIndex((i)=> i === newLinkToPath) != -1) return true;
    return false;
}