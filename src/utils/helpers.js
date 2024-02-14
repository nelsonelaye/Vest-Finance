// any function used in this application that is small
// categorically, it doesn't belong anywhere else

export function formatCurrency(value) {
  if (value) {
    return value.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }
}

export function formatMetric(value) {
  const absValue = Math.abs(value);
  let formattedValue = "";

  if (absValue >= 1e9) {
    // If value is greater than or equal to 1 billion, convert to billion
    formattedValue = (value / 1e9).toFixed(2) + "B";
  } else if (absValue >= 1e6) {
    // If value is greater than or equal to 1 million, convert to million
    formattedValue = (value / 1e6).toFixed(2) + "M";
  } else {
    // If value is less than 1 million, leave it unchanged
    formattedValue = value?.toString();
  }

  return formattedValue;
}

export function formatPercentage(value) {
  if (value) {
    return (value * 100).toFixed(2) + "%";
  }
}

export function formatMetricKey(str) {
  // Insert spaces before capital letters (except the first letter)

  if (str) {
    const formattedStr = str.replace(/([a-z])([A-Z])/g, "$1 $2");
    // Convert the string to title case
    return formattedStr.charAt(0).toUpperCase() + formattedStr.slice(1);
  }
}

export function getUniqueMonths(dateArray) {
  const uniqueMonths = [];

  // Iterate through the array and extract the month part of each date
  dateArray.forEach((item) => {
    const date = new Date(item.date);
    const month = date.toLocaleString("default", { month: "long" }); // Get the full month name

    uniqueMonths.push(month);

    // if (!uniqueMonths.includes(month)) {
    //   uniqueMonths.push(month);
    // }
  });

  return uniqueMonths; // Convert Set to Array
}
