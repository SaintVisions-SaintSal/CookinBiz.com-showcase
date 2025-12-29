-- SaintSal™ Database Fix: Add affiliate_code to profiles
-- This script adds the missing affiliate_code column to profiles table

-- Step 1: Add affiliate_code column to profiles if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_schema = 'public' 
    AND table_name = 'profiles' 
    AND column_name = 'affiliate_code'
  ) THEN
    ALTER TABLE public.profiles ADD COLUMN affiliate_code TEXT UNIQUE;
  END IF;
END $$;

-- Step 2: Create index on affiliate_code if it doesn't exist
CREATE INDEX IF NOT EXISTS idx_profiles_affiliate_code ON public.profiles(affiliate_code);

-- Step 3: Drop existing trigger if it exists (to avoid conflicts)
DROP TRIGGER IF EXISTS on_profile_created_track_referral ON public.profiles;
DROP FUNCTION IF EXISTS handle_new_profile_referral() CASCADE;

-- Step 4: Create the trigger function to track referrals
CREATE OR REPLACE FUNCTION handle_new_profile_referral()
RETURNS TRIGGER AS $$
DECLARE
  v_affiliate_id UUID;
BEGIN
  -- Only process if referred_by is set
  IF NEW.referred_by IS NOT NULL AND NEW.referred_by != '' THEN
    -- Find the affiliate by their code
    SELECT id INTO v_affiliate_id
    FROM public.affiliates
    WHERE affiliate_code = NEW.referred_by
    AND is_active = true;
    
    -- If affiliate found, increment their referral count
    IF v_affiliate_id IS NOT NULL THEN
      UPDATE public.affiliates
      SET total_referrals = COALESCE(total_referrals, 0) + 1,
          updated_at = NOW()
      WHERE id = v_affiliate_id;
    END IF;
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Step 5: Create the trigger
CREATE TRIGGER on_profile_created_track_referral
  AFTER INSERT ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION handle_new_profile_referral();

-- Step 6: Grant necessary permissions
GRANT USAGE ON SCHEMA public TO authenticated;
GRANT SELECT, INSERT, UPDATE ON public.profiles TO authenticated;
GRANT SELECT ON public.affiliates TO authenticated;
