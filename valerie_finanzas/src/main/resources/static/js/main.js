
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabaseUrl= 'https://hlftwkgrqlklpyaktiqj.supabase.co'
const supabaseKey= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhsZnR3a2dycWxrbHB5YWt0aXFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAxOTI4NjcsImV4cCI6MjA2NTc2ODg2N30.9-COT-f3RDeHtOoo26uBoZV2xqC7uzBa85ZH5CXYB8E'
const supabase = createClient(supabaseUrl, supabaseKey);

console.log(supabase)