var disableEnableBtn = document.getElementById("disable-enable-btn");
var submitBtn = document.getElementById("submit-btn");
var cancelBtn = document.getElementById("cancel-btn");

disableEnableBtn.addEventListener("click", function() {
	if (
		!submitBtn.classList.contains("sl-is-disabled") && 
		!submitBtn.classList.contains("sl-is-disabled")
	) {
		submitBtn.classList.add("sl-is-disabled");
		cancelBtn.classList.add("sl-is-disabled");
	} else {
		submitBtn.classList.remove("sl-is-disabled");
		cancelBtn.classList.remove("sl-is-disabled");
	}
});
