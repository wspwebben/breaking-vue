export const transform = (episode) => {
  const {
    episode_id: id,
    air_date: date,
    episode: order,
    characters,
    title,
    season,
    series,
  } = episode;

  return {
    id,
    date,
    characters,
    title,
    season,
    series,
    order,
  }
}