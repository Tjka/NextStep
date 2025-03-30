// Extract these utility functions from NextStepReact.tsx
export const getElementPosition = (element) => {
    const rect = element.getBoundingClientRect();
    return {
        x: rect.left,
        y: rect.top,
        width: rect.width,
        height: rect.height,
    };
};
export const getScrollableParent = (element) => {
    if (!element)
        return document.documentElement;
    const style = getComputedStyle(element);
    const excludeStaticParent = style.position === 'absolute';
    const overflowRegex = /(auto|scroll)/;
    if (style.position === 'fixed')
        return document.body;
    for (let parent = element.parentElement; parent; parent = parent.parentElement) {
        const style = getComputedStyle(parent);
        if (excludeStaticParent && style.position === 'static')
            continue;
        if (overflowRegex.test(style.overflow + style.overflowY + style.overflowX))
            return parent;
    }
    return document.documentElement;
};
export const isElementScrollable = (element) => {
    const style = getComputedStyle(element);
    return /(auto|scroll)/.test(style.overflow + style.overflowY + style.overflowX);
};
