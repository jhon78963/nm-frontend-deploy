// src/app/utils/notifications.ts
function showSuccess(messageService, message) {
  messageService.add({
    severity: "success",
    summary: "Confirmado",
    detail: message,
    life: 3e3
  });
}
function showError(messageService, message) {
  messageService.add({
    severity: "error",
    summary: "Error",
    detail: message,
    life: 3e3
  });
}
function showToastWarn(messageService, message) {
  messageService.add({
    severity: "warn",
    summary: "Conflicto",
    detail: message,
    life: 15e3
  });
}

export {
  showSuccess,
  showError,
  showToastWarn
};
//# sourceMappingURL=chunk-MEV3ATV3.js.map
