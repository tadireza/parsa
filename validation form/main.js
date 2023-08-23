const usernameInput = document.querySelector(".user-input");
const passwordInput = document.querySelector(".pass-input");
const usernameMsg = document.querySelector(".username-msg");
const passwordMsg = document.querySelector(".password-msg");
const sigininMsg = document.querySelector(".signin-status");
const siginBtn = document.querySelector(".signin-button");

siginBtn.addEventListener("click", signIn);

function signIn(event) {
    event.preventDefault();
    usernameMsg.innerText = "";
    passwordMsg.innerText = "";
    const usernameValue = usernameInput.value;
    const passwordValue = passwordInput.value;
    let ifSendData = true;

    if (usernameValue.length === 0 || usernameValue.indexOf("@") === -1 || usernameValue.indexOf(".") === -1) {
        usernameMsg.innerText = "یک ایمیل معتبر وارد کنید";
        ifSendData = false;
    }

    if (passwordValue.length === 0) {
        passwordMsg.innerText = "رمز عبور را وارد کنید";
        ifSendData = false;
    } else if (passwordValue.length <= 4) {
        passwordMsg.innerText = "رمز عبور خیلی کوتاه است!";
        ifSendData = false;
    }

    if (ifSendData) {
        const body = JSON.stringify({
            username: usernameValue,
            password: passwordValue,
        })
        const headers = {
            "Content-Type": "application/json"
        }
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: "POST",
            body: body,
            headers: headers
        })
            .then(response => {
                if(response.ok) {
                    sigininMsg.innerText = "You signed in successfully"
                }
            })
    }
}