
/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
export default function isMAC48Address(n) {
  for (var i=0; i<n.length; i++)
   {
       //64:A2:C7:B0:D3:B2 - пример правильного mac-адреса
       var regex = /^[0-9a-fA-F]{2}(-[0-9a-fA-F]{2}){5}$/;
       if (!regex.test(n)){
    return false;
       }
   }
   return true;
}
