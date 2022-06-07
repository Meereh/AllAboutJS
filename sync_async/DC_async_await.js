class UserStorage {

    async delay(ms){
        return (resolve => setTimeout(resolve, ms));
    }

    async loginUser(id, password){
        await this.delay(1000);
        if(
            (id === 'ellie' && password === 'dream') ||
            (id === 'coder' && password === 'academy') 
        ) {
            return  id;
        }else{
            throw ('not found');
        }
    }


    async getRoles(user) {
        await this.delay(1000);
        if(user === 'ellie'){
            return({name: 'ellie', role: 'admin'});
        }else{
            throw  ('no access');
        }
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const pw = prompt('enter your pw');

async function findUserRole(){
    const user = await userStorage.loginUser(id, pw);
    const userInfo = await userStorage.getRoles(user);

    return alert(`Hello ${userInfo.name}! your role is ${userInfo.role} `)
}

findUserRole().then().catch(console.log);