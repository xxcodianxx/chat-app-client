/** Dispatch event on click outside of node */
export function clickOutside(node: HTMLElement) {
    const handleClick = (event: MouseEvent) => {
        if (node && !node.contains(event.target as any) && !event.defaultPrevented) {
            node.dispatchEvent(new CustomEvent("click_outside"));
        }
    };

    document.addEventListener("click", handleClick, true);

    return {
        destroy() {
            document.removeEventListener("click", handleClick, true);
        },
    };
}
