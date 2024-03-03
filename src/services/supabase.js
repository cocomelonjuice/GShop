import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://gizwpeatbfldniwqrmel.supabase.co';
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdpendwZWF0YmZsZG5pd3FybWVsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg3NzU4MzIsImV4cCI6MjAyNDM1MTgzMn0.U237IDZsOkU_h_uFtLStdLcxwUMhvrFhIsVRKgU0G5I";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;