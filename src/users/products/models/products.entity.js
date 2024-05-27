export class Products {
    constructor(id='', name = '', quantity = 0, category = '', description = '', image = '') {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.category = category;
        this.description = description;
        this.image = image;
    }
}