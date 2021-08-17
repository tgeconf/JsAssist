export const imgUtils = {
    svg2url: (svgElement: HTMLElement) => {
        const svgString = svgElement.outerHTML;
        const svg = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
        const url = URL.createObjectURL(svg);
        return url;
    },
}