function validate(){
    const login_form = document.forms["login_form"];
    const username = login_form.elements["username"].value;
    const password = login_form.elements["password"].value;

    const left = screen.width/2;
    const top = screen.height/2;

    if(username==="ali"&&password==='123'){
        window.open("welcome.html","welcome",`width=300,height=300,left=${left-150},top=${top-150}`)
    }
    else{
        window.open("error.html","Error",`width=500,height=300,left=${left-150},top=${top-150}`)
    }
}
