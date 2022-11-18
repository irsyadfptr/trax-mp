export default function fetcher(url: string, data = undefined) {
  return fetch(`${window.location.origin}/api/${url}`, {
    method: data ? 'POST' : 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((r) => {
    if (r.status >= 400 && r.status < 200) {
      throw new Error('An error occurred while fetching the data.');
    }
    return r.json()});
}