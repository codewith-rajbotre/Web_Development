const myPromise = new Promise((resolve, reject) => {
  let success = true;

  setTimeout(() => {
    if (success) {
      resolve("✅ Data fetched successfully!");
    } else {
      reject("❌ Failed to fetch data.");
    }
  }, 2000); // simulate async task (like API call)
});

myPromise
  .then(result => console.log(result))   // when resolved
  .catch(error => console.log(error))    // when rejected
  .finally(() => console.log("Promise finished (success or fail)."));
