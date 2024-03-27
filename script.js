 //1.Create your own resume data in JSON format
 var person = [{
  name: "Santhosh",
  age: 15,
  Gender: "Male",
  Phone: 6444444210,
  Skills: [
    "Javascript",
    "Html",
    "Css",
    "Reactjs",
    "MongoDb",
    "Nodejs",
    "Expressjs",
  ],
  Qualification:"B.E/EEE",
  YearOfPassing:2020,
  Experience:[
    {
    "position" : "AssociateConsultant",
    "Experience": "2 years",
    "CompanyName": "Atos syntel",
    }
  ],
  Address:[{
    "Door.no" : "2/234",
    "Street": "Main Road",
    "Village": "Kallathur",
    "City": "Jayankondam",
    "District": "Ariyalur",
    "Pincode": "621 803",
  }
],
}];
console.log(person);
//2.For the given JSON iterate over all for loops (for, for in, for of, for Each)
var person1= [{
  name: "Santhosh",
  age: 15,
  Gender: "Male",
  Phone: 6444444210,
  Skills: [
    "Javascript",
    "Html",
    "Css",
    "Reactjs",
    "MongoDb",
    "Nodejs",
    "Expressjs",
  ],
  Qualification:"B.E/EEE",
  YearOfPassing:2020,
  Experience:[
    {
    "position" : "AssociateConsultant",
    "Experience": "2 years",
    "CompanyName": "Atos syntel",
    }
  ],
  Address:[{
    "Door.no" : "2/234",
    "Street": "Main Road",
    "Village": "Kallathur",
    "City": "Jayankondam",
    "District": "Ariyalur",
    "Pincode": "621 803",
  }
],
},
{
  name: "kumar",
  age: 35,
  Gender: "Male",
  Phone: 6765434210,
  Skills: [
    "Javascript",
    "Html",
    "Css",
    "Reactjs",
    "MongoDb",
    "Nodejs",
    "Expressjs",
  ],
  Qualification:"B.E/EEE",
  YearOfPassing:2014,
  Experience:[
    {
    "position" : "AssociateConsultant",
    "Experience": "8 years",
    "CompanyName": "TCS",
    }
  ],
  Address:[{
    "Door.no" : "8/234",
    "Street": "Main Road",
    "Village": "Kallathur",
    "City": "Jayankondam",
    "District": "Ariyalur",
    "Pincode": "621 803",
  }
],
}
];
//printing the 2 json data using with for loop
for(var i = 0; i < person1.length; i++) {
  var obj = person1[i];
  console.log(obj.name);
  console.log(obj.age);
  console.log(obj.Gender);
  console.log(obj.Phone);
  console.log(obj.Qualification);
  console.log(obj.Skills);
  console.log(obj.YearOfPassing);
  console.log(obj.Experience);
  console.log(obj.Address);
}
//printing the 2 json data using with for Each loop
person1.forEach(function(obj) { 
  console.log(obj.name);
  console.log(obj.age);
  console.log(obj.Gender);
  console.log(obj.Phone);
  console.log(obj.Qualification);
  console.log(obj.Skills);
  console.log(obj.YearOfPassing);
  console.log(obj.Experience);
  console.log(obj.Address);

 });
 //printing the 2 json data using with for in loop
 for (var key in person1) {
  if (person1.hasOwnProperty(key)) {
    console.log(person1[key].name);
    console.log(person1[key].age);
    console.log(person1[key].Gender);
    console.log(person1[key].Phone);
    console.log(person1[key].Qualification);
    console.log(person1[key].Skills);
    console.log(person1[key].Experience);
    console.log(person1[key].Address);
    
   
  }
  }
  //for of (printing the person1 name from 0 index using with 2 json data)
let text = "";
for (let x of person1[key,0].name) {
 text += x; 
}
 console.log(text);

//3)Read about the difference between window, screen and document in javascript
/*In JavaScript, "window," "screen," and "document" are all important objects representing different aspects of the browser environment. Here's a breakdown of their differences:

1. **Window Object**:
   - The `window` object is the global object in a browser's JavaScript environment.
   - It represents the browser window or tab that contains the document.
   - It serves as the global namespace for all JavaScript code running in that window.
   - It contains properties and methods that control the browser window itself, like resizing, navigating, opening new windows, etc.
   - It's accessible globally, so you don't need to prefix its use with `window.`. For example, `window.alert()` and `alert()` are equivalent.
  
2. **Document Object**:
   - The `document` object represents the web page loaded in the current window or frame.
   - It's a property of the `window` object and provides methods and properties to access the content of the document.
   - It allows JavaScript to manipulate the structure, style, and content of the loaded HTML document.
   - Commonly used properties and methods include `getElementById()`, `querySelector()`, `getElementByClassName()`, etc., which allow access to specific elements within the document.

3. **Screen Object**:
   - The `screen` object represents the user's screen or monitor.
   - It provides information about the user's screen such as width, height, color depth, etc.
   - This object can be useful for creating responsive designs or for determining the available screen space for displaying content.
   - Properties of the `screen` object include `screen.width`, `screen.height`, `screen.availWidth`, `screen.availHeight`, etc.
     
Main Usage:
- `window` represents the browser window and is the global object.
- `document` represents the HTML document loaded in the window and allows manipulation of its content.
- `screen` represents the user's screen and provides information about its size and characteristics.
*/
