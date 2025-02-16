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
});
