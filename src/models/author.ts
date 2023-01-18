import * as Yup from 'yup';

const authorSchema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório')
});

export default authorSchema;