import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lugrlvjrlkssdaybpdal.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx1Z3JsdmpybGtzc2RheWJwZGFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI4OTQxNzcsImV4cCI6MjAwODQ3MDE3N30.YuuuRxEnVu7AKerfkkr7OxB_8Mqn3Nt3m9ntOwud6YA';

export const supabase = createClient(supabaseUrl, supabaseKey);
