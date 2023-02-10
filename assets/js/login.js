let userData
if (localStorage.getItem('userData') === null || localStorage.getItem('userData') === undefined) {
    userData = []
} else {
    userData = JSON.parse(localStorage.getItem('userData'))
}
function errorMsg(msg, color) {
    document.getElementById('err').innerHTML = `
    <div class="alert alert-${color} mt-3 p-2" role="alert">
     ${msg}
    </div>
    `
    setTimeout(function () {
        document.getElementById('err').innerHTML = ''
    }, 1500)
}
function registerUser() {
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    let check = true;
    for (let user of userData) {
        if (user.email == email) {
            check = false;
            break;
        }
    }
    if (name != '' && email != '' && password != '') {
        if (check) {
            let obj = {
                name,
                email,
                password
            }
            userData.push(obj)
            localStorage.setItem('userData', JSON.stringify(userData))
            loginPage()
        } else {
            let msg = `User already exits`
            errorMsg(msg, 'danger')
        }
    } else {
        let msg = `Please Enter all data`
        errorMsg(msg, 'danger')
    }


}

function userLogin() {
    let name = document.getElementById('name').value
    let password = document.getElementById('password').value
    let check = true
    if (name != '' && password != '') {
        for (let user of userData) {
            if (user.name == name && user.password == password) {
                check = false
                localStorage.setItem('userLogin', JSON.stringify(user))
                addCategoryPage()
            }
        }
    } else {
        let msg = `Username and password should not be blank`
        errorMsg(msg, 'danger')
    }
    if (check) {
        let msg = `username and pasword doesn't match`
        errorMsg(msg, 'danger')
    }

}

function userLogout() {
    localStorage.removeItem('userLogin')
    loginPage()
}

function generateOtp() {
    let email = document.getElementById('email').value
    let check = true
    for (let user of userData) {
        if (user.email == email) {
            check = false;
            let otp = Math.floor(100000 + Math.random() * 900000).toString();
            localStorage.setItem('userOtp', JSON.stringify({ otp, email }))
            alert(otp)
            validateOtpPage()
        }
    }
    if (check) {
        let msg = `Please enter valid email`
        errorMsg(msg, 'danger')
    }
}
function validateUserOtp() {
    let userOtpData = JSON.parse(localStorage.getItem('userOtp'))
    let userOtp = document.getElementById('inputotp').value
    if (userOtp == userOtpData.otp) {
        newPasswordPage()
    } else {
        let msg = `Please enter valid otp`
        errorMsg(msg, 'danger')
    }
}
function setNewPassword() {
    let password = document.getElementById('password').value
    let cpassword = document.getElementById('cpassword').value
    let userOtpData = JSON.parse(localStorage.getItem('userOtp'))
    if (password != '' && cpassword != '') {
        if (password == cpassword) {
            for (let user of userData) {
                if (user.email == userOtpData.email) {
                    user.password = password
                    localStorage.setItem('userData', JSON.stringify(userData))
                    localStorage.removeItem('userOtp')
                    loginPage()
                }
            }
        } else {
            let msg = `Password and Confirm Password does not Match`
            errorMsg(msg, 'danger')
        }
    } else {
        let msg = `Please enter password and confirm password`
        errorMsg(msg, 'danger')
    }
}