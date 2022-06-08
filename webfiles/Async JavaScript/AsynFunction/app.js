// const sing = async() => {
//     // throw new Error(' Uh Oh')  
//     // used to throw an error
//     ///----- Or--->
//     throw ' Oh No!!! Problem'
//     return ' LA lA lala'
// }

// sing().then((data) => {
//         console.log('Promise Resolved with:', data)
//     })
//     .catch((err) => {
//         console.log('Oh No Promise!! Rejected')
//         console.log(err)
//     })


const login = async(username, password) => {
    if (!username || !password) throw ' Missing Credentials'
    if (password === 'fortune') return 'Welcome'
    throw 'Invalid Password'
}

login('merite', 'fortune').then(msg => {
        console.log('Logged In!')
        console.log(msg)
    })
    .catch(err => {
        console.log('error!')
        console.log(err)
    })