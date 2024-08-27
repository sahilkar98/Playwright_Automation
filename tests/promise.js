function fetchData(url) {
    return new Promise(function (resolve, reject) {
        // Simulate an async operation using setTimeout
        setTimeout(function () {
            var success = true; // Simulate the operation result
            if (success) {
                resolve("Data from " + url); // Operation succeeded
            }
            else {
                reject("Failed to fetch data from " + url); // Operation failed
            }
        }, 1000); // 1 second delay
    });
}
fetchData("https://api.example.com/data")
    .then(function (data) {
    console.log("Received:", data);
})
    .catch(function (error) {
    console.error("Error:", error);
});
