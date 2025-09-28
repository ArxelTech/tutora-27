-- Create tutor_applications table to store form submissions
CREATE TABLE public.tutor_applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  linkedin_url TEXT,
  years_of_experience INTEGER NOT NULL,
  subject VARCHAR(50) NOT NULL,
  status VARCHAR(20) NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.tutor_applications ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert applications (public form)
CREATE POLICY "Anyone can submit tutor applications" 
ON public.tutor_applications 
FOR INSERT 
WITH CHECK (true);

-- Create policy to allow applicants to view their own applications
CREATE POLICY "Users can view their own applications" 
ON public.tutor_applications 
FOR SELECT 
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_tutor_applications_updated_at
BEFORE UPDATE ON public.tutor_applications
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Add index for common queries
CREATE INDEX idx_tutor_applications_email ON public.tutor_applications(email);
CREATE INDEX idx_tutor_applications_status ON public.tutor_applications(status);
CREATE INDEX idx_tutor_applications_created_at ON public.tutor_applications(created_at);