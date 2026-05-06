const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api'

export const api = {
  entries: {
    getAll: async () => {
      const response = await fetch(`${API_URL}/v1/entries`)
      return response.json()
    },
    create: async (title: string, content: string) => {
      const response = await fetch(`${API_URL}/v1/entries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, content })
      })
      return response.json()
    },
    get: async (id: number) => {
      const response = await fetch(`${API_URL}/v1/entries/${id}`)
      return response.json()
    },
    delete: async (id: number) => {
      const response = await fetch(`${API_URL}/v1/entries/${id}`, {
        method: 'DELETE'
      })
      return response.json()
    }
  }
}
