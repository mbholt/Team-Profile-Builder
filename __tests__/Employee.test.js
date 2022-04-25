
const Employee = require("../lib/Employee")

test("create new employee", () => {
    const employee = new Employee('Myles', 24601, 'holt_myles@yahoo.com');
 
    expect(employee.name).toBe("Myles");
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})

test("check Employee methods", () => {
    const employee = new Employee('Myles', 24601, 'holt_myles@yahoo.com');
    
    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getRoleMethod()).toBe('Employee');
})

