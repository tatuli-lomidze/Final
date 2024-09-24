const url = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes';
const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '098cee5a79mshe1e8af3ad03842ep19344ejsn733a3973492d',
    'x-rapidapi-host': 'tasty.p.rapidapi.com'
  }
};

const fetchData = async () => {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error('Fetch error:', error);
  }
};

fetchData();
