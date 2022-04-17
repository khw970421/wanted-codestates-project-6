import axios from 'axios';

const getRepository = async (target, currentPage, countPerPage) => {
  const params = {
    keyword: target,
    currentPage,
    countPerPage,
    confmKey: process.env.REACT_APP_SERVICE_KEY,
    resultType: 'json',
  };

  try {
    const response = await axios.get(`/api/addrlink/addrLinkApiJsonp.do`, {
      params,
    });
    const data = response.data;
    return data;
  } catch (error) {
    console.error(error);
  }
};

const getStaticData = async () => {
  try {
    const response = await axios.get(`/caredoc/static`);
    const data = response.data;
    return data;
  } catch (error) {
    console.error(error);
  }
};

const postRegisterData = async obj => {
  try {
    const response = await axios.post(`/caredoc/application`, obj);
    const data = response.data;
    return data;
  } catch (error) {
    console.error(error);
  }
};

export { getRepository, getStaticData, postRegisterData };
