import{b as k}from"./chunk-PQG5MP3N.js";import{Ab as l,F as y,Ia as I,J as g,L as T,Pb as E,Rb as h,Tb as m,a as u,b as f,ba as w,d as c,fb as v,m as p,pa as n,ua as C}from"./chunk-E7LU6J2I.js";var S=`
  @page {
    margin: 0;
    size: 80mm auto;
  }

  html,
  body {
    width: 80mm;
    max-width: 80mm;
    min-width: 80mm;
    margin: 0;
    padding: 0;
    background: #ffffff;
    color: #000000;
    overflow: visible;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  .receipt-print,
  .receipt-print * {
    visibility: visible;
  }

  @media print {
    html,
    body {
      width: 80mm !important;
      max-width: 80mm !important;
      margin: 0 !important;
      padding: 0 !important;
    }

    body {
      background: #ffffff !important;
    }
  }
`;function A(o){return o.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi,"")}function P(o){let d=A(o.trim()),e=`<style id="pos-receipt-print-isolation">${S}</style>`;return/<\/head>/i.test(d)?d.replace(/<\/head>/i,`${e}</head>`):/<html[\s>]/i.test(d)?d.replace(/<html([^>]*)>/i,`<html$1><head><meta charset="utf-8">${e}</head>`):`<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Ticket</title>
  ${e}
</head>
<body>
  <div class="receipt-print">${d}</div>
</body>
</html>`}var b=(()=>{class o{constructor(){this.htmlContent=""}static prepareForPrint(e){return P(e)}static{this.\u0275fac=function(t){return new(t||o)}}static{this.\u0275cmp=T({type:o,selectors:[["app-print-receipt"]],inputs:{htmlContent:"htmlContent"},standalone:!0,features:[v],decls:1,vars:1,consts:[[1,"receipt-print",3,"innerHTML"]],template:function(t,r){t&1&&I(0,"div",0),t&2&&C("innerHTML",r.htmlContent,w)},dependencies:[E],styles:["[_nghost-%COMP%]{display:none!important;position:absolute;width:0;height:0;overflow:hidden;pointer-events:none}.receipt-print[_ngcontent-%COMP%]{width:80mm;max-width:80mm;margin:0 auto;font-family:sans-serif,system-ui,-apple-system,BlinkMacSystemFont;font-size:12px;color:#000;background:#fff}@media print{[_nghost-%COMP%]{display:block!important;position:static;width:80mm;height:auto;overflow:visible}.receipt-print[_ngcontent-%COMP%]{width:80mm!important;max-width:80mm!important}}"]})}}return o})();var F={BOLETA:"B001",FACTURA:"F001"},B=(()=>{class o{constructor(){this.apiService=g(k),this.cart=n([]),this.currentCustomer=n(null),this.modalState=n({isOpen:!1,product:null,isEditing:!1}),this.toastMessage=n(null),this.paymentMethod=n("EFECTIVO"),this.isLoading=n(!1),this.documentType=n("TICKET_INTERNO"),this.serie=l(()=>{let e=this.documentType();return e==="TICKET_INTERNO"?"":F[e]??""}),this.lastSaleIdForReprint=n(null),this.grandTotal=l(()=>this.cart().reduce((e,t)=>e+t.total,0)),this.totalItems=l(()=>this.cart().reduce((e,t)=>e+t.quantity,0))}searchProductBySku(e){return c(this,null,function*(){this.isLoading.set(!0);try{return yield p(this.apiService.get("pos/products",{params:new h().set("sku",e)}))}catch(t){if(t instanceof m)switch(t.status){case 404:this.showToast("Producto no encontrado o c\xF3digo incorrecto");break;case 403:{let r=t.error?.message??t.error?.error,i=Array.isArray(r)?r[0]:r;this.showToast((typeof i=="string"&&i.trim()?i:null)??"No tienes permisos o un almac\xE9n asignado para este producto");break}case 500:this.showToast("Error interno del servidor al buscar el producto");break;default:this.showToast("Error de red o conexi\xF3n")}else this.showToast("Error de red o conexi\xF3n");return}finally{this.isLoading.set(!1)}})}searchCustomerByDni(e){return c(this,null,function*(){this.isLoading.set(!0);try{let t=yield p(this.apiService.get("pos/customers",{params:new h().set("dni",e)}));return t?(this.currentCustomer.set(t),this.showToast("Cliente encontrado"),!0):!1}catch{return this.showToast("Cliente no encontrado / Error API"),!1}finally{this.isLoading.set(!1)}})}processCheckoutWithPayments(e){return c(this,null,function*(){if(this.cart().length===0)return this.showToast("El carrito est\xE1 vac\xEDo");if(!Array.isArray(e)||e.length<1)return this.showToast("Debe registrar al menos un m\xE9todo de pago");this.isLoading.set(!0);let t={document_type:this.documentType(),serie:this.serie()||void 0,customer:{id:this.currentCustomer()?.id},total:this.grandTotal(),payments:e,items:this.cart().map(r=>({name:r.name,quantity:r.quantity,unitPrice:r.unitPrice,total:r.total,size:r.size,color:{product_size_id:r.color.product_size_id,color_id:r.color.color_id,colorName:r.color.colorName,hex:r.color.hex,inventory:r.color.inventory}}))};try{let r=yield p(this.apiService.post("pos/checkout",t));if(r?.success)this.clearCart(),this.lastSaleIdForReprint.set(r.sale_id),this.showToast(`Venta ${r.sale_id} Exitosa!`,4e3),yield this.printTicket(r.sale_id);else{let i=r?.message??r?.error,s=Array.isArray(i)?i[0]:i;this.showToast(typeof s=="string"&&s.trim()?s.trim():"La venta no pudo ser procesada")}}catch(r){let i="Error al procesar venta";if(r instanceof m){let s=r.error?.message||r.error?.error,a=Array.isArray(s)?s[0]:s;if(typeof a=="string"&&a.trim()){this.showToast(a.trim());return}}this.showToast(i)}finally{this.isLoading.set(!1)}})}processCheckout(){return c(this,null,function*(){if(this.cart().length===0)return this.showToast("El carrito est\xE1 vac\xEDo");let e=this.paymentMethod(),t="CASH";e==="YAPE/PLIN"&&(t="YAPE"),e==="TRANSFERENCIA"&&(t="CARD");let r=[{method:t,amount:this.grandTotal()}];return this.processCheckoutWithPayments(r)})}addItem(e){this.cart.update(t=>[...t,e]),this.showToast("Producto Agregado")}updateItem(e){this.cart.update(t=>t.map(r=>r.cartId===e.cartId?e:r)),this.showToast("\xCDtem Actualizado")}removeItem(e){this.cart.update(t=>t.filter(r=>r.cartId!==e))}clearCart(){this.cart.set([]),this.currentCustomer.set(null),this.paymentMethod.set("EFECTIVO"),this.documentType.set("TICKET_INTERNO"),this.modalState.set({isOpen:!1,product:null,isEditing:!1}),this.toastMessage.set(null),this.isLoading.set(!1),this.lastSaleIdForReprint.set(null)}updateQuantity(e,t){this.cart.update(r=>r.map(i=>{if(i.cartId===e){let s=i.quantity+t;if(s<=0)return i;let a=i.color.inventory?.available_quantity??0;return s>a?(this.showToast(`Stock m\xE1x: ${a}`),i):f(u({},i),{quantity:s,total:s*i.unitPrice})}return i}))}openAddModal(e){this.modalState.set({isOpen:!0,product:e,isEditing:!1})}openEditModal(e){this.searchProductBySku(e.sku).then(t=>{t&&this.modalState.set({isOpen:!0,product:t,isEditing:!0,editingCartItem:e})})}closeModal(){this.modalState.set({isOpen:!1,product:null,isEditing:!1})}showToast(e,t=2500){this.toastMessage.set(e),setTimeout(()=>this.toastMessage.set(null),t)}setPaymentMethod(e){this.paymentMethod.set(e)}printTicket(e){return c(this,null,function*(){try{let t=yield p(this.apiService.getHtml(`pos/sales/${e}/ticket`)),r=b.prepareForPrint(t);yield this.printHtmlInHiddenIframe(r)}catch(t){console.warn("No se pudo imprimir el ticket de venta",t),this.showToast("Venta registrada. Toca \xABImprimir ticket\xBB para reintentar.")}})}reprintLastTicket(){return c(this,null,function*(){let e=this.lastSaleIdForReprint();e!=null&&(yield this.printTicket(e))})}createHiddenIframeWithContent(e){this.removePrintFrame();let t=document.createElement("iframe");t.id="pos-ticket-print-frame",t.setAttribute("title","Ticket de venta"),t.setAttribute("style","display:none;position:absolute;width:0;height:0;border:0;visibility:hidden;"),document.body.appendChild(t);let r=t.contentDocument??t.contentWindow?.document;if(!r)throw new Error("No se pudo acceder al documento del iframe de impresi\xF3n");return r.open(),r.write(e),r.close(),t}printHtmlInHiddenIframe(e){return new Promise(t=>{let r;try{r=this.createHiddenIframeWithContent(e)}catch{this.showToast("Toca \xABImprimir ticket\xBB para reintentar."),t();return}let i=()=>{let s=r.contentWindow;if(!s){this.showToast("Toca \xABImprimir ticket\xBB para reintentar."),this.removePrintFrame(),t();return}let a=()=>{this.removePrintFrame(),t()};s.addEventListener("afterprint",a,{once:!0}),requestAnimationFrame(()=>{setTimeout(()=>{try{s.focus(),s.print()}catch{this.showToast("Toca \xABImprimir ticket\xBB para reintentar."),a();return}setTimeout(a,15e3)},300)})};r.contentDocument?.readyState==="complete"?i():r.onload=i})}removePrintFrame(){document.getElementById("pos-ticket-print-frame")?.remove()}static{this.\u0275fac=function(t){return new(t||o)}}static{this.\u0275prov=y({token:o,factory:o.\u0275fac,providedIn:"root"})}}return o})();export{b as a,B as b};
