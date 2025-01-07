function foo(a, b) {
  if (a === 0 && b === 0) {
    return NaN; // Or throw an error, or return a specific value
  } else if (a === 0 || b === 0) {
    return 0; // handle cases of one zero value 
  }
  // ... rest of the function
}