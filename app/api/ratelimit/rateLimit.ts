import kv from './kv';

const requestPeriod = 32; // Belirli bir süre içinde izin verilen maksimum istek sayısı
const limitPeriod = 600000; // 10 dakika = 600000 milisaniye

export async function rateLimit(request: any): Promise<boolean> {
  const userIP = request.headers.get('x-real-ip') || request.headers.get('x-forwarded-for') || 'unknown';
  const currentTime = Date.now();

  let userRequestData = await kv.get<{ count: number, resetTime: number }>(userIP);

  if (!userRequestData) {
    userRequestData = { count: 0, resetTime: currentTime + limitPeriod };
    await kv.set(userIP, userRequestData);
  }

  if (currentTime > userRequestData.resetTime) {
    userRequestData = { count: 0, resetTime: currentTime + limitPeriod };
    await kv.set(userIP, userRequestData);
  }

  userRequestData.count++;

  if (userRequestData.count > requestPeriod) {
    return false; // Limit aşıldı
  }

  await kv.set(userIP, userRequestData);
  return true; // Limit aşılmadı
}
