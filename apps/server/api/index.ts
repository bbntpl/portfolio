import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import { ListUserStarredRepos, Portfolio, Project } from '../types';
import { aboutMeInfo, educationalBackgrounds, mySkillset } from '../data';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.get('/api/data', async function (req, res, next) {
	try {
		const fetch = await import('node-fetch');
		const response = await fetch.default(
			`https://api.github.com/users/${process.env.GITHUB_USER}/starred`,
			{
				headers: {
					'Accept': 'application/vnd.github+json',
					'Authorization': `Bearer ${process.env.GITHUB_API_TOKEN}`,
				},
				method: 'GET'
			});
		const data = await response.json() as ListUserStarredRepos['data'];

		const fetchedRepos = data.map(repo => {
			const topics = repo.topics.map(topic => ({ name: topic }));
			const repoProject: Project = {
				id: repo.id,
				title: repo.name,
				description: repo.description,
				topics,
				url: repo.html_url,
				createdAt: repo.created_at,
				homepage: repo.homepage,
				updatedAt: repo.updated_at
			}

			return repoProject;
		})

		const portfolioData: Portfolio = {
			projects: fetchedRepos,
			educationalBackgrounds,
			skillset: mySkillset,
			profile: aboutMeInfo
		}

		// added ok to ensure that client-side received the response properly
		res.json({ data: portfolioData, ok: true });
	} catch (error) {
		res.status(400).json({ ok: false });
	}
});

app.listen(PORT, () => {
	console.log(`App is running on port ${PORT}`);
});