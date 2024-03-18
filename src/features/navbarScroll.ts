


/**
 * Скроллинг до конкретного элемента по id.
 * В случае если элемент не будет найден, страница не будет скролиться
 *
 * @param elementId ID Элемента в DOM
 */
export const scrollToElement = (elementId: string) => {
    const element: HTMLElement|null = document.getElementById(elementId);
    const offset: number = element?element.offsetTop:0; // отступ от начала страницы

    window.scrollTo({
        top: offset,
        behavior:"smooth"
    })

}