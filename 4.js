const input=require("readline-sync")
let a = input.questionInt("Enter Physics marks: ");
let b = input.questionInt("Enter Chemistry marks: ");
let c = input.questionInt("Enter Biology marks: ");
let d = input.questionInt("Enter Mathematics marks; ");
let e = input.questionInt("Enter Computer marks: ");

p = (a+ b+ c + d + e)/5;
    if (p>=90)
{
    console.log("Grade a: ");
    
} 
else
{
    if (p>=80) 
    {
        console.log("Grade b: ");
        

    } 
    else    
    {
        if(p>=70) 
    {
        console.log("Grade c: ");

} else
{
    if (p>=60) 
{
    console.log("Grade d: ");
            
} else
{
    if (p>=40)
{
    console.log("Grade e: ");
            
} else
{
    if(p>40)
{
    console.log("Grade f: ");
} else
{
    console.log("Invalid: ");
} 
}
}
}
}
}
