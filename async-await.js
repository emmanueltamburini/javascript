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

const getInfoUser = async(id) => {
    try {
        const employee = await getEmployee(id);
        const salary = await getSalary(id);
    
        return `The employee ${employee} has the salary ${salary}`;
    } catch (error) {
        return error;
    }
}

const id = 3;

getInfoUser(id).then(console.log)
