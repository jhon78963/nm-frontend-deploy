// src/app/private/inventories/products/models/products.model.ts
var ProductSave = class {
  constructor(product) {
    this.id = product.id;
    this.name = product.name;
    this.barcode = product.barcode;
    this.description = product.description;
    this.purchasePrice = product.purchasePrice;
    this.salePrice = product.salePrice;
    this.minSalePrice = product.minSalePrice;
    this.status = product.status;
    this.genderId = product.genderId;
    this.percentageDiscount = product.percentageDiscount;
    this.cashDiscount = product.cashDiscount;
    this.warehouseId = product.warehouseId;
  }
};

export {
  ProductSave
};
//# sourceMappingURL=chunk-NSEHX36K.js.map
