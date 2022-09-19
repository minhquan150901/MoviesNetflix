// Xu li muot khi cuon ngang
export function SmoothHorizontalScrolling(e, time, amount, start) {
    var eAmt = amount / 100;
    var curTime = 0;
    var scrollCounter = 0;
    const y = window.scrollY;
    while (curTime <= time) {
        window.setTimeout(SHS_B, curTime, e, scrollCounter, eAmt, start, y);
        curTime += time / 100;
        scrollCounter++;
    }
    window.scrollTo(0, y);
}

function SHS_B(e, sc, eAmt, start, y) {
    e.scrollLeft = eAmt * sc + start;
}

// mau ngau nhien cua MenuItem
export function randomRgbaColor (opacity) {
    const R = Math.round(Math.random() * 255);
    const G = Math.round(Math.random() * 255);
    const B = Math.round(Math.random() * 255);
    let color = `rgba(${R}, ${G}, ${B}, ${opacity})`;
    return color;
}