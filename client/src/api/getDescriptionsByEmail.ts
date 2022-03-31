const getDescriptionsByEmail = (jwtToken: string, email: string) => {
  return fetch(`${process.env.REACT_APP_API_BASE_URL}/user/${email}/description`, {
    headers: { authorization: `bearer ${jwtToken}` },
  }).then((res: any) => res.json());
};

export default getDescriptionsByEmail;
