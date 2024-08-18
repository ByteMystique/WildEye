document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("notifyButton");

    button.addEventListener("click", () => {
        
        if (Notification.permission === "granted") {
           
            showNotification();
        } else if (Notification.permission !== "denied") {
            
            Notification.requestPermission().then(permission => {
                if (permission === "granted") {
                    showNotification();
                } else {
                    console.log("permission denied.");
                }
            }).catch(error => {
                console.log("Error requesting :", error);
            });
        } else {
            console.log("denied");
        }
    });

    
    function showNotification() {
        const notification = new Notification("STAY ALERT", {
            body: "Animal Sighted",
            icon: "WildEye/assets/images/icon.jpg" 
        });

      
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
