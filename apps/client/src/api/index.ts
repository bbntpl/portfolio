let baseUrl: string;

if (process.env.NODE_ENV === 'development') {
	baseUrl = '';
} else {
	baseUrl = 'https://portfolio-api-bbntpl.vercel.app';
}

export { baseUrl };