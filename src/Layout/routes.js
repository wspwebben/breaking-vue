import ViewLayoutMain from './views/Main.vue';

export const wrapMainLayout = (children) => ({
  path: '',
  component: ViewLayoutMain,
  children,
})
