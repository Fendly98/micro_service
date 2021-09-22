const { v4: uuidv4 } = require('uuid');

const users = [{
    "id": "8e066bda-83d4-438c-be47-743f8bbc32ac",
    "name": "moha",
    "email": "moha@med.com",
    "password": "pss"
}, {
    "id": "edf5ac05-8aa7-4ecc-8158-fd1e3bddd308",
    "name": "ben",
    "email": "ben@ten.com",
    "password": "pss"
}, {
    "id": "ebaf95f1-ee28-4816-bf34-d48bdcfef201",
    "name": "mira",
    "email": "mira@mira.com",
    "password": "pss"
}]

const userCreator = (data) => {
    const { name, email, password } = data;

    if (!name) {
        throw new Error('No name provided')
    }

    if (!email) {
        throw new Error('No email provided')
    }

    if (!password) {
        throw new Error('No password provided')
    }

    const newUser = {
        id: uuidv4(),
        ...data
    }

    Object.freeze(newUser);

    users.push(newUser)

    return newUser
}

const listUser = (id) => {
    if (id) {
        const user = users.find(({id: _id}) => id === _id)
        if (!user) {
            throw new Error('User not found')
        }

        return user
    }

    return users
}

module.exports = {
    userCreator,
    listUser
}




