/// <reference types="vite/client" />
/// <reference types="vite-plugin-pwa/client" />
/// <reference types="unplugin-vue-router/client" />

declare module 'virtual:pwa-register/vue' {
  import type { RegisterSWOptions } from 'vite-plugin-pwa'

  export type { RegisterSWOptions }
  
  export function useRegisterSW(options?: RegisterSWOptions): {
    needRefresh: import('vue').Ref<boolean>
    offlineReady: import('vue').Ref<boolean>
    updateServiceWorker: (reloadPage?: boolean) => Promise<void>
  }
}