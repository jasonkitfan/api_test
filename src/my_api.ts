import axios from "axios";
const myEndPoint =
  "https://asia-east2-meow-shelter.cloudfunctions.net/app/shelter";

export const getCatList = async () => {
  const response = await axios.get(myEndPoint);
  return response.data;
};

export const updateUserRole = async (identifyCode: string, authToken: any) => {
  const response = await axios.post(
    `${myEndPoint}/userRole`,
    {
      code: identifyCode,
    },
    {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }
  );
  return response.data;
};
