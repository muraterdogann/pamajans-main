import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request) {
  const body = await request.json();

  try {
    const response = await axios({
      method: 'POST',
      url: process.env.NEXT_PUBLIC_BREVO_API_URL,
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        'api-key': process.env.NEXT_PUBLIC_BREVO_API_KEY,
      },
      data: body,
    });

    // Başarılı yanıt durumunda özel mesaj döndürme
    return NextResponse.json({ message: "Başvuru başarıyla alındı" });
  } catch (error) {
    console.error('Error in API call:', error.response ? error.response.data : error.message);
    return NextResponse.json({ error: error.response ? error.response.data : error.message }, { status: error.response?.status || 500 });
  }
}
