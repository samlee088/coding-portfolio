export function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
  
export function validateName(name) {
    const nameCheck = /^[A-Za-z]\w{1,14}$/;
    if (name.match(nameCheck)) {
        return true;
    }
    return false;
}

export function validateMessage(message) {
    const messageCheck = /^[A-Za-z]\w{3,14}$/;
    if (message.match(messageCheck)) {
        return true;
    }
    return false;
}
  
  