import ViewEpisodeProvider from '/@/Episode/views/Provider.vue';
import ViewEpisodeList from '/@/Episode/views/List.vue';
import ViewEpisode from '/@/Episode/views/Index.vue';

export const EPISODE_LIST = 'EpisodeList';
export const EPISODE = 'Episode';

export const routes = [
  {
    path: '/episode',
    alias: '',
    component: ViewEpisodeProvider,
    children: [
      {
        path: '',
        name: EPISODE_LIST,
        component: ViewEpisodeList,
      },
      {
        path: ':id',
        name: EPISODE,
        component: ViewEpisode,
        props: ({ params }) => {
    
          return {
            id: Number(params.id),
          }
        }
      }
    ]
  }
];

