import axios from 'axios';
import queryString from 'query-string';
import { SupportRequestInterface, SupportRequestGetQueryInterface } from 'interfaces/support-request';
import { GetQueryInterface } from '../../interfaces';

export const getSupportRequests = async (query?: SupportRequestGetQueryInterface) => {
  const response = await axios.get(`/api/support-requests${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createSupportRequest = async (supportRequest: SupportRequestInterface) => {
  const response = await axios.post('/api/support-requests', supportRequest);
  return response.data;
};

export const updateSupportRequestById = async (id: string, supportRequest: SupportRequestInterface) => {
  const response = await axios.put(`/api/support-requests/${id}`, supportRequest);
  return response.data;
};

export const getSupportRequestById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/support-requests/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteSupportRequestById = async (id: string) => {
  const response = await axios.delete(`/api/support-requests/${id}`);
  return response.data;
};
