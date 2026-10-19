export type PolicyBlock =
	| { kind: 'text'; heading?: string; paragraphs: string[] }
	| { kind: 'list'; items: string[] };

export type PolicySection = {
	id: string;
	title: string;
	blocks: PolicyBlock[];
};

export type AppPrivacyPolicy = {
	slug: string;
	appName: string;
	productNumber: string;
	category: string;
	tagline: string;
	effectiveDate: string;
	intro: string[];
	sections: PolicySection[];
	contact: { label: string; value: string }[];
	closing: string;
};

const spycamPro: AppPrivacyPolicy = {
	slug: 'spycam-pro',
	appName: 'SpyCam Pro',
	productNumber: '01',
	category: 'RECORDING UTILITY',
	tagline:
		'How SpyCam Pro handles information, permissions and your recordings — written to be read, not skimmed past.',
	effectiveDate: 'September 29, 2026',
	intro: [
		'This Privacy Policy explains how SpyCam Pro (“SpyCam Pro,” “the App,” “we,” “us,” or “our”) handles information when you use the application.',
		'SpyCam Pro is designed as a privacy-focused recording utility. Our objective is to minimize the collection of personal information and, where technically possible, keep recordings and related content under the user’s control and on the user’s device.',
		'By downloading, installing, or using SpyCam Pro, you acknowledge this Privacy Policy.',
	],
	sections: [
		{
			id: 'information-permissions',
			title: 'Information and Permissions Used by the App',
			blocks: [
				{
					kind: 'text',
					paragraphs: [
						'Depending on the features you choose to use, SpyCam Pro may request access to the following:',
					],
				},
				{
					kind: 'text',
					heading: 'Camera',
					paragraphs: [
						'Camera permission is used to provide video recording and camera-related functionality.',
						'Camera input is used to perform the recording functionality initiated by the user. We do not intentionally collect camera footage for advertising, profiling, or unrelated purposes.',
					],
				},
				{
					kind: 'text',
					heading: 'Microphone',
					paragraphs: [
						'Microphone permission is used when you choose to record audio or video with audio.',
						'Audio captured through the microphone is used to provide the recording functionality selected by you.',
					],
				},
				{
					kind: 'text',
					heading: 'Screen Capture',
					paragraphs: [
						'SpyCam Pro may use Android’s screen-capture functionality when you choose to record your device screen.',
						'Screen content may include anything visible on your device while recording is active. You are responsible for ensuring that you have the appropriate permission or authorization to record such content.',
					],
				},
				{
					kind: 'text',
					heading: 'Storage and Media',
					paragraphs: [
						'The App may use Android storage, media, or file-access functionality to save, open, export, move, or manage recordings and other files that you choose to work with.',
					],
				},
				{
					kind: 'text',
					heading: 'Notifications',
					paragraphs: [
						'The App may use notifications to display recording status, recording controls, warnings, or other information necessary for application functionality.',
					],
				},
			],
		},
		{
			id: 'recordings',
			title: 'Recordings and User Content',
			blocks: [
				{
					kind: 'text',
					paragraphs: [
						'Recordings created using SpyCam Pro may contain video, audio, images, screen content, conversations, documents, personal information, or other material captured while recording is active.',
						'Such recordings are considered user-generated content.',
						'Unless a specific feature explicitly states otherwise:',
					],
				},
				{
					kind: 'list',
					items: [
						'Recordings are stored locally on your device.',
						'We do not sell your recordings.',
						'We do not use your recordings for advertising.',
						'We do not intentionally use your recordings to create advertising profiles.',
						'We do not intentionally upload your recordings to our servers.',
						'You decide when recordings are created, exported, shared, or deleted.',
					],
				},
				{
					kind: 'text',
					paragraphs: [
						'When you use Android sharing functionality or another application to share a recording, that transmission may be handled by the receiving application or service and may be subject to its own privacy policy and terms.',
					],
				},
			],
		},
		{
			id: 'personal-information',
			title: 'Personal Information',
			blocks: [
				{
					kind: 'text',
					paragraphs: [
						'SpyCam Pro is designed to minimize the collection of personal information.',
						'We do not intentionally collect information such as your:',
					],
				},
				{
					kind: 'list',
					items: [
						'Name',
						'Contacts',
						'Personal photographs',
						'Camera recordings',
						'Microphone recordings',
						'Screen recordings',
						'Messages',
						'Documents',
					],
				},
				{
					kind: 'text',
					paragraphs: [
						'unless a particular feature explicitly requires such information and the App informs you about that processing.',
						'SpyCam Pro does not require you to provide personal information merely to use its basic recording functionality, unless otherwise stated by a particular version or feature of the App.',
					],
				},
			],
		},
		{
			id: 'internet-network',
			title: 'Internet and Network Access',
			blocks: [
				{
					kind: 'text',
					paragraphs: [
						'The core recording functionality of SpyCam Pro is designed to work without requiring your recordings to be uploaded to our servers.',
						'If network access is used for a particular feature, such as application updates, optional services, diagnostics, licensing, security, or other functionality, such network activity will be limited to the relevant purpose.',
						'We do not sell personal or sensitive user data.',
					],
				},
			],
		},
		{
			id: 'third-party',
			title: 'Third-Party Services and Software',
			blocks: [
				{
					kind: 'text',
					paragraphs: [
						'SpyCam Pro may contain third-party libraries, software components, or services that support application functionality, security, diagnostics, crash reporting, analytics, or other legitimate purposes.',
						'Where such services are used, the information processed by them may be subject to their respective privacy policies and terms.',
						'The App does not authorize third parties to sell personal or sensitive user data obtained through SpyCam Pro for purposes that are not permitted by applicable law or this Privacy Policy.',
						'Where the App’s data practices change because of the introduction of a third-party service, this Privacy Policy may be updated accordingly.',
					],
				},
			],
		},
		{
			id: 'data-security',
			title: 'Data Security',
			blocks: [
				{
					kind: 'text',
					paragraphs: [
						'We take reasonable measures intended to protect information handled by SpyCam Pro.',
						'However, no application, storage system, electronic transmission, or security mechanism can guarantee absolute security.',
						'You are responsible for protecting your device and the recordings stored on it, including through Android’s screen lock, password, PIN, biometric authentication, encryption, and other available security mechanisms.',
					],
				},
			],
		},
		{
			id: 'retention-deletion',
			title: 'Data Retention and Deletion',
			blocks: [
				{
					kind: 'text',
					paragraphs: [
						'Where recordings are stored locally on your device, SpyCam Pro does not retain those recordings on our servers.',
						'Local recordings remain on your device until you delete them, move them, export them, or otherwise remove them.',
						'You can delete recordings through the App, Android’s file-management or media tools, or other relevant device functionality.',
						'Files that you export or move outside the App’s private storage may remain on your device even after the App is uninstalled. You are responsible for deleting such files if you no longer require them.',
						'If a future version of the App provides a cloud, online, or account-based service, the retention and deletion terms applicable to that service will be disclosed at the relevant time.',
					],
				},
			],
		},
		{
			id: 'children',
			title: 'Children’s Privacy',
			blocks: [
				{
					kind: 'text',
					paragraphs: [
						'SpyCam Pro is not intended to knowingly collect personal information from children.',
						'We do not knowingly collect personal information from children for advertising, profiling, or unrelated purposes.',
						'If you believe that a child has provided personal information to us, please contact us using the contact information provided below.',
					],
				},
			],
		},
		{
			id: 'permission-controls',
			title: 'Permission Controls',
			blocks: [
				{
					kind: 'text',
					paragraphs: [
						'SpyCam Pro requests permissions when they are required for the features you choose to use.',
						'You can grant or deny permissions through Android’s permission controls.',
						'Refusing a permission may prevent the corresponding feature from functioning.',
						'You should review Android’s permission settings periodically and revoke permissions that you no longer wish to provide.',
					],
				},
			],
		},
		{
			id: 'lawful-use',
			title: 'Lawful and Responsible Use',
			blocks: [
				{
					kind: 'text',
					paragraphs: [
						'SpyCam Pro is intended to be used only for lawful purposes.',
						'You are solely responsible for determining whether recording audio, video, conversations, screens, communications, locations, people, property, or other material is legally permitted in your particular circumstances.',
						'Depending on where you are and what you record, applicable laws may require consent, notification, authorization, or compliance with other legal requirements.',
						'You are responsible for obtaining any consent or authorization that may be required before using SpyCam Pro to record another person or their information.',
						'You must not use the App to violate another person’s privacy, confidentiality, intellectual-property rights, contractual rights, security, or other legal rights.',
					],
				},
			],
		},
		{
			id: 'user-responsibility',
			title: 'User Responsibility',
			blocks: [
				{
					kind: 'text',
					paragraphs: [
						'You are solely responsible for your use of SpyCam Pro and for all material created, captured, stored, exported, shared, published, or otherwise distributed through the App.',
						'You are also responsible for:',
					],
				},
				{
					kind: 'list',
					items: [
						'Securing your device and recordings.',
						'Using the App in accordance with applicable laws.',
						'Obtaining necessary permissions or consent.',
						'Protecting confidential information captured by the App.',
						'Determining whether your intended use of the App is appropriate and lawful.',
						'Any consequences resulting from your use or misuse of the App.',
					],
				},
				{
					kind: 'text',
					paragraphs: [
						'The creator and developer of SpyCam Pro do not control what users choose to record or how users subsequently use or distribute recordings.',
					],
				},
			],
		},
		{
			id: 'disclaimer',
			title: 'Disclaimer and Limitation of Liability',
			blocks: [
				{
					kind: 'text',
					paragraphs: [
						'SpyCam Pro is provided as a recording and privacy utility and is provided on an “as is” and “as available” basis to the extent permitted by applicable law.',
						'To the maximum extent permitted by applicable law, the creator, developer, publisher, and associated parties of SpyCam Pro shall not be responsible or liable for consequences arising from the user’s use, misuse, inability to use, or reliance upon the App.',
						'This includes, without limitation, claims, disputes, losses, damages, privacy issues, unauthorized recordings, unauthorized disclosures, data loss, loss of files, device-related issues, legal consequences, or other consequences resulting from the use of the App or content recorded through it.',
						'The creator and developer do not accept responsibility for unlawful, unauthorized, abusive, deceptive, or otherwise improper use of SpyCam Pro by a user.',
						'You use SpyCam Pro at your own risk and are solely responsible for your actions, recordings, files, and their consequences.',
						'Nothing in this Privacy Policy is intended to exclude or limit liability to the extent that such exclusion or limitation is prohibited by applicable law.',
					],
				},
			],
		},
		{
			id: 'no-guarantee',
			title: 'No Guarantee of Continuous or Error-Free Operation',
			blocks: [
				{
					kind: 'text',
					paragraphs: [
						'Although we aim to provide reliable software, we do not guarantee that SpyCam Pro will always operate without interruptions, errors, bugs, compatibility issues, recording failures, storage failures, battery limitations, device-specific problems, operating-system restrictions, or other technical issues.',
						'You are responsible for maintaining appropriate backups of any important recordings or files.',
					],
				},
			],
		},
		{
			id: 'changes',
			title: 'Changes to This Privacy Policy',
			blocks: [
				{
					kind: 'text',
					paragraphs: [
						'We may update this Privacy Policy from time to time to reflect changes in the App, technology, services, or applicable legal requirements.',
						'When changes are made, we will update the Effective Date at the beginning of this Privacy Policy.',
						'Your continued use of SpyCam Pro after an updated Privacy Policy becomes available constitutes acknowledgment of the updated policy to the extent permitted by applicable law.',
					],
				},
			],
		},
		{
			id: 'contact',
			title: 'Contact Information',
			blocks: [
				{
					kind: 'text',
					paragraphs: [
						'For questions, concerns, privacy requests, or other inquiries regarding SpyCam Pro, contact:',
					],
				},
			],
		},
		{
			id: 'acknowledgment',
			title: 'Final Acknowledgment',
			blocks: [
				{
					kind: 'text',
					paragraphs: ['By using SpyCam Pro, you acknowledge that you understand:'],
				},
				{
					kind: 'list',
					items: [
						'The App may require access to sensitive device capabilities such as the camera, microphone, and screen capture.',
						'You are responsible for ensuring that your use of these capabilities is lawful.',
						'You are responsible for protecting and managing recordings created through the App.',
						'The creator and developer are not responsible for the user’s actions, recordings, distribution of recordings, or consequences arising from the user’s use or misuse of the App, except where liability cannot legally be excluded.',
					],
				},
			],
		},
	],
	contact: [
		{ label: 'App Name', value: 'SpyCam Pro' },
		{ label: 'Developer / Creator', value: 'Romalabs' },
		{ label: 'Privacy Email', value: 'hello@romalabs.com' },
		{ label: 'Website', value: 'romalabs.com' },
	],
	closing: 'SpyCam Pro — Privacy-focused recording with user-controlled data.',
};

export const appPrivacyPolicies: AppPrivacyPolicy[] = [spycamPro];

export function findPrivacyPolicy(slug: string): AppPrivacyPolicy | undefined {
	return appPrivacyPolicies.find(policy => policy.slug === slug);
}
