CREATE TABLE "public"."likes" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "giver_id" uuid NOT NULL, "receiver_id" uuid NOT NULL, PRIMARY KEY ("id") , FOREIGN KEY ("giver_id") REFERENCES "public"."users"("id") ON UPDATE cascade ON DELETE cascade, FOREIGN KEY ("receiver_id") REFERENCES "public"."users"("id") ON UPDATE cascade ON DELETE cascade);
CREATE EXTENSION IF NOT EXISTS pgcrypto;
