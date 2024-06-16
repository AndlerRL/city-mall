export default {
    "scalars": [
        0,
        2,
        4,
        6,
        7,
        9,
        11,
        12,
        14,
        16,
        18,
        21,
        23,
        26,
        28,
        30
    ],
    "types": {
        "BigFloat": {},
        "BigFloatFilter": {
            "eq": [
                0
            ],
            "gt": [
                0
            ],
            "gte": [
                0
            ],
            "in": [
                0
            ],
            "is": [
                11
            ],
            "lt": [
                0
            ],
            "lte": [
                0
            ],
            "neq": [
                0
            ],
            "__typename": [
                26
            ]
        },
        "BigInt": {},
        "BigIntFilter": {
            "eq": [
                2
            ],
            "gt": [
                2
            ],
            "gte": [
                2
            ],
            "in": [
                2
            ],
            "is": [
                11
            ],
            "lt": [
                2
            ],
            "lte": [
                2
            ],
            "neq": [
                2
            ],
            "__typename": [
                26
            ]
        },
        "Boolean": {},
        "BooleanFilter": {
            "eq": [
                4
            ],
            "is": [
                11
            ],
            "__typename": [
                26
            ]
        },
        "Cursor": {},
        "Date": {},
        "DateFilter": {
            "eq": [
                7
            ],
            "gt": [
                7
            ],
            "gte": [
                7
            ],
            "in": [
                7
            ],
            "is": [
                11
            ],
            "lt": [
                7
            ],
            "lte": [
                7
            ],
            "neq": [
                7
            ],
            "__typename": [
                26
            ]
        },
        "Datetime": {},
        "DatetimeFilter": {
            "eq": [
                9
            ],
            "gt": [
                9
            ],
            "gte": [
                9
            ],
            "in": [
                9
            ],
            "is": [
                11
            ],
            "lt": [
                9
            ],
            "lte": [
                9
            ],
            "neq": [
                9
            ],
            "__typename": [
                26
            ]
        },
        "FilterIs": {},
        "Float": {},
        "FloatFilter": {
            "eq": [
                12
            ],
            "gt": [
                12
            ],
            "gte": [
                12
            ],
            "in": [
                12
            ],
            "is": [
                11
            ],
            "lt": [
                12
            ],
            "lte": [
                12
            ],
            "neq": [
                12
            ],
            "__typename": [
                26
            ]
        },
        "ID": {},
        "IDFilter": {
            "eq": [
                14
            ],
            "__typename": [
                26
            ]
        },
        "Int": {},
        "IntFilter": {
            "eq": [
                16
            ],
            "gt": [
                16
            ],
            "gte": [
                16
            ],
            "in": [
                16
            ],
            "is": [
                11
            ],
            "lt": [
                16
            ],
            "lte": [
                16
            ],
            "neq": [
                16
            ],
            "__typename": [
                26
            ]
        },
        "JSON": {},
        "Mutation": {
            "deleteFromaccountCollection": [
                34,
                {
                    "filter": [
                        36
                    ],
                    "atMost": [
                        16,
                        "Int!"
                    ]
                }
            ],
            "insertIntoaccountCollection": [
                38,
                {
                    "objects": [
                        37,
                        "[accountInsertInput!]!"
                    ]
                }
            ],
            "updateaccountCollection": [
                41,
                {
                    "set": [
                        40,
                        "accountUpdateInput!"
                    ],
                    "filter": [
                        36
                    ],
                    "atMost": [
                        16,
                        "Int!"
                    ]
                }
            ],
            "__typename": [
                26
            ]
        },
        "Node": {
            "nodeId": [
                14
            ],
            "on_account": [
                32
            ],
            "__typename": [
                26
            ]
        },
        "Opaque": {},
        "OpaqueFilter": {
            "eq": [
                21
            ],
            "is": [
                11
            ],
            "__typename": [
                26
            ]
        },
        "OrderByDirection": {},
        "PageInfo": {
            "endCursor": [
                26
            ],
            "hasNextPage": [
                4
            ],
            "hasPreviousPage": [
                4
            ],
            "startCursor": [
                26
            ],
            "__typename": [
                26
            ]
        },
        "Query": {
            "accountCollection": [
                33,
                {
                    "first": [
                        16
                    ],
                    "last": [
                        16
                    ],
                    "before": [
                        6
                    ],
                    "after": [
                        6
                    ],
                    "offset": [
                        16
                    ],
                    "filter": [
                        36
                    ],
                    "orderBy": [
                        39,
                        "[accountOrderBy!]"
                    ]
                }
            ],
            "node": [
                20,
                {
                    "nodeId": [
                        14,
                        "ID!"
                    ]
                }
            ],
            "__typename": [
                26
            ]
        },
        "String": {},
        "StringFilter": {
            "eq": [
                26
            ],
            "gt": [
                26
            ],
            "gte": [
                26
            ],
            "ilike": [
                26
            ],
            "in": [
                26
            ],
            "iregex": [
                26
            ],
            "is": [
                11
            ],
            "like": [
                26
            ],
            "lt": [
                26
            ],
            "lte": [
                26
            ],
            "neq": [
                26
            ],
            "regex": [
                26
            ],
            "startsWith": [
                26
            ],
            "__typename": [
                26
            ]
        },
        "Time": {},
        "TimeFilter": {
            "eq": [
                28
            ],
            "gt": [
                28
            ],
            "gte": [
                28
            ],
            "in": [
                28
            ],
            "is": [
                11
            ],
            "lt": [
                28
            ],
            "lte": [
                28
            ],
            "neq": [
                28
            ],
            "__typename": [
                26
            ]
        },
        "UUID": {},
        "UUIDFilter": {
            "eq": [
                30
            ],
            "in": [
                30
            ],
            "is": [
                11
            ],
            "neq": [
                30
            ],
            "__typename": [
                26
            ]
        },
        "account": {
            "nodeId": [
                14
            ],
            "id": [
                2
            ],
            "created_at": [
                9
            ],
            "email": [
                26
            ],
            "username": [
                26
            ],
            "last_session": [
                9
            ],
            "is_active": [
                4
            ],
            "__typename": [
                26
            ]
        },
        "accountConnection": {
            "edges": [
                35
            ],
            "pageInfo": [
                24
            ],
            "__typename": [
                26
            ]
        },
        "accountDeleteResponse": {
            "affectedCount": [
                16
            ],
            "records": [
                32
            ],
            "__typename": [
                26
            ]
        },
        "accountEdge": {
            "cursor": [
                26
            ],
            "node": [
                32
            ],
            "__typename": [
                26
            ]
        },
        "accountFilter": {
            "id": [
                3
            ],
            "created_at": [
                10
            ],
            "email": [
                27
            ],
            "username": [
                27
            ],
            "last_session": [
                10
            ],
            "is_active": [
                5
            ],
            "nodeId": [
                15
            ],
            "and": [
                36
            ],
            "or": [
                36
            ],
            "not": [
                36
            ],
            "__typename": [
                26
            ]
        },
        "accountInsertInput": {
            "created_at": [
                9
            ],
            "email": [
                26
            ],
            "username": [
                26
            ],
            "last_session": [
                9
            ],
            "is_active": [
                4
            ],
            "__typename": [
                26
            ]
        },
        "accountInsertResponse": {
            "affectedCount": [
                16
            ],
            "records": [
                32
            ],
            "__typename": [
                26
            ]
        },
        "accountOrderBy": {
            "id": [
                23
            ],
            "created_at": [
                23
            ],
            "email": [
                23
            ],
            "username": [
                23
            ],
            "last_session": [
                23
            ],
            "is_active": [
                23
            ],
            "__typename": [
                26
            ]
        },
        "accountUpdateInput": {
            "created_at": [
                9
            ],
            "email": [
                26
            ],
            "username": [
                26
            ],
            "last_session": [
                9
            ],
            "is_active": [
                4
            ],
            "__typename": [
                26
            ]
        },
        "accountUpdateResponse": {
            "affectedCount": [
                16
            ],
            "records": [
                32
            ],
            "__typename": [
                26
            ]
        }
    }
}