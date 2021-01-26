import api from '/@/service/api';

const EPISODES = 'episodes';

export const getAllEpisodes = () => {
  return api.get(EPISODES);
}

export const getSeriesEpisodes = (series) => {
  return api.get(EPISODES, {
    params: {
      series,
    },
  });
}

export const getEpisode = async (id) => {
  const [episode] = await api.get(`${EPISODES}/${id}`);
  
  return episode;
}
