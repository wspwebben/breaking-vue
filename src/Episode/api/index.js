import api from '/@/service/api';

import { transform } from './transform';

const EPISODES = 'episodes';

export const getAllEpisodes = async () => {
  const episodes = await api.get(EPISODES);

  return episodes.map(transform);
}

export const getSeriesEpisodes = async (series) => {
  const episodes = await  api.get(EPISODES, {
    params: {
      series,
    },
  });

  return episodes.map(transform);
}

export const getEpisode = async (id) => {
  const [episode] = await api.get(`${EPISODES}/${id}`);
  
  return transform(episode);
}
