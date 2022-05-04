alter table "public"."users"
  add constraint "users_academy_id_fkey"
  foreign key ("academy_id")
  references "public"."academies"
  ("id") on update cascade on delete cascade;
