import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://dgvjrfmisumjwjszxigo.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRndmpyZm1pc3Vtandqc3p4aWdvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE0ODY4NDIsImV4cCI6MjA4NzA2Mjg0Mn0.Hx1JDIrbc6LTbWUzp0nOV-ctQ6pcQ-DqGn6BV3LNvEY'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  },
})