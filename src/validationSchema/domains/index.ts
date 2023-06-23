import * as yup from 'yup';

export const domainValidationSchema = yup.object().shape({
  name: yup.string().required(),
  price: yup.number().integer().required(),
  status: yup.string().required(),
  seller_id: yup.string().nullable(),
  buyer_id: yup.string().nullable(),
  marketplace_id: yup.string().nullable(),
});
