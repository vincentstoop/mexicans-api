// after hook

function cleanup(user, currentUser) {
  // √ in case the user is not the current user
  if (!!currentUser && (user._id.toString() === currentUser._id.toString())) return user

  // √ we only return `_id` and `name`
  const { _id, name } = user
  return { _id, name }
}

module.exports = function(hook) {
  const currentUser = hook.params.user

  // √ for methods: find and get
  if (hook.method === 'find') {
    hook.result.data = hook.result.data.map((user) => {
      cleanup(user, currentUser)
    })
  } else {
    hook.result = cleanup(hook.result, currentUser)
  }
}
