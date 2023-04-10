function isValidPassword1(password, username) {
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

function isValidPassword2(password, username) {
  if (
    password.length < 8 ||
    password.indexOf(" ") !== -1 ||
    password.indexOf(username) !== -1
  ) {
    return false;
  }
  return true;
}

const result = isValidPassword2("somethingnew");

console.log(result);
