import * as Yup from 'yup';

const bookSchema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  authorId: Yup.number().required('Autor é obrigatório'),
  active: Yup.boolean()
});

export default bookSchema;