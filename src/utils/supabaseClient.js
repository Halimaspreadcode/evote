import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vhjbknqggqbtbwypebao.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZoamJrbnFnZ3FidGJ3eXBlYmFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY5MDE0MjIsImV4cCI6MjAzMjQ3NzQyMn0.4SgStGSYt4qkASRSq-TVP8kqY9hlJmf4yQLX95R6vYo';

export const supabase = createClient(supabaseUrl, supabaseKey);
