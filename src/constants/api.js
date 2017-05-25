
import axios from 'axios';
axios.defaults.baseURL = 'https://rallycoding.herokuapp.com/api';

class AlbumApi {

    async fetchAlbumList() {
        try {
            const { data } = await axios.get('/music_albums');
            return data;
        } catch (e) {
            console.log(e)
        }
    }
}

export {
    AlbumApi
};