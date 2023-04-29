import { defineStore } from 'pinia'

export const useStore = defineStore({
  id: 'meu-store',
  state: () => ({
    sessao_user: false
  }),
  actions: {
    alterarMensagem() {
      this.sessao_user = true
    }
  }
})
