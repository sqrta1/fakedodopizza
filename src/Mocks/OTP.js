const getOTP = (email) => {
  if (email === 'math.sqrta@gmail.com') {
    return (
      Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
    );
  }
  return null;
};

export default getOTP;
