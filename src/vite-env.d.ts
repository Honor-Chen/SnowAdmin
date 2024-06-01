/// <reference types="vite/client" />
declare module "*.vue" {
  import { defineComponent } from "vue";
  const component: ReturnType<typeof defineComponent>;
  export default component;
}

declare module "vue-i18n";
declare module "@arco-design/color";
declare module "sortablejs";
