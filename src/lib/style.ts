export function getRoundStyle(size: number) {
    return {
        width: size,
        height: size,
        borderRadius: size,
    }
}

let screenWidth: number = 0;

export function getScreenWidth() {
    if(screenWidth === 0)
        screenWidth = window.innerWidth;
    return screenWidth;
}

let screenHeight: number = 0;

export function getScreenHeight() {
    if(screenHeight === 0)
        screenHeight = window.innerHeight;
    return screenHeight;
}