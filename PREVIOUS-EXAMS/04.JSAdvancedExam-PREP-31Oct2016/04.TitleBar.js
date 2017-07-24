class TitleBar {
    constructor(title) {
        this.title = title;
        this.links = [];
    }

    //takes two string arguments and adds a link to the menu list
    addLink(href, name) {
        let link = $('<a>');
        link.addClass('menu-link');
        link.attr('href', href);
        link.text(name);

        this.links.push(link);
    }

    //takes one string argument, generates HTML element and adds it to the passed in selector
    appendTo(selector) {

        let header = $('<header>').addClass('header');
        let headerRow = $('<div>').addClass('header-row');
        let button = $('<a>').addClass('button').html('&#9776;');
        button.on('click', function () {
            $('div.drawer').toggle()
        });
        let span = $('<span>').addClass('title').text(this.title);

        let drawer = $('<div>').addClass('drawer');
        let navMenu = $('<nav>').addClass('menu');
        for (let link of this.links) {
            navMenu.append(link);
        }

        headerRow.append(button);
        headerRow.append(span);

        drawer.append(navMenu);

        header.append(headerRow);
        header.append(drawer);
        $(selector).prepend(header);
    }
}