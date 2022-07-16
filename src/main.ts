import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '@/App.vue'
import router from '@/router'

import '@/assets/tailwind.css'

import { worker } from '@/mocks/browser'

if (process.env.NODE_ENV === 'msw') {
  await worker.start()
}

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
