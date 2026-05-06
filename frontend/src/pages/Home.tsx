import { useState } from 'react'
import Button from '../components/common/Button'

export default function Home() {
  const [entries, setEntries] = useState<any[]>([])
  const [loading, setLoading] = useState(false)

  const fetchEntries = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/v1/entries')
      const data = await response.json()
      setEntries(data)
    } catch (error) {
      console.error('Failed to fetch entries:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <h2>Journal Entries</h2>
      <Button onClick={fetchEntries}>
        {loading ? 'Loading...' : 'Fetch Entries'}
      </Button>

      <div style={{ marginTop: '20px' }}>
        {entries.length === 0 ? (
          <p>No entries yet. Start writing!</p>
        ) : (
          <ul>
            {entries.map((entry) => (
              <li key={entry.id}>
                <h3>{entry.title}</h3>
                <p>{entry.content}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
