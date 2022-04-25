
const Manager = require("../lib/Manager")

test("create new manager", () => {
    const employee = new Manager('Myles', 24601, 'holt_myles@yahoo.com', 77);

    expect(employee.name).toBe("Myles");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.officeNo).toEqual(expect.any(Number));
})

test("check Manager methods", () => {
    const employee = new Manager('Myles', 24601, 'holt_myles@yahoo.com', 77);

    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getOfficeNo()).toBe(employee.officeNo);
    expect(employee.getRole()).toBe('Manager');
})