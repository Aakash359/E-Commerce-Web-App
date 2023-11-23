import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://gambsdvatfdzjbnkjspc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdhbWJzZHZhdGZkempibmtqc3BjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg4NDA4MDIsImV4cCI6MjAxNDQxNjgwMn0.SsxojrvlnNk6n-wDbuH1AvXaSZ65j4tnMlFAfy2HiMM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
