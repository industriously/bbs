import { IConnection } from "@nestia/fetcher";
import { HttpStatus } from "@nestjs/common";
import api from "@project/api";
import typia from "typia";

import { Util } from "@APP/test/internal/utils";
import { IArticle } from "@APP/types/IArticle";

const test = Util.assertResposne(api.functional.articles.getList);

export const test_get_article_list_successfully = async (
    connection: IConnection,
) =>
    test(connection, { skip: 5 })({
        status: HttpStatus.OK,
        success: true,
        assertBody: (input) => {
            const body = typia.assertEquals<IArticle.IPaginatedResponse>(input);
            if (body.data.length === 0) throw Error("article list is empty!");
        },
    });