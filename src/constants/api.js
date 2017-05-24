
import axios from 'axios';
axios.defaults.baseURL = 'https://rallycoding.herokuapp.com/api';

class AlbumApi {
    
    async fetchAlbumList() {
        try {
            const { albumList } = await axios.get('/music_albums');
            return albumList.data;
        } catch (e) {
            console.log(e)
        }
    }
}

export {
    AlbumApi
};