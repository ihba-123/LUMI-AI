$(document).ready(function () {
    if ($(".newText").length > 0) {
        console.log("✅ Element found! Running Textillate...");
        $(".newText").lettering();
        $(".newText").textillate({
            loop: true,
            sync: true,
            in: { effect: "bounceIn" },
            out: { effect: "bounceOut" },
        });
    } else {
        console.log("❌ Element NOT found! Check your HTML.");
    }

    // SiriWave configuration
    var siriWave = new SiriWave({
        container: document.getElementById("siri-container"),
        width: 800,
        height: 200,
        amplitude: 2, // Should be a number, not a string
        frequency: 0.5, // Should be a number, not a string
        speed: 0.3, // Should be a number, not a string
        color: "#fff",
        autostart: true,
        style: "ios9",
        globalCompositeOperation: "lighter",
    });

    // Siri message animation
    if ($(".siri-message").length > 0) {
        console.log("✅ Element found! Running Textillate...");
        $(".siri-message").lettering(); // Use correct class for Siri messages
        $(".siri-message").textillate({
            loop: true,
            sync: true,
            in: { effect: "fadeInUp", sync: true },
            out: { effect: "fadeOutUp", sync: true },
        });
    } else {
        console.log("❌ Element NOT found! Check your HTML.");
    }
});
