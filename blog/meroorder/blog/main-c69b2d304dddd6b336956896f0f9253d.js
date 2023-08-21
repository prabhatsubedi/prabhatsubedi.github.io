var process = process || {env: {NODE_ENV: "development"}};
(function () {
    window.onscroll = function () {
        // show or hide the back-top-top button
        var backToTo = document.querySelector(".scroll-top");
        console.log(backToTo)
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            backToTo.style.display = "flex";
        } else {
            backToTo.style.display = "none";
        }
    };

}) ();

