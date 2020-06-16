const validEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;


export const validateFields = (name, inputValue) => {
    const value = inputValue.trim();
    if (name === 'email') {
        return value.match(validEmail) ? null : `Email is invalid`;
    }
  }