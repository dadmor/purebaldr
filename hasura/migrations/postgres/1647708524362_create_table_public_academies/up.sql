CREATE TABLE "public"."academies" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "name" text NOT NULL, "location" point, "address" text NOT NULL, "avatar_url" Text NOT NULL, "gallery" JSON, "bio" text NOT NULL, PRIMARY KEY ("id") );
CREATE EXTENSION IF NOT EXISTS pgcrypto;
