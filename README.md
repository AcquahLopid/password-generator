# Emanuel's portfolio

## Technology Used

| Technology Used         | Resource URL  |
| -------------           |:-------------:|
| HTML                    | [https://developer.mozilla.org/en-US/docs/Web/HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) | 
| CSS                     | [https://developer.mozilla.org/en-US/docs/Web/CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)      |
| Git                     | [https://git-scm.com/](https://git-scm.com/)     | 
| JavaScript              | [https://developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) |
## Description

This Website is used for people who want to get a safe totally random password for themselves where they can use anywhere. it uses special characters, lowercase/uppercase letters, and numbers in random to let someone to create a safe password just at one click of a button. 

## Code explanation
 
In this block of code we see that this is my very first prompt which i use to get the user input of a legth of password they want. i then follow it up with a if statement which if you dont give the website a value withing 8 and 120 it will literally yell at you. then i put an else statement which if you do put a valid value you get all of your confirms! i was going to give the confirms seperate else if statements but they actually all worked just in one else statement which is wonderful.
 ```js
 var userInput = prompt("How many characters would you like your password to be? it has to be in between 8 and 120."); 
  if (userInput < 8 || userInput > 120){ 
      alert("The value you choose needs to be between 8 and 120!!!!");
    } else{    
      var userConfirmSC = confirm("Will your password have special characters?");
      var userConfirmNum = confirm("Will your password have numbers?");
      var userConfirmLC = confirm("Will your password have lowercase letters?");
      var userConfirmUC = confirm("Will your password have uppercase letters?");
    }
 ```
## Author information

```MD
### Emanuel Molina

[GitHub](https://github.com/AcquahLopid)
[LinkedIn](https://www.linkedin.com/in/emanuel-molina-65b84426b/)
[GitLab](https://ucb.bootcampcontent.com/emanuelmolina2k-BAsayK)

```
# Credits

[W3schools event listener](https://www.w3schools.com/js/tryit.asp?filename=tryjs_addeventlistener_add)

[W3schools random integers](https://www.w3schools.com/js/js_random.asp)

[W3schools array join concept](https://www.w3schools.com/jsref/jsref_join.asp)

[W3schools array push concept](https://www.w3schools.com/jsref/jsref_push.asp)