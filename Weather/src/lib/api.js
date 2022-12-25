

export async function getTelAviv() {
  const response = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/215854?apikey=qEchxDSAfDVslu7kfOOpCtVHW7CZfseJ`);
  
  const data = await response.json();

  //Error handling:
  if (!response.ok) {
    throw new Error(data.message || 'API EXPIRED.');
  }

  return data;
}

export async function getFiveDays() {
  const response = await fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/215854?apikey=qEchxDSAfDVslu7kfOOpCtVHW7CZfseJ`);
  
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'API EXPIRED.');
  }

  return data;
}
