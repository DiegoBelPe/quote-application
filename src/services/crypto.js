const API_URL = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD';


export async function getCryptoData() {
  const response = await fetch(API_URL);
  const data = await response.json();
  console.log("🚀 ~ file: crypto.js ~ line 7 ~ getCryptoData ~ data", data)
  
  return data;
}