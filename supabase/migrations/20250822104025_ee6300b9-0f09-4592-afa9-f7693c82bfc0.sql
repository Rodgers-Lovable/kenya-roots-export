-- Create articles table for the Insights/Blog section
CREATE TABLE public.articles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  excerpt TEXT,
  cover_image TEXT,
  content TEXT,
  category TEXT,
  tags TEXT[] DEFAULT '{}',
  author TEXT DEFAULT 'Admin',
  published_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  status TEXT DEFAULT 'published' CHECK (status IN ('draft', 'published'))
);

-- Enable Row Level Security
ALTER TABLE public.articles ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access to published articles
CREATE POLICY "Articles are publicly readable when published" 
ON public.articles 
FOR SELECT 
USING (status = 'published');

-- Create index for better performance on common queries
CREATE INDEX idx_articles_category ON public.articles(category);
CREATE INDEX idx_articles_published_at ON public.articles(published_at DESC);
CREATE INDEX idx_articles_slug ON public.articles(slug);
CREATE INDEX idx_articles_tags ON public.articles USING GIN(tags);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_articles_updated_at
BEFORE UPDATE ON public.articles
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample articles
INSERT INTO public.articles (title, slug, excerpt, cover_image, content, category, tags) VALUES
('The Future of Kenyan Coffee', 'future-of-kenyan-coffee', 'Exploring sustainable farming practices and technology adoption in Kenya''s coffee regions.', '/api/placeholder/600/400', 'Kenya''s coffee industry stands at a crossroads of tradition and innovation. As climate change presents new challenges, farmers are adopting sustainable practices and embracing technology to ensure the future of this vital crop.

## Sustainable Farming Practices

Modern Kenyan coffee farmers are implementing water conservation techniques, organic farming methods, and shade-grown cultivation to protect both their crops and the environment.

## Technology Integration

From mobile apps for crop monitoring to precision agriculture tools, technology is revolutionizing how coffee is grown and processed in Kenya.', 'Sustainability', ARRAY['farming', 'technology', 'sustainability']),

('Climate Resilient Coffee Varieties', 'climate-resilient-coffee-varieties', 'How new coffee varietals are helping farmers adapt to changing weather patterns.', '/api/placeholder/600/400', 'Climate change is forcing coffee farmers to rethink their approach to cultivation. New resistant varieties are emerging as a solution.

## The Challenge

Rising temperatures and unpredictable rainfall patterns are threatening traditional coffee growing regions across Kenya.

## The Solution

Research institutions are developing climate-resilient coffee varieties that can withstand extreme weather while maintaining quality.', 'Research', ARRAY['climate', 'varieties', 'research']),

('Direct Trade: Building Farmer Relationships', 'direct-trade-farmer-relationships', 'The importance of direct relationships between coffee buyers and Kenyan farmers.', '/api/placeholder/600/400', 'Direct trade relationships are transforming the coffee industry by ensuring fair compensation and sustainable practices.

## Benefits for Farmers

Direct trade eliminates middlemen, ensuring farmers receive fair prices for their premium coffee beans.

## Quality Assurance

Direct relationships allow for better quality control and traceability from farm to cup.', 'Trade', ARRAY['trade', 'farmers', 'relationships']),

('Processing Methods and Quality', 'processing-methods-quality', 'Understanding how different processing methods affect coffee flavor profiles.', '/api/placeholder/600/400', 'The way coffee is processed after harvest significantly impacts its final flavor profile and quality.

## Washed Process

The traditional washed process produces clean, bright flavors that highlight the coffee''s inherent characteristics.

## Natural Process

Natural processing creates more complex, fruity flavors but requires careful monitoring to prevent defects.', 'Processing', ARRAY['processing', 'quality', 'flavor']),

('Market Trends 2024', 'market-trends-2024', 'Current trends shaping the global coffee market and their impact on Kenyan producers.', '/api/placeholder/600/400', 'The global coffee market continues to evolve, presenting both opportunities and challenges for Kenyan producers.

## Specialty Coffee Growth

The specialty coffee segment continues to grow, creating opportunities for premium Kenyan coffees.

## Sustainability Focus

Consumers increasingly demand sustainably produced coffee, aligning with Kenya''s environmental initiatives.', 'Market', ARRAY['market', 'trends', 'specialty']);