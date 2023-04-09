export interface Ticket {
  id: number;
  username: string;
  ip_caller: string;
  ip_server: string;
  url_path_server: string;
  patient: string;
  hospital: string;
  department: string;
  description: string;
  valid: number;
}
