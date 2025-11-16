import { createClient } from "@connectrpc/connect";
import { createGrpcTransport } from "@connectrpc/connect-node";

//Proto Services
import { BookService } from "@/grpc/proto/ablibrary/services/book_service/book_service_pb";

//Config
import { hostname } from "@/grpc/config";

//SERVER
const transport = createGrpcTransport({
  baseUrl: hostname,
});
export const bookServiceClient = createClient(BookService, transport);
