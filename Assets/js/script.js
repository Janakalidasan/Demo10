fetch("./header.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector("header").innerHTML = data;
    });

fetch("./footer.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector("footer").innerHTML = data;
    });

    $(function () {
        $(window).on("scroll", function () {
            if ($(window).scrollTop() > 50) {
                $(".navbar").removeClass("navbar-bg");
                $(".navbar").addClass("navbar-bg2").style.top = "0";
            } else {
                $(".navbar").removeClass("navbar-bg2");
                $(".navbar").addClass("navbar-bg").style.top = "-50px";
            }
        });
    });