-- Create catalog items table for coffee offerings
CREATE TABLE public.catalog_items (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  region TEXT NOT NULL,
  variety TEXT NOT NULL,
  processing_method TEXT NOT NULL,
  grade TEXT NOT NULL,
  flavor_notes TEXT[] NOT NULL DEFAULT '{}',
  description TEXT,
  image_url TEXT,
  altitude TEXT,
  farm_details TEXT,
  is_microlot BOOLEAN NOT NULL DEFAULT false,
  availability_status TEXT NOT NULL DEFAULT 'available',
  seasonal_notes TEXT,
  price_per_kg DECIMAL(10,2),
  minimum_order_kg INTEGER,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.catalog_items ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access (catalog is public facing)
CREATE POLICY "Catalog items are publicly readable" 
ON public.catalog_items 
FOR SELECT 
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_catalog_items_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_catalog_items_updated_at
  BEFORE UPDATE ON public.catalog_items
  FOR EACH ROW
  EXECUTE FUNCTION public.update_catalog_items_updated_at();

-- Insert sample catalog data
INSERT INTO public.catalog_items (name, slug, region, variety, processing_method, grade, flavor_notes, description, altitude, is_microlot, seasonal_notes) VALUES
('Kenya AA Nyeri Washed', 'kenya-aa-nyeri-washed', 'Nyeri', 'SL28, SL34', 'Washed', 'AA', '{"Black currant", "Wine-like", "Bright acidity"}', 'Premium AA grade coffee from the renowned Nyeri region, known for its bright acidity and wine-like characteristics.', '1,500-2,100m', false, 'Available March-September'),
('Kenya AB Kirinyaga Natural', 'kenya-ab-kirinyaga-natural', 'Kirinyaga', 'SL28, Ruiru 11', 'Natural', 'AB', '{"Fruity", "Berry", "Sweet"}', 'Naturally processed AB grade from Kirinyaga, offering intense fruit flavors and sweetness.', '1,400-1,900m', false, 'Limited seasonal availability'),
('Kenya PB Muranga Honey', 'kenya-pb-muranga-honey', 'Muranga', 'SL28', 'Honey', 'PB', '{"Caramel", "Chocolate", "Balanced"}', 'Peaberry beans processed using honey method, creating unique caramel and chocolate notes.', '1,600-2,000m', true, 'Available June-October'),
('Kenya AA+ Microlot Embu', 'kenya-aa-microlot-embu', 'Embu', 'SL28', 'Washed', 'AA+', '{"Floral", "Citrus", "Complex"}', 'Exclusive microlot from single estate in Embu, carefully selected for exceptional cup quality.', '1,800-2,200m', true, 'Limited quantities - Pre-order only'),
('Kenya AB Kisii Washed', 'kenya-ab-kisii-washed', 'Kisii', 'SL34, Batian', 'Washed', 'AB', '{"Tea-like", "Lemon", "Clean"}', 'Clean and bright AB grade from the emerging Kisii region, known for its tea-like characteristics.', '1,500-1,800m', false, 'Year-round availability'),
('Kenya C Grade Cooperative Blend', 'kenya-c-cooperative-blend', 'Multi-Region', 'Mixed Varieties', 'Washed', 'C', '{"Mild", "Nutty", "Smooth"}', 'Quality C grade blend from multiple cooperatives, perfect for commercial roasters.', '1,200-1,600m', false, 'Consistent supply year-round');