CREATE TABLE "public"."dancers" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "first_name" Text NOT NULL, "last_name" Text NOT NULL, "birth_date" date NOT NULL, "avatar" Text NOT NULL, "profile_type" text NOT NULL DEFAULT 'dancer', "is_visible_on_map" boolean NOT NULL DEFAULT true, "bio" Text NOT NULL, "height" integer NOT NULL, PRIMARY KEY ("id") );
CREATE EXTENSION IF NOT EXISTS pgcrypto;
