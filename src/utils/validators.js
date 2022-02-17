const isEmailValidate = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

export const requiredAndNotEmpty = (value) => {
  if (!value || value === '') {
    return 'is required';
  }
}

export const emailValidate = (email) => {
  if (!isEmailValidate(email)) {
    return 'is not valid';
  }
}

export const minLengthTwo = (value) => {
  if (value.length < 2) {
    return 'should be min 2 chars';
  }
}