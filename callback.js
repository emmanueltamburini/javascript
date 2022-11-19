setTimeout(() => {
    console.log('Hello world')
}, 1000);

const getUserById = (id, callback) => {
    const user = {
        id,
        name: 'Emmanuel'
    };

    setTimeout(() => {
        callback(user);
    }, 1500);
}

getUserById(15, user => {
    console.log('Callback has been executed');
    console.log(user.id);
    console.log(user.name.toUpperCase());
});