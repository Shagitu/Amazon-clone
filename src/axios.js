import axios from "axios";

const instance = axios.create({
	// baseURL: 'http://127.0.0.1:5001/project-6a94b/us-central1/api',
	baseURL: 'http://localhost:10000/',
});

export default instance;


// http://127.0.0.1:5001/project-6a94b/us-central1/api