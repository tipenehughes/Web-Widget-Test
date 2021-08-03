// window.zESettings = {
//     webWidget: {
//         zIndex: 101,
//     },
// };

const overlay = document.getElementById("overlay");

const setZindex = () => {
    zE("webWidget", "updateSettings", {
        webWidget: {
            zIndex: 1,
        },
    });
    overlay.style.display = "block";
};

