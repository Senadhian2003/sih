var btn = document.getElementById('btn');
btn.addEventListener('click',function(e){
    e.preventDefault()
    var smail = document.getElementById('smail').value;
    var sub = document.getElementById('sub').value;
    var msg = document.getElementById('msg').value;
    var body = 'Subject: ' + sub + '<br/>Message: ' + msg;
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "createacc610@gmail.com",
        Password : "55345A47C603FD5770394C887FF5F1AAE37F",
        To : smail,
        From : "createacc610@gmail.com",
        Subject : sub,
        Body : body
    }).then(
      message => alert(message)
    );
})