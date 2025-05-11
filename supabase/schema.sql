-- supabase/schema.sql: WoofWise database schema

-- User profiles table
create table if not exists profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  first_name text,
  last_name text,
  created_at timestamp with time zone default now()
);

-- Dogs table
create table if not exists dogs (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null references auth.users(id) on delete cascade,
  name text not null,
  breed text,
  age integer,
  level text,
  profile_pic_url text
);

-- Lessons table
create table if not exists lessons (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  week_number integer not null,
  video_url text,
  text_content text,
  type text not null check (type in ('core', 'ongoing'))
);

-- User lessons progress
create table if not exists user_lessons (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null references auth.users(id) on delete cascade,
  dog_id uuid not null references dogs(id) on delete cascade,
  lesson_id uuid not null references lessons(id) on delete cascade,
  status text not null default 'in_progress',
  completed_at timestamp with time zone
);