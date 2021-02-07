import ViewEpisodeList from './views/List.vue';
import ViewEpisode from './views/Index.vue';

export const routes = [
  {
    path: '',
    name: 'EpisodeList',
    component: ViewEpisodeList,
  },
  {
    path: ':id',
    component: ViewEpisode,
    props: ({ params }) => {

      return {
        id: Number(params.id),
      }
    }
  }
];
