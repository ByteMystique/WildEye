document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("notifyButton");

    button.addEventListener("click", () => {
        // Check the current permission status
        if (Notification.permission === "granted") {
            // Permission already granted, show the notification
            showNotification();
        } else if (Notification.permission !== "denied") {
            // Request permission if not already granted or denied
            Notification.requestPermission().then(permission => {
                if (permission === "granted") {
                    showNotification();
                } else {
                    console.log("Notification permission denied.");
                }
            }).catch(error => {
                console.log("Error requesting notification permission:", error);
            });
        } else {
            console.log("Notification permission was denied previously.");
        }
    });

    // Function to show the notification
    function showNotification() {
        const notification = new Notification("Example Notification", {
            body: "This is the notification text",
            icon: "https://via.placeholder.com/128" // Optional: Add an icon
        });

        // Optional: Add event listeners for the notification
        notification.onclick = () => {
            console.log("Notification clicked!");
        };

        notification.onshow = () => {
            console.log("Notification shown!");
        };

        notification.onclose = () => {
            console.log("Notification closed.");
        };

        notification.onerror = () => {
            console.log("Notification error.");
        };
    }
});
//comment hihihi
