let user ={
    name:"Jake",
    password:"Password",
    email: "jake@jakeland.jake",
    roles: ['programmer', 'developer'],
    contact:{
        office:"M1234",
        telephone:"3211233211"
    }
}

user.salary = 50000000000
user.roles.push('server admin')
user.contact.location = "minneapolis"

console.log(user)