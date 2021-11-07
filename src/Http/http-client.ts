import { Service } from 'typedi';
import axios from 'axios';

@Service({ global: true })
class HttpClient {
    async get(url: string) {
        try {
            const { data } = await axios.get(url);
            return data;
        } catch (err) {
            throw new Error(`Query failed: ${err}`);
        }
    }
}

export default HttpClient;
