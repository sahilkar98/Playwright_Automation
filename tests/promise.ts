function fetchData(url: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
        // Simulate an async operation using setTimeout
        setTimeout(() => {
            const success = true; // Simulate the operation result

            if (success) {
                resolve("Data from " + url); // Operation succeeded
            } else {
                reject("Failed to fetch data from " + url); // Operation failed
            }
        }, 1000); // 1 second delay
    });
}

fetchData("https://api.example.com/data")
    .then((data) => {
        console.log("Received:", data);
    })
    .catch((error) => {
        console.error("Error:", error);
    });
