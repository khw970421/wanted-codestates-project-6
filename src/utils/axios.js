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

export { getRepository };