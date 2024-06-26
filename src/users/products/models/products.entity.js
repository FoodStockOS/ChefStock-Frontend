export class Products {
    constructor(productId='', name = '', stock = 0, description = '', image = '', categoryId = 0){
        this.productId = productId;
        this.name = name;
        this.stock = stock;
        this.description = description;
        this.image = image;
        this.categoryId = categoryId
    }
}