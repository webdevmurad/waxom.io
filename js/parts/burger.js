function burger() {
    $(document).ready(function(){
        let link = $('.menu-link');
        let link_active = $('.menu-link_active');
        let menu = $('.menu');

        link.click(function(){
            link.toggleClass('menu-link_active');
            menu.toggleClass('menu_active');
        });
        link_active.click(function(){
            link.removeClass('menu-link_active');
        })
    });
}

    module.exports = burger;