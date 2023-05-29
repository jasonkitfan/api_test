import { getToken } from "../config/firebase";
import { getCatList, updateUserRole } from "../src/my_api";

describe("getCatList", () => {
  test("should return a list of cats", async () => {
    const catList = await getCatList();
    expect(Array.isArray(catList)).toBe(true);
    expect(catList.length).toBeGreaterThan(0);
    expect(catList[0]).toHaveProperty("name");
    expect(catList[0]).toHaveProperty("breed");
  });
});

describe("updateUserRoleWithoutToken", () => {
  test("should return invalid token", async () => {
    try {
      const response = await updateUserRole("invalid code", "invalid token");
    } catch (error: any) {
      expect(error.response.status).toEqual(401);
      expect(error.response.data.message).toEqual("Invalid token");
    }
  });
});

describe("updateUserRoleWithInvalidCode", () => {
  test("should return invalid identify code", async () => {
    const token = await getToken()!;
    try {
      const response = await updateUserRole("invalid code", token);
    } catch (error: any) {
      expect(error.response.status).toEqual(404);
      expect(error.response.data.message).toEqual("Code not found");
    }
  });
});

describe("updateUserRoleWithAllValidData", () => {
  test("should return success update message", async () => {
    const token = await getToken()!;
    try {
      const response = await updateUserRole("E3TPGcxj1bwv0vUcnRc2", token);
      expect(response.status).toEqual(200);
      expect(response.data.message).toEqual("Role successfully updated!");
    } catch (error: any) {
      console.log(error);
    }
  });
});
