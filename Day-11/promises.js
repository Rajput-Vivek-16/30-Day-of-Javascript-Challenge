// Task 1: Create a promise that resolves after 2 seconds
new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved"); // Resolve with message
        console.log("Promise created and ran after 2 seconds");
    }, 2000);
}).then((data) => {
    console.log(data); // Log the resolved value
});

// Task 2: Create a promise that rejects after 2 seconds
new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error("Error in resolving promise")); // Reject with error
        console.log("Promise created and ran after 2 seconds");
    }, 2000);
}).then((result) => {
    console.log("This will not be logged because the promise rejects."); // Won't execute
}).catch((error) => {
    console.log(error); // Log the error
});

// Task 3: Fetch data sequentially using async/await
const fetchDataSequentially = async () => {
    try {
        const data1 = await fetchData("Fetching Data1 ...", 1000); // Wait for data1
        console.log(data1); // Log data1
        const data2 = await fetchData("Fetching Data2 ...", 1000); // Wait for data2
        console.log(data2); // Log data2
    } catch (error) {
        console.log("Error:", error); // Log error if any
    }
};

const fetchData = (message, delay) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${message} - Data Fetched`); // Resolve with message
        }, delay);
    });
};
fetchDataSequentially(); // Call the function

// Task 4: Log resolved value of a promise
async function logResolvedValue(promise) {
    promise
        .then((result) => {
            console.log("Resolved value:", result); // Log resolved value
        })
        .catch((error) => {
            console.error("Error:", error); // Log error if any
        });
}

const successPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("This is the resolved value"); // Resolve after 1 second
    }, 1000);
});

logResolvedValue(successPromise); // Call the function

// Task 5: Log rejected value of a promise
async function logRejectedValue(promise) {
    try {
        const result = await promise; // Wait for promise to resolve
        console.log(result); // Log result
    } catch (error) {
        console.log("Error:", error); // Log error if any
    }
}

const failurePromise = new Promise((_, reject) => {
    setTimeout(() => {
        reject("This is the rejected value"); // Reject after 1 second
    }, 1000);
});

logRejectedValue(failurePromise); // Call the function

// Task 6: Fetch data from a public API using promises
const fetchDataFromAPI = () => {
    fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not in the range of 200-299"); // Check response
            }
            return response.json(); // Parse JSON
        })
        .then((data) => {
            console.log("Response data:", data); // Log response data
        })
        .catch((error) => {
            console.error('There was a problem with the fetch operation:', error); // Log fetch error
        });
};

fetchDataFromAPI(); // Call the function

// Task 7: Fetch data from a public API using async/await
async function fetchingData() {
    try {
        const response = await fetch("https://api.github.com/users/rajput-vivek-16"); // Fetch user data
        if (!response.ok) {
            throw new Error(`Network response was not in the range of 200-299: ${response.statusText}`); // Check response
        }
        const data = await response.json(); // Parse JSON
        console.log(data.login); // Log username
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error); // Log fetch error
    }
}
fetchingData(); // Call the function

// Task 8: Fetch multiple promises using Promise.all
const fetchRandomNumber = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const number = Math.floor(Math.random() * 100) + 1; // Generate random number
            resolve(number); // Resolve with number
        }, 1000);
    });
};

const fetchCurrentDate = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const date = new Date().toLocaleDateString(); // Get current date
            resolve(date); // Resolve with date
        }, 1000);
    });
};

const fetchUserInfo = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const info = { name: "Vivek", id: "269" }; // User info
            resolve(info); // Resolve with info
        }, 1000);
    });
};

const fetchAllData = async () => {
    try {
        const [randomNumber, currentDate, info] = await Promise.all([ // Wait for all promises
            fetchRandomNumber(),
            fetchCurrentDate(),
            fetchUserInfo(),
        ]);
        console.log(`Random Number: ${randomNumber}`); // Log random number
        console.log(`Current Date: ${currentDate}`); // Log current date
        console.log(`User Info: Name - ${info.name}, Id - ${info.id}`); // Log user info
    } catch (error) {
        console.error(`Error fetching data: ${error.message}`); // Log fetch error
    }
};
fetchAllData(); // Call the function

// Task 9: Fetch first resolved promise using Promise.race
const delayPromise = (message, delay) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(message); // Resolve with message
        }, delay);
    });
};

const promise1 = delayPromise("First promise resolved", 3000);
const promise2 = delayPromise("Second promise resolved", 1000);
const promise3 = delayPromise("Third promise resolved", 100);

Promise.race([promise1, promise2, promise3]) // Race between promises
    .then((result) => {
        console.log(`First resolved value: ${result}`); // Log first resolved value
    })
    .catch((error) => {
        console.error(`Error: ${error}`); // Log error if any
    });
