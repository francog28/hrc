// Function to get current date
function getCurrentDate(){
    // Create a Date object to get current date and time
    const currentDate = new Date();

    // Extract D/M/Y from currentDate object
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); 
    const day = currentDate.getDate().toString().padStart(2, '0');
    const year = currentDate.getFullYear().toString();

    // Format date
    const formattedDate1 = `${month}-${day}-${year}`;
    const formattedDate2 = `${day}/${month}/${year}`;

    // Return object containing date strings
    return{
        formattedDate1,
        formattedDate2
    };
}

const currentDate = getCurrentDate();
