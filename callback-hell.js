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

const getEmployee = (id, callback) => {
    const employee = employees.find(e => e.id === id)?.name;

    if (!employee) {
        callback(`Employee with id ${id} does not exist`); 
        return;
    }

    callback(null, employee);
}

const getSalary = (id, callback) => {
    const salary = salaries.find(s => s.id === id)?.salary;

    if (!salary) {
        callback(`Salary with id ${id} does not exist`); 
        return;
    }

    callback(null, salary);
}

const id = 2;

getEmployee(id, (err, employee) => {
    if(err) {
        console.error('ERROR');
        console.error(err);
        return;
    }

    console.info('Employee exists');
    console.info(employee);  

    getSalary(id, (err, salary) => {
        if(err) {
            console.error('ERROR');
            console.error(err);
            return;
        }
    
        console.info('Salary exists');
        console.info(salary);

        console.log(`The employee ${employee} has the salary ${salary}`)
    });  
});
