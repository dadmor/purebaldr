CREATE TABLE "public"."academies_dance_styles" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "academy_id" uuid NOT NULL, "dance_style_id" uuid NOT NULL, PRIMARY KEY ("id") , FOREIGN KEY ("academy_id") REFERENCES "public"."academies"("id") ON UPDATE cascade ON DELETE cascade, FOREIGN KEY ("dance_style_id") REFERENCES "public"."dance_styles"("id") ON UPDATE cascade ON DELETE cascade);
CREATE EXTENSION IF NOT EXISTS pgcrypto;