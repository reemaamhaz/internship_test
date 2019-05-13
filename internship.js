/**
TODO #1
take the names from the remainingPeopleList and add them to the peopleList array. This should not be done programmatically, it is just a copy and paste job.
"Accounting" includes Oscar, Angela, and Kevin
"Sales" includes Jim, Dwight, Michael, Andy, Stanley, and Phyllis
"Human Resources" includes Toby, Holly, and Gabe
"Temps and Interns" include Ryan, Pete, and Gabe
"Corporate" includes Jan and  Robert
"Warehouse" includes Darryl and Roy
"Reception" includes Pam and Erin
"Support" includes the remaining individuals
**/

// here I intialize a global variable so I can access it the processing functions
var namesLeft = "";

// filled in array of JSON objects according to categorized list at the top, adding arrays for multiple values
const employeesArray = [{   
  name: ["Oscar Martinez", "Angela Martin", "Kevin Malone"],
     department: "Accounting"
},   {   
  name: ["Michael Scott", "Jim Halpert", "Dwight Schrute", "Andy Bernard", "Stanley Hudson", "Phyllis Vance"],
     department: "Sales" 
},   {   
  name: ["Toby Flenderson", "Holly Flax", "Gabe Lewis"],
     department: "Human Resources"
},   {   
  name: ["Ryan Howard", "Peter Miller", "Gabe Lewis"],
     department: "Temps and Interns"
},   {   
  name: ["Jan Levinson", "Robert California"],
     department: "Corporate"
},   {   
  name: ["Darryl Philbin", "Roy Anderson"],
     department: "Warehouse"
},   {   
  name: ["Pam Beezley", "Erin Hannon"],
     department: "Reception"
},   {   
  name: ["Creed Bratton", "Meredith Palmer", "Kelly Kapoor", "Clark Green"],
     department: "Support"
}]; 

const remainingEmployeesArray = ["Jim Halpert", "Pam Beezley", "Kevin Malone", "Dwight Schrute", "Andy Bernard", "Angela Martin", "Erin Hannon", "Toby Flenderson", "Stanley Hudson", "Jan Levinson", "Creed Bratton", "Ryan Howard", "Darryl Philbin", "Holly Flax", "Meredith Palmer", "Kelly Kapoor", "Gabe Lewis", "Robert California", "Phyllis Vance", "Roy Anderson", "Peter Miller", "Clark Green"]; 

let firstNamesArray = [];
let lastNamesArray = [];
let departmentsCount = {}; 

/**
TODO #2
Call the processAllEmployees passing in the employeesArray
TODO #4
print out all of the first names to the console
**/

// here I call the processAllEmployees function and pass in the employeesArray
processAllEmployees(employeesArray);

// this calls the function printOutFirstNames which sends the output to the console 
printOutFirstNames();

/* 
    this function uses a for loop to iterate through every value of the array 
    excluding the staff in HR and Corporate with the if statement, and outputs the names
    and departments left then it uses the apply method to call the function splitFullName with an array of names
*/
function processAllEmployees(allEmployees)
{ 
  /**
  TODO #3
  loop through all of the employees and add their names to the firstNamesArray and lastNames array unless they are part of corporate or HR because according to Michael "Toby is in HR, which technically means he works for corporate, so he's not really a part of our family."
  **/ 
    allEmployees = employeesArray;
    for(var i = 0; i < allEmployees.length; i++)
    {
         if (!(allEmployees[i].department == "Human Resources" || allEmployees[i].department == "Corporate"))
         {
              var dep = allEmployees[i].department;
              namesLeft = allEmployees[i].name;
            
              splitFullName.apply(namesLeft);          
         }
    }
}

/* 
    this function uses a for loop to iterate through every name from the 
    processAllEmployees function and then uses the split method to split 
    the string into substrings. It uses the shift method to eliminate
    the first element from the array and returns it, effectively making the 
    array smaller until there are no values left

    lastly it uses the push method to push the values to their respective
    arrays
*/
function splitFullName(fullName) 
{
   for (var x=0; x < namesLeft.length; x++)
   {
        fullName = namesLeft[x].split(" "),
        first = fullName.shift(),
        last = fullName.shift();

        firstNamesArray.push(first);
        lastNamesArray.push(last);
   }    
} 

/* 
    no use for this *****
*/
function incrementDepartmentCount(department) 
{
  
} 

/* 
    this function prints out each name in the firstNamesArray array by using a for
    loop to iterate through the array
*/
function printOutFirstNames() 
{
    console.log("First Names: ")
    
    for (var s = 0; s < firstNamesArray.length; s++)
    {
        console.log(firstNamesArray[s]);
    }
}
