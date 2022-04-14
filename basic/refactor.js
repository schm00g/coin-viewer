/* eslint-disable no-undef */
loadInitialState()
.then((state)  => {
    return getUser(state, 'email@email.com')
    .then(user => {
        return getUserSettings(state, user.id)
        .then(settings => {
            return setRole(state, user.id, "ADMIN")
            .then(success => {
                return notifyUser(user.id, "USER_ROLE_UPDATED")
                .then(success => {
                    return notifyAdmins("USER_ROLE_UPDATED")
                })
            })
        })
    })
})

loadInitialState()
    .then(state => getUser(state, 'email@email.com'))
    .then(user => getUserSettings(state, user.id))
    .then(() => setRole(state, user.id, "ADMIN"))
    .then(() => notifyUser(user.id, "USER_ROLE_UPDATED"))
    .then(() => notifyAdmins("USER_ROLE_UPDATED"))

/* 
    the nesting in first example is unnecessary as flow is linear
    curly braces {} can be removed since we have one liners
    settings / success are declared but not used
*/