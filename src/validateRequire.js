import { toError } from "./utils";

export default function validateRequire(schema) {
  if (schema.required) {
    let missingFields = schema.required.filter(
      field => schema.properties[field] === undefined
    );
    if (missingFields.length > 0) {
      toError(`Schema does not contain fields - ${missingFields}`);
    }
  }
}
