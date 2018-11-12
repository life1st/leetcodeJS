/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
  let reg = /\+.*@/
  let reg2 = /\./
  emails = emails.map(email => email.replace(reg, '@').replace(reg2, ''))

  let setEmails = new Set(emails)

  return setEmails.size
};

module.exports = numUniqueEmails