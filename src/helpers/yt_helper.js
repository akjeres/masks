import { API_key as key } from './API-key';
import { dummy } from './dummy';

export default class YT_API {
    constructor () {
        this.endpoint = 'https://www.googleapis.com/youtube/v3';
    }

    get_videos_from_list = ( { channel_ID, pageToken, results = 18 } ) => {
        const suffix = pageToken ? `&pageToken=${ pageToken }` : '';
        const request = `${ this.endpoint }/search?key=${ key }` +
            `&channelId=${ channel_ID }` +
            `&part=snippet,id` +
            `&type=video` +
            `&order=date` +
            `&maxResults=${ results }` +
            suffix;

        if ('undefined' !== typeof dummy) {
            return Promise.resolve(dummy);
        }

        return fetch(request)
            .then(res => {
                return res.json();
            })
            .then(res => {
                if ('error' in res) throw new Error(JSON.stringify(res.error));

                return res;
            })
    }
}