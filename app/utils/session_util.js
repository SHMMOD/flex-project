export const authenticate = () => {
  // console.log("in util")
  fetch('https://localhost:5000/auth/google', {
    method: 'GET',
    // headers: {
    //   Accept: 'application/json',
    //   'Content-Type': 'application/json',
    // },
    // body: JSON.stringify({
    //   firstParam: 'yourValue',
    //   secondParam: 'yourOtherValue',
    // }),
  });
};