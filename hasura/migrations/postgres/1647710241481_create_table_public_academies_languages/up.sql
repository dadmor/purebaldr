CREATE TABLE "public"."academies_languages" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "academy_id" uuid NOT NULL, "language_id" uuid NOT NULL, PRIMARY KEY ("id") , FOREIGN KEY ("academy_id") REFERENCES "public"."academies"("id") ON UPDATE cascade ON DELETE cascade, FOREIGN KEY ("language_id") REFERENCES "public"."languages"("id") ON UPDATE cascade ON DELETE cascade);
CREATE EXTENSION IF NOT EXISTS pgcrypto;
