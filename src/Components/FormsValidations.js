export const registerFormName = (name)=>{
    return name.length >= 4;
};

export const registerFormMail = (mail)=>{
    let regexMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    return regexMail.test(mail);
};

export const registerFormPass = (pass)=>{
    return pass.length >= 8;
};

export const registerFormRePass = (pass, rePass)=>{
    return pass === rePass;
};

export const registerFormCorrect = (name, mail, pass, rePass)=>{
    return registerFormName(name) && registerFormMail(mail) && registerFormPass(pass) && registerFormRePass(pass, rePass);
};