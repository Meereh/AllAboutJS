class UserStorage {
    loginUser(id, password){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(
                    (id === 'ellie' && password === 'dream') ||
                    (id === 'coder' && password === 'academy') 
                ){
                    resolve(id);
                }else{
                    reject(new Error('not found'));
                }
            }, 2000);

        })

    }


    getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(user === 'ellie'){
                    resolve({name: 'ellie', role: 'admin'});
                }else{
                    reject(new Error('no access'));
                }
            }, 1000);
        })

    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const pw = prompt('enter your pw');


userStorage.loginUser(id, pw)
    .then ( userStorage.getRoles)
    .then( user => alert(`Hello ${user.name}! your role is ${user.role} `))
    .catch(console.log);
