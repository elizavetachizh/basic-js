
/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
export default function getEmailDomain(email) {
  let arr = email.split('');
  let objParts = CreateEmailParts(email);
  let domainObjParts=objParts.domain;
  let DoneEmail=email.substr(email.lastIndexOf('@')+1)
    function CreateEmailParts(email)
  {
    if(email)
  {
        var objParts = {
          domain:  email.split('@').pop() 
          
        };
	  return objParts;
    }
  }
}






