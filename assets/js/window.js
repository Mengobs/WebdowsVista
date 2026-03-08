let windows;

function reloadWindows() {
    windows = document.querySelectorAll("div.window");
    windowHandling();
}

function windowHandling() {
    windows.forEach(window => {
        window.querySelector("button.close").addEventListener("click", () => {
            window.classList.add("closing");
            // setTimeout(() => { document.body.removeChild(window) }, 600);
        });
    });
}

reloadWindows();