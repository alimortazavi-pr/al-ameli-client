import { createPromiseClient } from "@connectrpc/connect";
import { createGrpcTransport } from "@connectrpc/connect-node";

//Proto Services
import { CategoryService } from "@/grpc/proto/ablibrary/services/category_service/category_service_connect";

//Config
import { hostname } from "@/grpc/config";

//SERVER
const transport = createGrpcTransport({
  baseUrl: hostname,
  httpVersion: "2",
});
export const categoryServiceClient = createPromiseClient(CategoryService, transport);
