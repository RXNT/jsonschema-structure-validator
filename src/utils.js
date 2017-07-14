export function isDevelopment() {
  return process.env.NODE_ENV !== "production";
}

export function toError(message) {
  if (isDevelopment()) {
    throw new ReferenceError(message);
  } else {
    console.error(message);
  }
}
