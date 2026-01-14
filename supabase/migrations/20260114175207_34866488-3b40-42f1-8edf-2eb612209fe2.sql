
-- Add RLS policies for catalog_items to restrict write operations to admins only

CREATE POLICY "Admins can insert catalog items"
ON public.catalog_items
FOR INSERT
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update catalog items"
ON public.catalog_items
FOR UPDATE
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete catalog items"
ON public.catalog_items
FOR DELETE
USING (public.has_role(auth.uid(), 'admin'));
