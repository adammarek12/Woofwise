const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const apiKey = Deno.env.get('ANTHROPIC_API_KEY');
    if (!apiKey) {
      throw new Error('ANTHROPIC_API_KEY is not configured. Add it in Project Settings → Secrets.');
    }

    const { message, history = [] } = await req.json();

    if (!message || typeof message !== 'string') {
      throw new Error('Missing or invalid "message" field.');
    }

    const messages = [
      ...history.filter(
        (m: { role: string; content: string }) =>
          m && typeof m.content === 'string' && (m.role === 'user' || m.role === 'assistant')
      ),
      { role: 'user', content: message },
    ];

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        model: 'claude-3-5-sonnet-20241022',
        max_tokens: 1024,
        system:
          'You are WoofWise Claude, a compassionate and practical dog-training coach. You specialize in positive-reinforcement, leash-free recall, crate comfort, rescue-dog trust building, and family-dog obedience. Keep answers concise, actionable, and encouraging. Never recommend harsh corrections. When relevant, suggest a next small step the owner can practice today.',
        messages,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error?.message || `Anthropic API returned ${response.status}`);
    }

    const reply = data.content?.[0]?.text;
    if (!reply) {
      throw new Error('Unexpected response format from Anthropic.');
    }

    return new Response(JSON.stringify({ reply }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
