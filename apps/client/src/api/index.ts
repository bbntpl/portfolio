let baseUrl: string;

if (process.env.NODE_ENV === 'development') {
	baseUrl = '';
} else {
	baseUrl = 'https://portfolio-api-bvrbryn445.vercel.app';
}

export { baseUrl };