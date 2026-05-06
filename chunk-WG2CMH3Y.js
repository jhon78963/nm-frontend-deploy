// src/app/private/directory/vendors/models/vendors.model.ts
var Vendor = class {
  constructor(role) {
    this.id = role.id;
    this.name = role.name;
    this.address = role.address ?? "";
    this.local = role.local;
    this.phone = role.phone;
  }
};

export {
  Vendor
};
//# sourceMappingURL=chunk-WG2CMH3Y.js.map
