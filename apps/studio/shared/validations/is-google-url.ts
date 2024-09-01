import { GOOGLE_URL_REGEX } from '../constants/google-url-regex';

/**
 * Helper function to validate if the url is from Google or Google Feedback.
 * @param url URL to validate
 */
function isGoogleUrl(url: string) {
  return GOOGLE_URL_REGEX.test(url);
}

export { isGoogleUrl };
