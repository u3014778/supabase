// lib/supabase.ts
import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Supabase client initialization
//const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseUrl = 'https://juxdmkjcmbgerbybwmer.supabase.co';
//const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp1eGRta2pjbWJnZXJieWJ3bWVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE3MjgwMDUsImV4cCI6MjAzNzMwNDAwNX0.9o_XvQfoSEFKj3TnQCIXvMYl02s_q90TYnU8BpjFOdg';
const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey);

export default supabase;