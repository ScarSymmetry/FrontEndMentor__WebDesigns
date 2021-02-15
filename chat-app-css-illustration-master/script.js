"use strict";

document.addEventListener("DOMContentLoaded", (e) => {
	gsap.to(".smartphone", 1, {
		scaleY: 1,
		height: "54rem",
		ease: "power3.inOut",
	});

	gsap.to(".smartphone__display", 1, { opacity: 1 });
	gsap.to(".prices", 1, { x: 0 });
	gsap.to(".sent-message", 1.2, { x: 0, ease: "sine" });
	gsap.to(".received-message", 1.2, { scaleY: 1 });
	gsap.to(".dogs", 1.3, { x: 0, ease: "bounce.out" });
	gsap.to(".booking", 2.3, { opacity: 1 });
});
