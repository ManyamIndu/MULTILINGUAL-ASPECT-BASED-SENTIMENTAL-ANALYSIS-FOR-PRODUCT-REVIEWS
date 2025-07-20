function analyzeSentiment() {
    const textInput = document.getElementById("text-input").value;
    const resultOutput = document.getElementById("analysis-output");
    const historyList = document.getElementById("history-list");

    // Simple mock sentiment analysis (replace with real model/API if available)
    let sentiment = "Neutral";
    if (textInput.includes("happy") || textInput.includes("good")) {
        sentiment = "Positive 😊";
    } else if (textInput.includes("sad") || textInput.includes("bad")) {
        sentiment = "Negative 😞";
    }
    
    resultOutput.textContent = `Sentiment: ${sentiment}`;
    
    // Add to history
    const historyItem = document.createElement("li");
    historyItem.textContent = `${new Date().toLocaleTimeString()} - ${sentiment}`;
    historyList.appendChild(historyItem);
}

// File Upload Event
document.getElementById("file-input").addEventListener("change", function(event) {
    const file = event.target.files[0];
    if (file && file.name.endsWith(".csv")) {
        // Process CSV file (simple mock processing)
        document.getElementById("analysis-output").textContent = `File "${file.name}" uploaded successfully. Ready for analysis.`;
    } else {
        alert("Please upload a valid CSV file.");
    }
});

// Display Current Time
function updateTime() {
    const timeElement = document.getElementById("time");
    timeElement.textContent = new Date().toLocaleTimeString();
}
setInterval(updateTime, 1000); // Update time every second
