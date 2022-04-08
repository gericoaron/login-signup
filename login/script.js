window.onload = () => {
    const loginText = document.querySelector(".title-text .login");
    const loginForm = document.querySelector("form.login");
    const loginBtn = document.querySelector("label.login");
    const signupBtn = document.querySelector("label.signup");
    const signupLink = document.querySelector("form .signup-link a");
    signupBtn.onclick = () => {
      loginForm.style.marginLeft = "-50%";
      loginText.style.marginLeft = "-50%";
    };
    loginBtn.onclick = () => {
      loginForm.style.marginLeft = "0%";
      loginText.style.marginLeft = "0%";
    };
    signupLink.onclick = () => {
      signupBtn.click();
      return false;
    };
  
    var username = document.getElementById("username");
    var pass = document.getElementById("password");
  
    username.onfocus = () => {
      if (this.placeholder == "Username") {
        this.value = "";
      }
    };
    password.onfocus = () => {
      if (password.placeholder == "Password") {
        password.value = "";
      }
    };
    pass.onblur = () => {
      if (this.value == "") {
        password.value = "ENTER PASSWORD";
      }
    };
    username.onblur = () => {
      if (this.value == "") {
        this.value = "ENTER USERNAME";
      }
    };
  };
  
 