import { apiInstance } from './axiosInstance';

const tenant_id = 'be3eb77e33254696b3d0b7f68f70d1a9';

const createCustomer = (name, email) => apiInstance().post(`customer/create`, { name, email, tenant_id });

export { createCustomer };
