const Engineer = require("../lib/Engineer")

test("create new engineer", () => {
    const employee = new Engineer('Myles', 24601, 'holt_myles@yahoo.com', 'mbholt');

    expect(employee.name).toBe("Myles");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.github).toEqual(expect.any(String));
})

test("check Engineer methods", () => {
    const employee = new Engineer('Myles', 24601, 'holt_myles@yahoo.com', 'mbholt');

    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getRole()).toBe('Engineer');
})

