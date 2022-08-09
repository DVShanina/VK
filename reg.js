
const users = [
    { name: 'leo', password: 'kisa', sex: 'man', },
    { name: 'ivan', password: 'lord', sex: 'man', },
    ];
 
    ad_names = () => {
      const name = document.getElementById('name').value;
      const password = document.getElementById('password').value;
      const sex = document.getElementById('sex').value;
      const user = {};
      user.name=name;
      user.password=password;
      user.sex=sex;
      users.push(user);
      return users;
      }
 
 function Input() {
    let login_ok = false;
    let userName = document.getElementById("user_name").value.toLowerCase();
    let userPassword = document.getElementById("user_password").value.toLowerCase();
 
      let usersMap = users.map ( (members) => {
      if (members.name === userName && members.password === userPassword) {
      login_ok = true;
      alert("Добро пожаловать в VK!"); }} )
      
      if (login_ok == false) {alert("Неверный пароль или логин")}      
    }