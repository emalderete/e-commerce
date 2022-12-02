export class constructorNewItem {
    constructor(
        item_name,
        item_price,
        item_desc,
        item_cat,
        item_image1,
        item_image2
    ){
        this.name = item_name;
        this.price = item_price;
        this.description = item_desc;
        this.category = item_cat;
        this.cover_image = item_image1;
        this.optional_image = item_image2;
    }
};

export class constructorNewRegister {
    constructor (
        user_mail,
        user_password
    ){
        this.userMail = user_mail;
        this.userPassword = user_password;
    }
};

export class constructorUser {
    constructor(
        user_name,
        user_data
    ) {
        this.userName = user_name;
        this.userData = user_data;
    }
}

export class constructorLogedUser {
    constructor (
        user_name,
        is_Loged
    ){
        this.user = user_name;
        this.loged = is_Loged;
    }
}