
var users = [
    { name: 'leo', password: 'kisa', sex: 'man', },
    { name: 'ivan', password: 'lord', sex: 'man', },
 ];
 
 ad_names = () => {
 var name = document.getElementById('name').value;
 var password = document.getElementById('password').value;
 var sex = document.getElementById('sex').value;
 var user = {};
 user.name=name;
 user.password=password;
 user.sex=sex;
 users.push(user);
 console.log(users); 
 return users;
 }
 
 function Input() {
    login_ok = false;
    var user_name = document.getElementById("user_name").value
    var user_password = document.getElementById("user_password").value
 
    user_name = user_name.toLowerCase();
    user_password = user_password.toLowerCase();
 
    for (let i = 0; i < users.length-1; i++) {
       if (user_name==users[i].name && user_password==users[i].password) {
          login_ok = true;
          alert("Добро пожаловать в VK!");
       }
    }
    if (login_ok == false) alert("Неверный логин или пароль!");
 }