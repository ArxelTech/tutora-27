-- Enable public access to insert contact form submissions
CREATE POLICY "Anyone can submit contact form"
ON public.contact
FOR INSERT
TO anon, authenticated
WITH CHECK (true);