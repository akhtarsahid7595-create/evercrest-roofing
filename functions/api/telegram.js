export async function onRequestPost(context) {
  try {
    const data = await context.request.json();
    const { name, phone, service, location, notes } = data || {};

    const telegramText = 
`🚨 NEW DUBLIN ROOFING LEAD! 🚨

👤 Name: ${name || 'Not provided'}
📞 Phone: ${phone || 'Not provided'}
🛠️ Service: ${service || 'Roof Repairs & Replacement'}
📍 Location: ${location || 'Dublin'}
📝 Notes: ${notes || 'None provided'}

⏰ Time: ${new Date().toLocaleString('en-IE', { timeZone: 'Europe/Dublin' })}`;

    const response = await fetch('https://api.telegram.org/bot9216010977:AAHtrxm4fAc9IIGr56V9zDSw-400zEb_n4Q/sendMessage', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: '5235553652',
        text: telegramText
      })
    });

    const resJson = await response.json();

    return new Response(JSON.stringify({ success: true, telegram: resJson }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  } catch (err) {
    return new Response(JSON.stringify({ success: false, error: err.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  }
}

export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  });
}
