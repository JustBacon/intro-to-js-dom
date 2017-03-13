console.log("hi");
//Finding HTML Elements
// console.log(document.getElementById("use-id-method"));
var idElement = document.getElementById("use-id-method")
console.log(idElement);

//TAG NAME
// console.log(document.getElementsByTagName("script"))
var tagName = document.getElementsByTagName("script")
console.log(tagName);

//FINDING CLASS
// console.log(document.getElementsByClassName("use-class-method")[0])
var classElement = document.getElementsByClassName("use-class-method")
console.log(classElement);

//changing HTML Element
console.log(idElement.innerHTML);
idElement.innerHTML = "I HAVE BEEN CHANGED >:)))))"

//changing class method
console.log(classElement[1].innerHTML);
classElement[1].innerHTML = "I have been changed by class name and array target"



