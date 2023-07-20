export function isImages(event: Event): boolean {
    const targetElement = event.target as HTMLInputElement;
    if (
        targetElement &&
        targetElement.files &&
        targetElement.files.length > 0
    ) {
        const file = targetElement.files[0];
        const reverseNameFile = file.name.split("").reverse().join("");
        const index = reverseNameFile.indexOf(".") + 1;
        const format = reverseNameFile
            .slice(0, index)
            .split("")
            .reverse()
            .join("")
            .toUpperCase();

        const isFormat =
            format === ".JPEG" ||
            format === ".PNG" ||
            format === ".GIF" ||
            format === ".SVG"
                ? true
                : false;

        return isFormat;
    }
    return false;
}
