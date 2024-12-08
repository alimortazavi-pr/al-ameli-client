import { createPromiseClient } from "@connectrpc/connect";
import { createGrpcTransport } from "@connectrpc/connect-node";

//Proto Services
import { BookService } from "@/grpc/proto/ablibrary/services/book_service/book_service_connect";

//Config
import { hostname } from "@/grpc/config";

//SERVER
const transport = createGrpcTransport({
  baseUrl: hostname,
  httpVersion: "2",
});
export const bookServiceClient = createPromiseClient(BookService, transport);
