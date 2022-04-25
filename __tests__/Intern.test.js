
const Intern = require("../lib/Intern")

test("create new intern", () => {
    const employee = new Intern('Myles', 24601, 'holt_myles@yahoo.com', 'UNC');

    expect(employee.name).toBe("Myles");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.school).toEqual(expect.any(String));
})

test("check Intern methods", () => {
    const employee = new Intern('Myles', 24601, 'holt_myles@yahoo.com', 'UNC');

    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getSchool()).toBe(employee.school);
    expect(employee.getRole()).toBe('Intern');
})