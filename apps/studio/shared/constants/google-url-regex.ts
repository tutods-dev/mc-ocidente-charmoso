/**
 * Regular expression to check if is a Google or Google Feedback url.
 */
const GOOGLE_URL_REGEX = new RegExp(/https?:\/\/(?:www\.)?(g|google)\.(co|com)(.*)?/);

export { GOOGLE_URL_REGEX };
