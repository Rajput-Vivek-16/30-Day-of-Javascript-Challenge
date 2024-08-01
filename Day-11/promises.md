
## Promises and Async/Await

### Promises
- **Creating a Promise**:
  ```javascript
  const promise = new Promise((resolve, reject) => {
      // Asynchronous operation
      // Call resolve(value) on success
      // Call reject(error) on failure
  });
  ```

- **Handling Resolved Values**:
  ```javascript
  promise.then((result) => {
      console.log("Resolved:", result);
  });
  ```

- **Handling Rejected Values**:
  ```javascript
  promise.catch((error) => {
      console.error("Error:", error);
  });
  ```

### Chaining Promises
- **Chaining Promises**:
  ```javascript
  promise1
      .then(result => promise2) // Wait for promise1, then return promise2
      .then(result => console.log(result))
      .catch(error => console.error("Error:", error));
  ```

### Async/Await
- **Defining an Async Function**:
  ```javascript
  const asyncFunction = async () => {
      // Asynchronous code here
  };
  ```

- **Awaiting a Promise**:
  ```javascript
  const result = await promise; // Waits for the promise to resolve
  ```

- **Error Handling with Try/Catch**:
  ```javascript
  try {
      const result = await promise; // Await a promise
  } catch (error) {
      console.error("Error:", error); // Handle error
  }
  ```

### Fetching Data from APIs
- **Using Fetch with Promises**:
  ```javascript
  fetch(url)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error("Fetch error:", error));
  ```

- **Using Fetch with Async/Await**:
  ```javascript
  const fetchData = async () => {
      try {
          const response = await fetch(url);
          const data = await response.json();
          console.log(data);
      } catch (error) {
          console.error("Fetch error:", error);
      }
  };
  ```

### Concurrent Promises
- **Using `Promise.all`**:
  ```javascript
  const results = await Promise.all([promise1, promise2, promise3]);
  console.log(results); // Logs an array of resolved values
  ```

- **Using `Promise.race`**:
  ```javascript
  const firstResolved = await Promise.race([promise1, promise2, promise3]);
  console.log("First resolved:", firstResolved); // Logs the first resolved promise
  ```

### Important Concepts
- **Promise States**: A promise can be in one of three states: **pending**, **fulfilled**, or **rejected**.
- **Async/Await**: A syntactic sugar for working with promises, making asynchronous code easier to read and write.
- **Error Handling**: Always handle errors in promises and async functions to prevent unhandled promise rejections.
