(function($) {
    $('div#content').html(load_home())
    window.setInterval(function() {
        titleChanger();
    }, 400);
    var originalPageTitle = document.title;
    var changeTitleTimeout;
    $(document).on('visibilitychange', (e) => {
        clearTimeout(changeTitleTimeout)
        setInterval(changeTitle(originalPageTitle), 200);
    })
    
    $('.finger').each(function() { 
        this.addEventListener('click', function() {
            console.log('lol')
            $('#poop').html(`<div class="" id="secret" hidden>secret.
            </div>
            <iframe id="vid" hidden class="text-center" width="540" height="316" src="https://www.youtube-nocookie.com/embed/YIqbdnaPcT8?controls=0&autoplay=1" title="YouTube video player" frameborder="0" allow="autoplay; encrypted-media; gyroscope" ></iframe>    
            `)
            if ($('#secret').prop('hidden') == true) {
                $('#secret').removeAttr('hidden')
            }
            if ($('#vid').prop('hidden') == true) {
                $('#vid').removeAttr('hidden')
            }
        })
    })
})(jQuery);

function changeTitle(originalPageTitle) {
    document.title = document.hidden ? "Please come back :(" : originalPageTitle;
}

function toggle(section) {
    switch (section) {
        case "home":
            $('div#content').html(load_home())
            break;
        case "blog":
            $('div#content').html(load_blog())
            break;
        case "hisstory":
            $('div#content').html(load_hisstory())

            break;
        default:
            $('div#content').html("da fuq")
    }
};

function load_home() {
    home = `<div class="text-center">
        <span class="text-uppercase font-weight-bold">recent news</span>: nothing :)
    </div>`
    return home
};

function load_blog() {
    blog = `<div class="text-center">
        stupid fruit likes to make stupid stuff. maybe they won't even be fruits
    </div>`
    return blog
};

function load_hisstory() {
    hisstory = `
        <div id="marquee">
            <p>Honestly just go to Instagram</p>
        </div>
    `
    return hisstory
}

function titleChanger() {
    let curTitle = $('title').html();
    let rando = Math.floor(Math.random(curTitle.length) * 10)
    let pick = curTitle[rando]
    if (pick != " ") {
        if (pick === pick.toUpperCase()) {
            pick = pick.toLowerCase()
        } else {
            pick = pick.toUpperCase()
        }
    }
    newTitle = curTitle.replaceAt(rando, pick)
        // console.log(`${rando} ${pick} ${newTitle}`)
    $('title').html(newTitle)
}

String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}