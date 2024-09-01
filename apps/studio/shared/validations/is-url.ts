import type { UrlRule } from 'sanity';

const URL_REGEX =
  /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,})?/g;

const isUrl = (Rule: UrlRule, required = false) => [
  Rule.custom((value) => {
    if (required && !value) {
      return 'Por favor, introduza um URL!';
    }

    if (value && !URL_REGEX.test(value)) {
      return 'Por favor, introduza um URL válido!';
    }

    return true;
  }).error(),
];

export { isUrl };
