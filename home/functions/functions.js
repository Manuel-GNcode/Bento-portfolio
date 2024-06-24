const root = document.querySelector(':root');

let colorIndex = 0;
const lightColors = ["#ff6a6a", "#df70e7", "#17b525"];
const darkColors = ["#5a0000", "#4f0054", "#003005"];
let newColor = '';

export const changeDetailsColor = (isDark, changeDetails) => {
    const colors = isDark? lightColors : darkColors;
    
    if (changeDetails) {
        colorIndex++
        if (colorIndex == colors.length) colorIndex = 0;
        newColor = colors[colorIndex];
        root.style.setProperty('--details', newColor);
    } else {
        newColor = colors[colorIndex];
        root.style.setProperty('--details', newColor);
    }
}

export const changeTheme = (isDark)=>{
    if (isDark) {
        root.style.setProperty('--bg-color', '#000');
        root.style.setProperty('--bg-second', '#ffffff07')
        root.style.setProperty('--text-color', '#dddddd');
        root.style.setProperty('--second-text', '#9d9d9d');
        root.style.setProperty('--border', '#ffffff13');
    } else {
        root.style.setProperty('--bg-color', '#ced4da');
        root.style.setProperty('--bg-second', '#49505736')
        root.style.setProperty('--text-color', '#212529');
        root.style.setProperty('--second-text', '#1b2732');
        root.style.setProperty('--border', '#1d3557d2');
    }
    
}