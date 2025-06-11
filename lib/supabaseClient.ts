import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Initialize Supabase client if env vars are available, else stub for build-time
export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : ({
        // Stub methods to satisfy imports during build
        from: () => ({ select: async () => ({ data: [], error: null }) }),
        auth: {
          signUp: async () => ({ data: null, error: null }),
          signInWithPassword: async () => ({ data: null, error: null }),
          getUser: async () => ({ data: { user: null }, error: null }),
        },
      } as any);