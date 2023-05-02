module.exports = {
  format_time: (date) => {
    return date.toLocaleTimeString();
  },
  format_date: (date) => {
    return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${
      new Date(date).getFullYear()
    }`;
  },
  to_string: (object) => {
    console.log(JSON.stringify(object))

  },
  userCheck: (viewingUser, commentAuthor) => {
    if (viewingUser === commentAuthor) {
      console.log(viewingUser)
      return true
    } else {
      return false
    }
  }
};