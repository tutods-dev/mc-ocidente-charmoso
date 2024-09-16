import type {
  FileRule,
  ImageRule,
  NumberRule,
  SlugRule,
  StringRule,
  TextRule,
  UrlRule,
} from 'sanity';

/**
 * Helper function to retrieve the error message.
 * @param name Field name
 */
function getErrorMessage(name?: string) {
  return name ? `O campo ${name} é obrigatório!` : 'Campo obrigatório!';
}

/**
 * Helper function to add the required validation for string and text fields.
 * @param rule Rule object
 * @param name Field name
 * @returns Required rules
 */
function isTextRequired(rule: StringRule | TextRule, name?: string) {
  const errorMessage = getErrorMessage(name);

  return [rule.required().error(errorMessage), rule.min(0).error(errorMessage)];
}

/**
 * Helper function to add the required validation for string and text fields.
 * @param rule Rule object
 * @param name Field name
 * @returns Required rules
 */
function isNumberRequired(rule: NumberRule, name?: string) {
  const errorMessage = getErrorMessage(name);

  return rule.required().error(errorMessage);
}

/**
 * Helper function to add the required validation for slug fields.
 * @param rule Rule object
 * @param name Field name
 * @returns Required rules
 */
function isSlugRequired(rule: SlugRule, name?: string) {
  return rule.required().error(getErrorMessage(name));
}

/**
 * Helper function to add the required validation for url fields.
 * @param rule Rule object
 * @param name Field name
 * @returns Required rules
 */
function isUrlRequired(rule: UrlRule, name?: string) {
  return rule.required().error(getErrorMessage(name));
}

/**
 * Helper function to add the required validation for image and file fields.
 * @param rule Rule object
 * @param name Field name
 * @returns Required rules
 */
function isFileRequired(rule: FileRule | ImageRule, name?: string) {
  return rule.required().error(getErrorMessage(name));
}

export {
  isTextRequired,
  isUrlRequired,
  isSlugRequired,
  isFileRequired,
  isNumberRequired,
};
