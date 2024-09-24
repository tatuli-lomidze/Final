export async function handleAuth(action, user) {
    const url = `https://academyofdigitalindustriesbackend.onrender.com/api/v1/auth/${action}`
    const resp = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const result = await resp.json()
    if (resp.ok) {
      return result
    }
    throw new Error(result.message)
  }
  
