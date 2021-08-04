// window.zESettings = {
//     webWidget: {
//         zIndex: 101,
//     },
// };

const overlay = document.getElementById("overlay");

const setZindexBehind = () => {
    zE("webWidget", "updateSettings", {
        webWidget: {
            zIndex: 1,
        },
    });
    overlay.style.display = "block";
};

const setZindexFront = () => {
    zE("webWidget", "updateSettings", {
        webWidget: {
            zIndex: 3,
        },
    });
    overlay.style.display = "block";
};

const closeModal = () => {
    overlay.style.display = "none";
};

