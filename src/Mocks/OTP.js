const getOTP = (login, password) => {
  if (login === 'math.sqrta@gmail.com' && password === 'yasobaka123') {
    return (
      Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
    );
  }
  return null;
};

export default getOTP;
