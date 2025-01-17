import { SongDto } from 'src/services/rest-api';

export interface ISong {
  createSong: SongDto;
  songs: SongDto[];
}

function state(): ISong {
  return {
    createSong: {
      id: '',
      url: '',
      name: '',
      description: '',
      datecreated: '',
      songwriter: '',
      performedplaces: ''
    },
    songs: []
  };
}

export default state;
