import { validatePayload } from "../lib/validation";

describe("Validation Unit Check", () => {
  it("permits safe alphanumeric parameters", () => {
    const res = validatePayload({
      username: "authorized_user",
      email: "engineer@saferepo.internal",
      message: "Regular harmless verification input."
    });
    expect(res.isValid).toBe(true);
  });

  it("blocks malformed email values", () => {
    const res = validatePayload({
      username: "authorized_user",
      email: "invalid-string",
      message: "Regular harmless verification input."
    });
    expect(res.isValid).toBe(false);
  });
});
