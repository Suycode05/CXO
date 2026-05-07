import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mvhptjmouxznfmjgmhbn.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im12aHB0am1vdXh6bmZtamdtaGJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ0NzcwMzMsImV4cCI6MjA5MDA1MzAzM30.I0StlJTkxjkRQuN0BI0uziGPWlNnHdp7VX2p0B2Mowc';

const supabase = createClient(supabaseUrl, supabaseKey);

async function run() {
  const { data, error } = await supabase
    .from("company_applications")
    .insert([
      {
        company_name: 'Test',
        website: 'https://test.com',
        industry: 'IT',
        org_size: '1-10',
        org_type: 'Startup',
        tagline: 'Test',
        about: 'Test test test test test test test test test test test test test test',
        logo_url: '',
        coi_url: '',
        email: 'test@test.com',
        admin_name: 'Test',
        admin_email: 'test2@test.com',
        gstin: '29ABCDE1234F2Z5',
        cin_number: 'U12345MH2024PTC123456',
        contact_number: '1234567890',
        linkedin: 'https://linkedin.com/company/test',
        github: 'https://github.com/test',
        company_age: '1-3 Years'
      },
    ]);
  console.log("Error:", error);
}

run();
