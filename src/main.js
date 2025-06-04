import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { db, auth } from "./services/firebase";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Hero section animations
const heroAnimation = () => {
	const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

	timeline
		.to("h1", { opacity: 1, y: 0, duration: 1 })
		.to("p", { opacity: 1, y: 0, duration: 1 }, "-=0.5")
		.to("button", { opacity: 1, y: 0, duration: 1 }, "-=0.5");
};

// Feature cards animation
const featureCardsAnimation = () => {
	gsap.from(".feature-card", {
		scrollTrigger: {
			trigger: "#features",
			start: "top center",
			toggleActions: "play none none reverse",
		},
		y: 50,
		opacity: 0,
		duration: 1,
		stagger: 0.2,
	});
};

// Initialize animations
document.addEventListener("DOMContentLoaded", () => {
	heroAnimation();
	featureCardsAnimation();
});

// Example Firebase functions
const exampleFirebaseAuth = async () => {
	try {
		// Example: Sign in anonymously
		const userCredential = await auth.signInAnonymously();
		console.log("Signed in anonymously:", userCredential.user.uid);
	} catch (error) {
		console.error("Auth error:", error);
	}
};

const exampleFirestoreOperation = async () => {
	try {
		// Example: Add a document to a collection
		const docRef = await db.collection("examples").add({
			timestamp: new Date(),
			message: "Hello from Firebase!",
		});
		console.log("Document written with ID:", docRef.id);
	} catch (error) {
		console.error("Firestore error:", error);
	}
};
