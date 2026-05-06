// src/app/utils/dates.ts
function formatDateTime(date, datePipe) {
  return datePipe.transform(date, "yyyy-MM-dd HH:mm:ss");
}
function formatDateForApi(dateValue, datePipe) {
  if (!dateValue)
    return "";
  if (typeof dateValue === "string")
    return dateValue;
  try {
    return datePipe.transform(dateValue, "yyyy-MM-dd HH:mm:ss") || "";
  } catch (e) {
    return "";
  }
}

export {
  formatDateTime,
  formatDateForApi
};
//# sourceMappingURL=chunk-AO5WIXMD.js.map
