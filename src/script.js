function createUser(firstName, lastName) {
    return {
        firstName: firstName,
        lastName: lastName
        };
}

function getFullName(user) {
    if(user==null)
        return '';
    else
        return user.firstName + " " + user.lastName;
}

function getWidth(params) {
    if(params==null || params.styling==null || params.styling.sizes==null)
        return null;
    
    else
        return params.styling.sizes.width;
}

function extendObject(obj, isValid) {
    let clonedObject = {...obj};
    clonedObject.isValid = isValid;
    return clonedObject;
}

function sumPrices(prices) {
    let sum = 0;
    for(let i in prices){
        if(isFinite(prices[i]) && "number" == typeof prices[i])// || !isNaN(prices[i]))
            sum += prices[i];
    }
    return sum;
}

function createUserWithFullName(firstName, lastName) {
    let user = {
        firstName: firstName,
        lastName: lastName,
        getFullName(){ return firstName + " " + lastName; },
        setFirstName(firstName) { this.firstName = firstName; },
        setLastName(lastName) { this.lastName = lastName; },
    };
    return user;
}