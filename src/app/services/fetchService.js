export async function fetchItems({ type, category } = {}) {
  const params = new URLSearchParams();

  if (type) params.set('type', type);
  if (category) params.set('category', category);

  const query = params.toString();
  const url = query ? `/api/items?${query}` : '/api/items';

  const res = await fetch(url, {
    cache: 'no-store', 
  });

  if (!res.ok) {
    throw new Error(`Eroare la preluarea elementelor (${res.status})`);
  }

  return res.json();
}