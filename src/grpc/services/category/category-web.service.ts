import { createClient } from "@connectrpc/connect";
import { createGrpcWebTransport } from "@connectrpc/connect-web";

//Proto Services
import { CategoryService } from "@/grpc/proto/ablibrary/services/category_service/category_service_pb";

//Config
import { webHostname } from "@/grpc/config";

//WEB
const webTransport = createGrpcWebTransport({ baseUrl: webHostname });
export const categoryServiceClientWeb = createClient(
  CategoryService,
  webTransport
);
