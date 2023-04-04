let dbUsers= [
    {
        username: "Alip",
        password: "11111",
        name: "Alif",
        email:"alip@gmail.com"
    },

    {
        username: "Riduan",
        password: "22222",
        name: "Wan",
        email:"riduan@gmail.com"
    },
    
    {
        username: "Merii",
        password: "180699",
        name: "Amri",
        email:"Merii@gmail.com"
    }
]

    function login(reqUsername, reqPassword){
        let matchUser = dbUsers.find(user => user.username == reqUsername)
        if(!matchUser) return "User not found!"
        if(matchUser.password == reqPassword){
            return matchUser
        }
        else 
        {
            return "Invalid password"
        }
    }

    function register(a,b,c,d){
        dbUsers.push({
            username:a,
            password:b,
            name:c,
            email:d
        })
    }
    

//try to login
console.log(login("Alip","11111"))

//cout
//onsole.log(login("riduan","22222"))
//console.log(login("utem","password"))

//register("Merii","180699","Amri","amritajudin3636@gmail.com")
//console.log(login("merii","180699"))