// src/api/supabaseClient.js
import { createClient } from '@supabase/supabase-js'

// pulled from Vite’s env (restart dev server after any .env change)
const SUPA_URL = import.meta.env.VITE_SUPABASE_URL
const SUPA_KEY = import.meta.env.VITE_SUPABASE_KEY

export const supabase = createClient(SUPA_URL, SUPA_KEY)
