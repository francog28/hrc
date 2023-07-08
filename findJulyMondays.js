function findJulyMondays() {
    const startDate = new Date('1983-07-01'); 
    const endDate = new Date('2022-07-31');
  
    const JulyMondays = [];
  
    // Loop through each date between start and end
    let currentDate = startDate;
    while (currentDate <= endDate) {
      // Check if date is in July and a Monday
      if (
        currentDate.getMonth() === 6 &&
        currentDate.getDay() === 1
      ) {
        JulyMondays.push(currentDate.toDateString());
      }
  
      // following day
      currentDate.setDate(currentDate.getDate() + 1);
    };

    return JulyMondays;
}
  
const mondays = findJulyMondays();
