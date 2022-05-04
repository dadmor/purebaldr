export interface HasuraEvent<T> {
  event: Event<T>;
  created_at: string;
  id: string;
  delivery_info: DeliveryInfo;
  trigger: Trigger;
  table: Table;
}

interface Table {
  schema: string;
  name: string;
}

interface Trigger {
  name: string;
}

interface DeliveryInfo {
  max_retries: number;
  current_retry: number;
}

interface Event<T> {
  session_variables: SessionVariables;
  op: string;
  data: Data<T>;
  trace_context: TraceContext;
}

interface TraceContext {
  trace_id: string;
  span_id: string;
}

interface Data<T> {
  old?: T;
  new: T;
}

interface SessionVariables {
  'x-hasura-role': string;
  'x-hasura-user-id': string;
  'x-hasura-dancer-id'?: string;
  'x-hasura-academy-id'?: string;
}