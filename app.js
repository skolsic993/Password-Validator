function isValidPassword(password, username) {
  if (password.length < 8) {
    return false;
  }

  if (password.indexOf(" ") !== -1) {
    return false;
  }

  if (password.indexOf(username) !== -1) {
    return false;
  }

  return true;
}

const result = isValidPassword("somethingnew");

console.log(result);
