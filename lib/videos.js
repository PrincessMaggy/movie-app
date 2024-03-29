// import videoData from '../data/videos.json';

export const getCommonVideos = async (url) => {
    const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

    try {
        const BASE_URL = `youtube.googleapis.com/youtube/v3`;

        const response = await fetch(
            `https://${BASE_URL}/${url}&
            maxResults=2&key=${YOUTUBE_API_KEY}`,
        );

        const data = await response.json();
        if (data?.error) {
            console.error('Youtube API error', data.error);
            return [];
        }
        console.log({items: data.items});
        return data?.items.map((item) => {
            console.log({id: item.id});
            const id = item.id?.videoId || item.id;
            const snippet = item.snippet;
            return {
                title: snippet?.title,
                imgUrl: snippet.thumbnails.high.url,
                description: snippet.description,
                publishTime: snippet.publishedAt,
                statistics: item.statistics ? item.statistics.viewCount : 0,
                channelTitle: snippet.channelTitle,
                id,
            };
        });
    } catch (error) {
        console.log('error', error);
        return [];
    }
};
export const getVideos = (searchQuery) => {
    const URL = `search?part=snippet&q=${searchQuery}&type=video`;
    return getCommonVideos(URL);
};
export const getPopularVideos = () => {
    const URL = `videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US`;
    return getCommonVideos(URL);
};
export const getYoutubeVideoById = (videoId) => {
    const URL = `videos?part=snippet%2Ccontent
    Details%2Cstatistics&id=${videoId}`;
    return getCommonVideos(URL);
};
