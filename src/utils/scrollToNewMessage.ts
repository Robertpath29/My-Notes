export function scrollToNewMessage(
    element: React.MutableRefObject<HTMLDivElement | null>
) {
    if (element.current) {
        element.current.scrollTo(0, element.current.scrollHeight);
    }
}
