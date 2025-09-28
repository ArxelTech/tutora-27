-- Fix security vulnerability: Remove public access to tutor applications
-- Drop the existing overly permissive SELECT policy
DROP POLICY "Users can view their own applications" ON public.tutor_applications;

-- Create a restrictive policy that only allows access to authenticated administrators
-- For now, this will block all SELECT access until proper authentication and roles are implemented
CREATE POLICY "Only authenticated administrators can view applications" 
ON public.tutor_applications 
FOR SELECT 
USING (false);

-- The INSERT policy can remain as is since it's for public form submissions