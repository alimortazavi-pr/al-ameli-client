import { createPromiseClient } from "@connectrpc/connect";
import { createGrpcWebTransport } from "@connectrpc/connect-web";

//Proto Services
import { BookService } from "@/grpc/proto/ablibrary/services/book_service/book_service_connect";

//Config
import { webHostname } from "@/grpc/config";

//WEB
const webTransport = createGrpcWebTransport({ baseUrl: webHostname });
export const bookServiceClientWeb = createPromiseClient(
  BookService,
  webTransport
);
