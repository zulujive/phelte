// svelte_app/src/api.js
export async function fetchData() {
    const response = await fetch('/api/data');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  }
  