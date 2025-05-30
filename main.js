window.addEventListener("load", function() {
	const githubButton = [...document.getElementsByClassName("github")][0];
	const linkedinButton = [...document.getElementsByClassName("linkedin")][0];

	githubButton.addEventListener("click", function() {
		window.open("https://github.com/avedati/", "_blank");
	});

	linkedinButton.addEventListener("click", function() {
		window.open("https://www.linkedin.com/in/abhinav-vedati/", "_blank");
	});
});
