function script(src) {
    var script = document.createElement('script');
    script.src = src;

    document.head.appendChild(script); 
}

// function loadScripts() {
//     $LAB
//     .script('assets/js/lazy/loadStyles.js')
//     .wait()
//     .script('assets/js/jquery.min.js')
//     .wait()
//     .script('assets/js/smoothscroll.js')
//     .wait()
//     .script('assets/js/plugins.js')
//     .wait()
//     .script('assets/js/master.js')
//     .wait()
//     .script('revolution/js/revolution.addon.particles.min.js?ver=1.0.3')
//     .wait()
//     .script('assets/js/custom.js')
//     .wait()
//     .script('revolution/js/jquery.themepunch.tools.min.js')
//     .script('revolution/js/jquery.themepunch.revolution.min.js')
//     .script('revolution/js/revolution.extension.actions.min.js')
//     .script('revolution/js/revolution.extension.carousel.min.js')
//     .script('revolution/js/revolution.extension.kenburn.min.js')
//     .script('revolution/js/revolution.extension.layeranimation.min.js')
//     .script('revolution/js/revolution.extension.migration.min.js')
//     .script('revolution/js/revolution.extension.navigation.min.js')
//     .script('revolution/js/revolution.extension.parallax.min.js')
//     .script('revolution/js/revolution.extension.slideanims.min.js')
//     // .script('revolution/js/revolution.extension.video.min.js')


// }

function loadCriticScripts(){
    $LAB
    .script('assets/js/lazy/loadStyles.js')
    .wait()
    .script('assets/js/jquery.min.js')
    .wait()
    .script('assets/js/smoothscroll.js')
    .wait()
    .script('assets/js/plugins.js')
    .wait()
    .script('assets/js/master.js')
    .wait()
    .script('revolution/js/revolution.addon.particles.min.js?ver=1.0.3')
    .wait()
    .script('assets/js/custom.js')
    .wait()
    .script('revolution/js/jquery.themepunch.tools.min.js')
    .script('revolution/js/jquery.themepunch.revolution.min.js')
    .script('revolution/js/revolution.extension.actions.min.js')
    .script('revolution/js/revolution.extension.carousel.min.js')
    .script('revolution/js/revolution.extension.kenburn.min.js')
    .script('revolution/js/revolution.extension.layeranimation.min.js')
    .script('revolution/js/revolution.extension.migration.min.js')
    .script('revolution/js/revolution.extension.navigation.min.js')
    .script('revolution/js/revolution.extension.parallax.min.js')
    .script('revolution/js/revolution.extension.slideanims.min.js')
    .script('revolution/js/revolution.extension.video.min.js')
}
window.onload = function() {
    // loadScripts()

    script('https://www.googletagmanager.com/gtag/js?id=G-P9C5R2TY0D')
    script('assets/js/gtm.js')
    
       
        // !function (w, d, t) {
        //   w.TiktokAnalyticsObject = t; var ttq = w[t] = w[t] || []; ttq.methods = ["page", "track", "identify", "instances", "debug", "on", "off", "once", "ready", "alias", "group", "enableCookie", "disableCookie"], ttq.setAndDefer = function (t, e) { t[e] = function () { t.push([e].concat(Array.prototype.slice.call(arguments, 0))) } }; for (var i = 0; i < ttq.methods.length; i++)ttq.setAndDefer(ttq, ttq.methods[i]); ttq.instance = function (t) { for (var e = ttq._i[t] || [], n = 0; n < ttq.methods.length; n++)ttq.setAndDefer(e, ttq.methods[n]); return e }, ttq.load = function (e, n) { var i = "https://analytics.tiktok.com/i18n/pixel/events.js"; ttq._i = ttq._i || {}, ttq._i[e] = [], ttq._i[e]._u = i, ttq._t = ttq._t || {}, ttq._t[e] = +new Date, ttq._o = ttq._o || {}, ttq._o[e] = n || {}; var o = document.createElement("script"); o.type = "text/javascript", o.async = !0, o.src = i + "?sdkid=" + e + "&lib=" + t; var a = document.getElementsByTagName("script")[0]; a.parentNode.insertBefore(o, a) };

        //   ttq.load('C5IM9LC6J7TSRVQDH210');
        //   ttq.page();
        // }(window, document, 'ttq');
}
window.addEventListener('DOMContentLoaded', () => {
    loadCriticScripts()
});






