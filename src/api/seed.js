const defaultUser = {
  theme: "dvs-dark",
  username: "dvs",
  uuid: "8bc74bc5-ede1-4a2c-ae08-f91a87e6caca",
}
const defaultPassword = "123"
let currentUser = null

const notFound = {
  response: {
    data: {
      message: "User not found",
    },
  },
}
const unauthorized = {
  response: {
    data: {
      message: "Username or password is incorrect",
    },
  },
}

export default {
  fetchUser: username => {
    if(!currentUser) {
      if(defaultUser.username === username) {
        currentUser = JSON.parse(JSON.stringify(defaultUser))
      } else {
        return Promise.reject(notFound)
      }
    }

    currentUser = { ...JSON.parse(JSON.stringify(currentUser)), username }

    return Promise.resolve({
      data: {
        user: currentUser,
      },
    })
  },
  login: (username, password) => {
    if(username !== defaultUser.username || password !== defaultPassword) {
      return Promise.reject(unauthorized)
    }

    currentUser = JSON.parse(JSON.stringify(currentUser || defaultUser))

    return Promise.resolve({
      data: {
        user: currentUser,
      },
    })
  },
  updateUser: user => {
    currentUser = JSON.parse(JSON.stringify(user))

    return Promise.resolve({
      data: {
        user: currentUser,
      },
    })
  },
}
