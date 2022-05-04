CREATE TABLE "public"."dislikes" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "giver_id" UUID NOT NULL, "reciever_id" UUID NOT NULL, PRIMARY KEY ("id") , FOREIGN KEY ("giver_id") REFERENCES "public"."users"("id") ON UPDATE cascade ON DELETE cascade, FOREIGN KEY ("reciever_id") REFERENCES "public"."users"("id") ON UPDATE cascade ON DELETE cascade);
CREATE EXTENSION IF NOT EXISTS pgcrypto;
