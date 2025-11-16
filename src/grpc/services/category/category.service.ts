import { createClient } from "@connectrpc/connect";
import { createGrpcTransport } from "@connectrpc/connect-node";

//Proto Services
import { CategoryService } from "@/grpc/proto/ablibrary/services/category_service/category_service_pb";

//Config
import { hostname } from "@/grpc/config";

//SERVER
const transport = createGrpcTransport({
  baseUrl: hostname,
});
export const categoryServiceClient = createClient(CategoryService, transport);
