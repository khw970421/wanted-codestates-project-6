import axios from 'axios';

const getRepository = async (target, page) => {
  try {
    const response = await axios.get(
      `/api/addrlink/addrLinkApiJsonp.do?keyword=${target}&currentPage=${page}&countPerPage=5&resultType=JSON&confmKey=${process.env.REACT_APP_SERVICE_KEY}`,
    );
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
