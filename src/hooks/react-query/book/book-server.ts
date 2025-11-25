import { QueryClient } from "@tanstack/react-query";

//Types
import { IBookRequest } from "@/common/interfaces";

//gRPC
import { bookServiceClient } from "@/grpc/services/book/book.service";
import { toBinary } from "@bufbuild/protobuf";
import { ContentsResponseSchema } from "@/grpc/proto/ablibrary/services/book_service/book_service_pb";

export const useGetBookServer = async ({
  queryData,
  queryClient,
}: {
  queryData: IBookRequest;
  queryClient: QueryClient;
}) => {
  //Variables
  const { bookId } = queryData;

  await queryClient.prefetchQuery({
    queryKey: ["selected-book", JSON.stringify({ bookId })],

    queryFn: async () => {
      const res = await bookServiceClient.contents({
        bookId: bookId,
      });

      const response = toBinary(ContentsResponseSchema, res);

      return {
        response: response,
      };
    },
  });

  return queryClient;
};
