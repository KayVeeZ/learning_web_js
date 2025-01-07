let a = prompt("Enter First Number");
let b = prompt("Enter Second Number");

if (isNaN(a) || isNaN(b))
{
    throw SyntaxError("Please only enter Numbers");
}

let sum = parseInt(a) + parseInt(b);

function main()
{
    let x = 1;
    try 
    {
        alert(sum*x);
        return true;    
    } 
    catch (error) 
    {
        alert("Error");
        return false;
    }
    finally
    {
        alert("Files and db are being closed.");
    }
    

}
main();


