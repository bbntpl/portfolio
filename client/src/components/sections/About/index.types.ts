interface SocialMediaLink {
	platform: string;
	url: string;
}

interface RandomFact {
	label: string;
	value: string | number;
}

export interface Profile {
	imageUrl: string;
	socialMediaLinks: Array<SocialMediaLink> | null;
	// In-between elements (paragraphs) are spacing when displaying on client-side
	about: Array<string>;
	randomFacts: Array<RandomFact> | null;
}