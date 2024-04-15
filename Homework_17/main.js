let company = {
  sales: [
    { name: "John", salary: 2000 },
    { name: "Alice", salary: 2500 },
    { name: "Bob", salary: 2200 },
  ],
  development: {
    webDepartment: [
      { name: "Emma", salary: 3000 },
      { name: "Mike", salary: 2800 },
    ],
    smmDepartment: [{ name: "Sophia", salary: 2400 }],
  },
};

function calculateTotalSalary(department) {
  let totalSalary = 0;
  if (Array.isArray(department)) {
    department.forEach((employee) => {
      totalSalary += employee.salary;
    });
  } else {
    for (let key in department) {
      totalSalary += calculateTotalSalary(department[key]);
    }
  }
  return totalSalary;
}

let totalSalary = calculateTotalSalary(company);
console.log("Загальна сума зарплат у всій компанії:", totalSalary);
