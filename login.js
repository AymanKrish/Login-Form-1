function login(){
    // access data from input
    username = id1.value
    // store data permanently in local storage (key,value)
    localStorage.setItem("uname",username)
    // redirects to another page
    window.location = 'home.html'
}