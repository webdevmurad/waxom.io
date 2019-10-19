function burger() {
    $(document).ready(function(){
        let link = $('.menu-link');
        let menu = $('.menu');
        let link_active = $('.menu-link_active');
        let overlay = $('.overlay');

        link.click(function(){
            menu.toggleClass('menu_active');
            overlay.toggleClass('overlay-active');
        });
        link_active.click(function(){
            overlay.removeClass('overlay-active');
            menu.removeClass('menu_active');
        })
    });
}

    module.exports = burger;