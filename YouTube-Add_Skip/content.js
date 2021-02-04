const url = location.host;

if (url === "www.youtube.com") {
    setInterval(
        function () {
            try {
                const add1 = document.getElementsByClassName("ytp-ad-overlay-close-container");
                add1[0].click();
            } catch (e) {}
            try {
                const add2 = document.getElementsByClassName("ytp-ad-skip-button-container");
                add2[0].click();
            } catch (e) {}
        }, 1000
    )
}
