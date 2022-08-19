import { createClient } from '@supabase/supabase-js'
import type Project from './models/projectModel'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

const supabase = createClient<Project>(supabaseUrl, supabaseAnonKey)

export default supabase
