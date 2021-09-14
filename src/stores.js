import { writable } from 'svelte/store';

export const DurationMinute = 1000 * 60;

export const totalIssuesAmount = writable(null);

export const githubIssues = writable(null);

export const events = writable([
	{
		isOpened: false,
		timeISO: '2021-09-21T16:00:00.000Z',
		durationInMs: DurationMinute * 105,

		name: 'No data',
		presenter: 'No data',
		imageUrl: 'https://picsum.photos/seed/appwrite1/300/300',
		description: 'No data'
	},

	{
		isOpened: false,
		timeISO: '2021-09-25T16:00:00.000Z',
		durationInMs: DurationMinute * 90,

		name: 'No data',
		presenter: 'No data',
		imageUrl: 'https://picsum.photos/seed/appwrite1/300/300',
		description: 'No data'
	},

	{
		isOpened: false,
		timeISO: '2021-09-29T15:00:00.000Z',
		durationInMs: DurationMinute * 105,

		name: 'No data',
		presenter: 'No data',
		imageUrl: 'https://picsum.photos/seed/appwrite1/300/300',
		description: 'No data'
	},

	{
		isOpened: false,
		timeISO: '2021-10-06T16:00:00.000Z',
		durationInMs: DurationMinute * 60,

		name: 'No data',
		presenter: 'No data',
		imageUrl: 'https://picsum.photos/seed/appwrite1/300/300',
		description: 'No data'
	},

	{
		isOpened: false,
		timeISO: '2021-10-13T16:00:00.000Z',
		durationInMs: DurationMinute * 90,

		name: 'No data',
		presenter: 'No data',
		imageUrl: 'https://picsum.photos/seed/appwrite1/300/300',
		description: 'No data'
	},

	{
		isOpened: false,
		timeISO: '2021-10-20T16:00:00.000Z',
		durationInMs: DurationMinute * 90,

		name: 'No data',
		presenter: 'No data',
		imageUrl: 'https://picsum.photos/seed/appwrite1/300/300',
		description: 'No data'
	}
]);

export const teamMembers = writable([
	{
		image: '/pictures/eldad.webp',
		githubProfile: 'https://github.com/eldadfux'
	},
	{
		image: '/pictures/christy.webp',
		githubProfile: 'https://github.com/christyjacob4'
	},
	{
		image: '/pictures/torsten.webp',
		githubProfile: 'https://github.com/TorstenDittmann'
	},
	{
		image: '/pictures/damodar.webp',
		githubProfile: 'https://github.com/lohanidamodar'
	},
	{
		image: '/pictures/kodumbeats.webp',
		githubProfile: 'https://github.com/kodumbeats'
	},
	{
		image: '/pictures/jake.webp',
		githubProfile: 'https://github.com/abnegate'
	},
	{
		image: '/pictures/ionic.webp',
		githubProfile: 'https://github.com/PineappleIOnic'
	},

	{
		image: '/pictures/sara.webp',
		githubProfile: 'https://github.com/sarakaandorp'
	},

	{
		image: '/pictures/meldiron.webp',
		githubProfile: 'https://github.com/Meldiron'
	},

	{
		image: '/pictures/aditya.webp',
		githubProfile: 'https://github.com/adityaoberai'
	},
	{
		image: '/pictures/empty.webp',
		githubProfile: 'https://appwrite.io/discord',
		overlay: '+3000'
	}
]);

export const loadStore = (issuesJson) => {
	totalIssuesAmount.set(issuesJson.total_count);
	githubIssues.set(issuesJson.items);
};
