function kilometerToMeter(input) {
    if (input > 0) {
      let result = input * 1000;
      return result;
    }
    else if (input === 0) {
      let text = "You've entered 0!";
      return text;
    }
    // in case user do not give a positive number 
    else {
      let text2 = "Please enter a positive number!";
      return text2;
    }
  }





  function budgetCalculator(countWatch, countPhone, countLaptop) {
      // Checking if each product price is greater or equal to zero
    if ((countWatch >= 0) && (countPhone >= 0) && (countLaptop >= 0)) {
      // Setting each product price 
      let watchCost = 50, phoneCost = 100, laptopCost = 500;
      // Calculation of each product
      watchCost *= countWatch;
      phoneCost *= countPhone;
      laptopCost *= countLaptop;
      // Total calculation of all product
      totalCost = watchCost + phoneCost + laptopCost;
      return totalCost;
    }
    else {
      let text = "Please enter positive numbers only!";
      return text;
    }
  }





  function hotelCost(days) {
    let totalRent;
    // Checking whether the number of days is greater than 0 or not 
    if (days > 0) {
      // in case customer stays less or equal 10 days 
      if (days <= 10) {
        totalRent = days * 100;
        return totalRent;
      }
      // in case customer stays less or equal 20 days 
      else if (days <= 20) {
        days -= 10
        totalRent = ((days * 80) + 1000);
        return totalRent;
      }
      // in case customer stays more than 20 days 
      else {
        days -= 20;
        totalRent = ((days * 50) + 1800);
        return totalRent;
      }
    }
    else {
      let text = "Please enter a positive number!"
    }
  }





  function megaFriend(array) {
    // Check whether the given input is an array or not
    if (Array.isArray(array) === true) {
      // Check whether the array is empty or not 
      if (array.length === 0) {
        let text = "The array is empty!";
        return text;
      }
      else {
        let maxName = array[0];
        for (let i = 0; i < array.length; ++i) {
          // Comparing elements length 
          if (array[i].length > maxName.length) {
            maxName = array[i];
          }
        }
        return maxName;
      }
    }
    else {
      let text2 = "Please give an array as input!";
      return text2;
    }
  }