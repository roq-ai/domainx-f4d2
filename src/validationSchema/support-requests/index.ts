import * as yup from 'yup';

export const supportRequestValidationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
  status: yup.string().required(),
  user_id: yup.string().nullable(),
  marketplace_id: yup.string().nullable(),
});
