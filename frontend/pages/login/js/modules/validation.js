/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////

function invalid(message) {
    return {
        valid: false,
        message: message
    }
}
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////


export function validate(value, rules) {
    if (rules.required === true) {

        if (value === '') {
            return {
                valid: false
            }
        }
    }


    if (rules.forbiddenChar) {
        const isForbidden = new RegExp(`^[${rules.forbiddenChar}]+$`).test(value);

        if (isForbidden) return invalid('Forbidden Characters');     
    }


    if (rules.allowedChar) {
        const isAllowed = new RegExp(`^[${rules.allowedChar}]+$`).test(value);

        if (!isAllowed) return invalid('Characters not allowed');
    }


    if (rules.minLength) {
        if(value.length < rules.minLength) return invalid('Too low');
    }

    if (rules.maxLength) {
        if(value.length > rules.maxLength) return invalid('Too high');
    }


    return {
        valid: true
    }
}
//////////////////////////////////////
/////////////////////////////////////////////////

export function matchValues(password2) {
    const fieldName = password2.dataset.match;
    const password1 = document.querySelector(`[name="${fieldName}"]`);
    if (!password1) return {valid: true}

    if (password1.value !== password2.value) return invalid("passwords don't match");
    else return {valid: true}
}