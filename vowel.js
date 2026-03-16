const userInp = document.getElementById("usrinp");

const button = document.getElementById("check");
button.addEventListener("click",()=>{

    let user = userInp.value;
    let count = 0;

let vowels = "aeiouAEIOU";
for(let i =0;i<user.length;i++){
    let char = user[i];
    //console.log(char)
    if(vowels.includes(char)){
        count++;
    }
}

alert("There are " + count + " vowels in your input.");

userInp.value = "";
})
//console.log(userInp.value);