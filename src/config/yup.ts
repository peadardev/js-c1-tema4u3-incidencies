import * as yup from 'yup';

yup.setLocale({
  mixed: {
    required: 'El camp no pot estar buit',
  },
  string: {
    email: 'El format de correu no és correcte',
    min: ({ min }) => `Ha de tenir al menys ${min} caracters`,
    max: ({ max }) => `Ha de tenir com a màxim ${max} caracters`,
    length: ({ length }) => `Ha de tenir exactament ${length} caracters`,
  },
  number: {
    min: ({ min }) => `Ha de ser un número >= ${min}`,
  },
});
