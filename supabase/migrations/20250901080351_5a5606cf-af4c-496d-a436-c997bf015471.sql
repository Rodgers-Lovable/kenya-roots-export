-- Fix security warning: Set search_path for function
CREATE OR REPLACE FUNCTION public.update_catalog_items_updated_at()
RETURNS TRIGGER 
LANGUAGE plpgsql
SET search_path TO 'public'
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;