export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, phone, service, location, notes } = req.body || {};

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
    return res.status(200).json({ success: true, telegram: resJson });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
}
