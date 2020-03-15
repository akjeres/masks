import { API_key as key } from './API-key';

export default class YT_API {
    constructor () {
        this.endpoint = 'https://www.googleapis.com/youtube/v3';
    }

    get_videos_from_list = ( { channel_ID } ) => {
        return fetch(`${ this.endpoint }/search?key=${ key }` +
            `&channelId=d${ channel_ID }` +
            `&part=snippet,id` +
            `&type=video` +
            `&order=date` +
            `&maxResults=20` /*+
         `&pageToken=${ token }`*/
        )
            .then(res => {
                return res.json();
            })
            .then(res => {
                if ('error' in res) throw new Error(JSON.stringify(res.error));

                return res;
            })
    }
}