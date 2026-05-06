import {
  ApiService
} from "./chunk-TC2MDCQP.js";
import {
  __async,
  __spreadProps,
  __spreadValues,
  computed,
  firstValueFrom,
  inject,
  signal,
  ɵɵdefineInjectable
} from "./chunk-OI5KBWGW.js";

// src/app/private/finance/sales/pos/services/pos.service.ts
var PosService = class _PosService {
  constructor() {
    this.apiService = inject(ApiService);
    this.cart = signal([]);
    this.currentCustomer = signal(null);
    this.modalState = signal({
      isOpen: false,
      product: null,
      isEditing: false
    });
    this.toastMessage = signal(null);
    this.paymentMethod = signal("EFECTIVO");
    this.isLoading = signal(false);
    this.grandTotal = computed(() => this.cart().reduce((acc, item) => acc + item.total, 0));
    this.totalItems = computed(() => this.cart().reduce((acc, item) => acc + item.quantity, 0));
  }
  // --- API METHODS ---
  searchProductBySku(sku) {
    return __async(this, null, function* () {
      this.isLoading.set(true);
      try {
        const product = yield firstValueFrom(this.apiService.get(`pos/products?sku=${sku}`));
        return product;
      } catch (error) {
        console.error("Error buscando producto:", error);
        this.showToast("Producto no encontrado");
        return void 0;
      } finally {
        this.isLoading.set(false);
      }
    });
  }
  searchCustomerByDni(dni) {
    return __async(this, null, function* () {
      this.isLoading.set(true);
      try {
        const customer = yield firstValueFrom(this.apiService.get(`pos/customers?dni=${dni}`));
        if (customer) {
          this.currentCustomer.set(customer);
          this.showToast("Cliente encontrado");
          return true;
        }
        return false;
      } catch (error) {
        console.error("Error buscando cliente:", error);
        this.showToast("Cliente no encontrado / Error API");
        return false;
      } finally {
        this.isLoading.set(false);
      }
    });
  }
  // --- NUEVO MÉTODO PARA PAGOS HÍBRIDOS (Integrado) ---
  processCheckoutWithPayments(payments) {
    return __async(this, null, function* () {
      if (this.cart().length === 0) {
        return this.showToast("El carrito est\xE1 vac\xEDo");
      }
      this.isLoading.set(true);
      const payload = {
        // Usamos objeto customer para compatibilidad si el backend espera 'customer.id'
        customer: { id: this.currentCustomer()?.id },
        total: this.grandTotal(),
        payments,
        items: this.cart().map((item) => ({
          name: item.name,
          quantity: item.quantity,
          unitPrice: item.unitPrice,
          total: item.total,
          size: item.size,
          // Volvemos a anidar los IDs dentro de 'color' como antes
          color: {
            product_size_id: item.color.product_size_id,
            color_id: item.color.color_id,
            colorName: item.color.colorName,
            hex: item.color.hex,
            stock: item.color.stock
          }
        }))
      };
      try {
        const response = yield firstValueFrom(this.apiService.post("pos/checkout", payload));
        if (response.success) {
          this.showToast(`Venta ${response.sale_id} Exitosa!`);
          this.printTicket(response.sale_id);
          this.clearCart();
        }
      } catch (error) {
        this.showToast("Error al procesar venta");
        console.error(error);
      } finally {
        this.isLoading.set(false);
      }
    });
  }
  // Mantenemos el método antiguo por compatibilidad (o para llamadas simples)
  processCheckout() {
    return __async(this, null, function* () {
      if (this.cart().length === 0) {
        return this.showToast("El carrito est\xE1 vac\xEDo");
      }
      const currentMethod = this.paymentMethod();
      let backendMethod = "CASH";
      if (currentMethod === "YAPE/PLIN")
        backendMethod = "YAPE";
      if (currentMethod === "TRANSFERENCIA")
        backendMethod = "CARD";
      const payments = [
        {
          method: backendMethod,
          amount: this.grandTotal()
        }
      ];
      return this.processCheckoutWithPayments(payments);
    });
  }
  // --- GESTIÓN LOCAL (Igual que antes) ---
  addItem(item) {
    this.cart.update((prev) => [...prev, item]);
    this.showToast("Producto Agregado");
  }
  updateItem(updatedItem) {
    this.cart.update((items) => items.map((i) => i.cartId === updatedItem.cartId ? updatedItem : i));
    this.showToast("\xCDtem Actualizado");
  }
  removeItem(cartId) {
    this.cart.update((items) => items.filter((i) => i.cartId !== cartId));
  }
  clearCart() {
    this.cart.set([]);
    this.currentCustomer.set(null);
    this.paymentMethod.set("EFECTIVO");
  }
  updateQuantity(cartId, delta) {
    this.cart.update((items) => items.map((item) => {
      if (item.cartId === cartId) {
        const newQty = item.quantity + delta;
        if (newQty <= 0)
          return item;
        if (newQty > item.color.stock) {
          this.showToast(`Stock m\xE1x: ${item.color.stock}`);
          return item;
        }
        return __spreadProps(__spreadValues({}, item), { quantity: newQty, total: newQty * item.unitPrice });
      }
      return item;
    }));
  }
  openAddModal(product) {
    this.modalState.set({ isOpen: true, product, isEditing: false });
  }
  openEditModal(item) {
    this.searchProductBySku(item.sku).then((prod) => {
      if (prod) {
        this.modalState.set({
          isOpen: true,
          product: prod,
          isEditing: true,
          editingCartItem: item
        });
      }
    });
  }
  closeModal() {
    this.modalState.set({ isOpen: false, product: null, isEditing: false });
  }
  showToast(msg) {
    this.toastMessage.set(msg);
    setTimeout(() => this.toastMessage.set(null), 2500);
  }
  setPaymentMethod(method) {
    this.paymentMethod.set(method);
  }
  printTicket(saleId) {
    console.log("Imprimiendo ticket para venta ID:", saleId);
    const baseUrl = this.apiService.BASE_URL.replace(/\/api\/?$/, "");
    const ticketUrl = `${baseUrl}/pos/sales/${saleId}/ticket`;
    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    iframe.src = ticketUrl;
    document.body.appendChild(iframe);
    iframe.onload = () => {
      try {
        iframe.contentWindow?.print();
      } catch (e) {
        console.error(e);
      }
      setTimeout(() => {
        document.body.removeChild(iframe);
      }, 5e3);
    };
  }
  static {
    this.\u0275fac = function PosService_Factory(t) {
      return new (t || _PosService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PosService, factory: _PosService.\u0275fac, providedIn: "root" });
  }
};

export {
  PosService
};
//# sourceMappingURL=chunk-YX6E5JMI.js.map
