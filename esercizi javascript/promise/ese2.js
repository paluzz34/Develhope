//Crea una catena di Promises per simulare un'operazione asincrona in più fasi. -La prima Promise recupera i dati dell'utente { id: 1, name: 'John' }. 
//-La seconda Promise recupera i post dell'utente ['Post 1', 'Post 2', 'Post 3']. -Infine, chiama le funzioni per recuperare e stampare in console il nome dell'utente e i titoli dei post.

function fetchUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const userData = { id: 1, name: 'John' };
            resolve(userData);
        }, 2000);

    });
}

function fetchUserPosts(userId, userName) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const userPost =['Post 1', 'Post 2', 'Post 3'];
            resolve(userPost);
        }, 3000);

    });
}

fetchUserData()
 .then (userData=> {
    console.log(userData)
    return fetchUserPosts(userData)
 })
 .then(userPost=> console.log(userPost))
 .catch(err=>console.log(err))