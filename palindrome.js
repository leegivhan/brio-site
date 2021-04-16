var twitterUsername=document.getElementById("twitter-username")
console.log(twitterUsername)

function palindrome(str) {
    var reg = /[\W_]/g;

    var smallStr = str.toLowerCase().replace(reg, "");

    var reversed = smallStr.split("").reverse().join("");
    if(reversed == smallStr) return true;

    return false
}