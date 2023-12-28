export interface messageErrorBFF {
  code?: number;
  message: messageMessage["message"];
}

interface messageMessage {
  message: string;
}
