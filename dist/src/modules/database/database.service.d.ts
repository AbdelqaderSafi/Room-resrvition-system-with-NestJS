import { OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "generated/prisma/client";
import { PaginationQueryType, PaginationResponseMetaDataType } from "src/types/util.types";
export declare class DatabaseService extends PrismaClient implements OnModuleInit {
    constructor();
    onModuleInit(): Promise<void>;
    handleQueryPagination(query: PaginationQueryType): {
        skip: number;
        take: number;
        page: number;
    };
    formatPaginationResponse(args: {
        page: number;
        count: number;
        limit: number;
    }): PaginationResponseMetaDataType;
}
