//Create Object
let user ={username:'Jake', password:'fun'}

//Print value of username to console.
console.log(user.username)
console.log(user['username'])

//Print value of password to console
console.log(user.password)
console.log(['password'])

//Square brackets has a little more functionality
let whatProperty = 'password'
console.log(user[whatProperty])

let usernameProperty = 'username'
console.log(user[usernameProperty])



//Change data in object
user.password = 'elephant'
console.log(user)

user['password'] = 'alligator'
console.log(user)

user.email = 'jake@jakeland.jake'
console.log(user)
console.log(user.email)

//Looping through objects
let user = {
    username:'jake',
    password:'12345'
}

for (let name in user){
    console.log(name, user[name])
}

console.log(user.username)
console.log(user['username'])