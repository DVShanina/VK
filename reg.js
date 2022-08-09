
let users = [
    { name: 'leo', password: 'kisa', sex: 'man', },
    { name: 'ivan', password: 'lord', sex: 'man', },
 ];
 
 ad_names = () => {
 let name = document.getElementById('name').value;
 let password = document.getElementById('password').value;
 let sex = document.getElementById('sex').value;
 let user = {};
 user.name=name;
 user.password=password;
 user.sex=sex;
 users.push(user);
 console.log(users); 
 return users;
 }
 
 function Input() {
    let login_ok = false;
    let userName = document.getElementById("user_name").value
    let userPassword = document.getElementById("user_password").value
 
    userName = userName.toLowerCase();
    userPassword = userPassword.toLowerCase();
 
    for (let i = 0; i < users.length-1; i++) {
       if (userName==users[i].name && userPassword==users[i].password) {
          login_ok = true;
          alert("Добро пожаловать в VK!");
       }
    }
    if (login_ok == false) alert("Неверный логин или пароль!");
 }