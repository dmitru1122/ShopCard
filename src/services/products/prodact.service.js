import Axios from '../axios-instance/axios.service';

const API_URL = process.env.NODE_ENV !== 'development' ? 'https://vshopbackend.herokuapp.com/api/v1' : 'http://localhost:3000/api/v1'; ;
const LIST_PRODUCTS = 'product';

class FormsService {
  getListProducts = async () => {
    const { data } = await Axios.get(`${API_URL}/${LIST_PRODUCTS}`);
    return data;
  }
  sendItem = async (item, id) => {
    console.log(item);
      const { data } = await Axios.post(`${API_URL}/${LIST_PRODUCTS}/${id}`, item);
      return data;
   }
}

export default new FormsService();
