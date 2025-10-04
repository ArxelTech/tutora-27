-- Update RLS policy to allow public viewing of approved tutor applications
DROP POLICY "Only authenticated administrators can view applications" ON public.tutor_applications;

-- Create policy to allow public viewing of approved applications only
CREATE POLICY "Public can view approved applications" 
ON public.tutor_applications 
FOR SELECT 
USING (status = 'approved');