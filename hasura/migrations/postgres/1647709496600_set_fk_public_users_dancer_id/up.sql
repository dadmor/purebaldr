alter table "public"."users"
  add constraint "users_dancer_id_fkey"
  foreign key ("dancer_id")
  references "public"."dancers"
  ("id") on update cascade on delete cascade;
