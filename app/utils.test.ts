import { expect, test } from "vitest";
import { validateEmail, validatePassword } from "./utils";

test("validateEmail returns false for non-emails", () => {
  expect(validateEmail(undefined)).toBe(false);
  expect(validateEmail(null)).toBe(false);
  expect(validateEmail("")).toBe(false);
  expect(validateEmail("not-an-email")).toBe(false);
  expect(validateEmail("n@")).toBe(false);
});

test("validateEmail returns true for emails", () => {
  expect(validateEmail("kody@example.com")).toBe(true);
});

test("validatePassword returns false for invalid passwords", () => {
  expect(validatePassword(undefined)).toBe(false);
  expect(validatePassword(null)).toBe(false);
  expect(validatePassword("")).toBe(false);
  expect(validatePassword("1245")).toBe(false);
});

test("validatePassword returns true for passwords greater than length 6", () => {
  expect(validatePassword("test123")).toBe(true);
});
