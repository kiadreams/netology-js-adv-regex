export default class Validator {
  validateUsername(name) {
    const reExpAcceptChars = /^[a-z0-9_-]+$/;
    const reExpInvalidChars = /(^[\d_-].*[\d_-]$)|\d{3,}/;
    return reExpAcceptChars.test(name.toLowerCase()) && !reExpInvalidChars.test(name.toLowerCase());
  }
}