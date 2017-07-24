class Contact {
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.online = false;
    }

    render(id) {
        let article = $('<article>');
        let title = $('<div>').addClass('title');
        if (this.online === true) {
            title.addClass("title online");
        }

        title.text(this.firstName, this.firstName);
        let info = $('<div>').addClass("info").css("display", "none");
        let button = $('<button>').html('&#8505;');
        button.on('click', function () {
            info.toggle()
        });
        let phone = $('<span>').html("&phone;").text(this.phone);
        let email = $('<span>').html("&#9993;").text(this.email);

        title.append(button);
        info.append(phone);
        info.append(email);
        article.append(title);
        article.append(info);
        $(`#${id}`).append(article);
    }
}

let contacts = [
    new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
    new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
    new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
];
contacts.forEach(c => c.render('main'));

// After 1 second, change the online status to true
setTimeout(() => contacts[1].online = true, 2000);
