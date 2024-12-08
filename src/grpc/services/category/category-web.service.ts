import { createPromiseClient } from "@connectrpc/connect";
import { createGrpcWebTransport } from "@connectrpc/connect-web";

//Proto Services
import { CategoryService } from "@/grpc/proto/ablibrary/services/category_service/category_service_connect";

//Config
import { webHostname } from "@/grpc/config";

//WEB
const webTransport = createGrpcWebTransport({ baseUrl: webHostname });
export const categoryServiceClientWeb = createPromiseClient(
  CategoryService,
  webTransport
);
