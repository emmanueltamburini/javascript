const employees = [
    {
        id: 1,
        name: 'Ana'
    },
    {
        id: 2,
        name: 'Emmanuel'
    },
    {
        id: 3,
        name: 'Alejandro'
    }
];

const salaries = [
    {
        id: 1,
        salary: 1000
    },
    {
        id: 2,
        salary: 1500
    }
];

const getEmployee = (id) => {
    return new Promise((resolve, reject) => {
        const employee = employees.find(e => e.id === id)?.name;
        !employee ? 
            reject(`Employee with id ${id} does not exist`) : resolve(employee);
    })
}

const getSalary = (id) => {
    return new Promise((resolve, reject) => {
        const salary = salaries.find(s => s.id === id)?.salary;
        !salary ? 
            reject(`Salary with id ${id} does not exist`) : resolve(salary);
    })
}

const id = 1;

getEmployee(id)
    .then(employee => {
        console.log(employee);
    })
    .catch(err => console.log(err));

getSalary(id)
    .then(salary => console.log(salary))
    .catch(err => console.log(err));

getEmployee(id)
    .then(employee => {
        console.log(employee);
        getSalary(id)
            .then(salary => console.log(`The employee ${employee} has the salary ${salary}`))
            .catch(err => console.log(err));
    })
    .catch(err => console.log(err));

let employee = '';

getEmployee(id)
    .then(employeeResponse => {
        employee = employeeResponse;
        return getSalary(id)
    })
    .then(salary => console.log(`The employee ${employee} has the salary ${salary}`))
    .catch(err => console.log(err));