function data(){
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    let subject = document.getElementById("subject").value
    let message = document.getElementById("message").value

    let myEmail = "faqih.farhan.778@gmail.com"

    let a = document.createElement('a')
    a.href=`mailto:${myEmail}?subject=${subject}&body=Hallo nama saya ${name}, ${message}, silahkan kontak saya dengan email ${email}, telp ${phone}`
    a.click()

    let form = {
        name,
        email,
        phone,
        subject,
        message
    }
    console.log(form);
}