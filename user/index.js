const { userCreator, listUser } = require("./model")


const createUser = (data) => {
    const user = userCreator(data)

    return user
}

const getUsers = () => {
    return listUser()
}

const getUser = (id) => {
    return listUser(id)
}

module.exports = {
    createUser,
    getUsers,
    getUser
}