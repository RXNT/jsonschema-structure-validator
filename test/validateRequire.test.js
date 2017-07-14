import validateRequire from "../src/validateRequire";

let invalidSchema = {
  required: ["firstName", "lastName"],
  properties: {
    firstName: { type: "string" },
  },
};

let validSchema = {
  required: ["firstName", "lastName"],
  properties: {
    firstName: { type: "string" },
    lastName: { type: "string" },
  },
};

test("require invalid throws exception", () => {
  expect(() => validateRequire(invalidSchema)).toThrow();
});

test("require valid no exception", () => {
  expect(validateRequire(validSchema)).toBeUndefined();
});
