import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://tjchvconjidblsoghoqc.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRqY2h2Y29uamlkYmxzb2dob3FjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkzMDkzMjMsImV4cCI6MjA2NDg4NTMyM30.Slurc1Asd0LDXpXFyCVIvCz-HdA1mRkEvNDlUoxCYUU';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
