const API_URL = 'https://www.alphavantage.co/query'

class AlphaFetchClient {
  private apiKey: string

  constructor(apiKey: string) {
    this.apiKey = apiKey
  }

  async get<T>(queryParams?: Record<string, string>): Promise<T> {
    const queryString = new URLSearchParams({
      ...queryParams,
      apikey: this.apiKey,
    }).toString()
    const fullUrl = `${API_URL}?${queryString}`

    const response = await fetch(fullUrl)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }
    return response.json()
  }
}

export default AlphaFetchClient
