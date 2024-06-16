// @ts-nocheck
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Scalars = {
    BigFloat: any,
    BigInt: any,
    Boolean: boolean,
    Cursor: any,
    Date: any,
    Datetime: any,
    Float: number,
    ID: string,
    Int: number,
    JSON: any,
    Opaque: any,
    String: string,
    Time: any,
    UUID: any,
}

export type FilterIs = 'NULL' | 'NOT_NULL'


/** The root type for creating and mutating data */
export interface Mutation {
    /** Deletes zero or more records from the `account` collection */
    deleteFromaccountCollection: accountDeleteResponse
    /** Adds one or more `account` records to the collection */
    insertIntoaccountCollection: (accountInsertResponse | null)
    /** Updates zero or more records in the `account` collection */
    updateaccountCollection: accountUpdateResponse
    __typename: 'Mutation'
}

export type Node = (account) & { __isUnion?: true }


/** Defines a per-field sorting order */
export type OrderByDirection = 'AscNullsFirst' | 'AscNullsLast' | 'DescNullsFirst' | 'DescNullsLast'

export interface PageInfo {
    endCursor: (Scalars['String'] | null)
    hasNextPage: Scalars['Boolean']
    hasPreviousPage: Scalars['Boolean']
    startCursor: (Scalars['String'] | null)
    __typename: 'PageInfo'
}


/** The root type for querying data */
export interface Query {
    /** A pagable collection of type `account` */
    accountCollection: (accountConnection | null)
    /** Retrieve a record by its `ID` */
    node: (Node | null)
    __typename: 'Query'
}

export interface account {
    /** Globally Unique Record Identifier */
    nodeId: Scalars['ID']
    id: Scalars['BigInt']
    created_at: Scalars['Datetime']
    email: (Scalars['String'] | null)
    username: Scalars['String']
    last_session: (Scalars['Datetime'] | null)
    is_active: (Scalars['Boolean'] | null)
    __typename: 'account'
}

export interface accountConnection {
    edges: accountEdge[]
    pageInfo: PageInfo
    __typename: 'accountConnection'
}

export interface accountDeleteResponse {
    /** Count of the records impacted by the mutation */
    affectedCount: Scalars['Int']
    /** Array of records impacted by the mutation */
    records: account[]
    __typename: 'accountDeleteResponse'
}

export interface accountEdge {
    cursor: Scalars['String']
    node: account
    __typename: 'accountEdge'
}

export interface accountInsertResponse {
    /** Count of the records impacted by the mutation */
    affectedCount: Scalars['Int']
    /** Array of records impacted by the mutation */
    records: account[]
    __typename: 'accountInsertResponse'
}

export interface accountUpdateResponse {
    /** Count of the records impacted by the mutation */
    affectedCount: Scalars['Int']
    /** Array of records impacted by the mutation */
    records: account[]
    __typename: 'accountUpdateResponse'
}


/** Boolean expression comparing fields on type "BigFloat" */
export interface BigFloatFilter {eq?: (Scalars['BigFloat'] | null),gt?: (Scalars['BigFloat'] | null),gte?: (Scalars['BigFloat'] | null),in?: (Scalars['BigFloat'][] | null),is?: (FilterIs | null),lt?: (Scalars['BigFloat'] | null),lte?: (Scalars['BigFloat'] | null),neq?: (Scalars['BigFloat'] | null)}


/** Boolean expression comparing fields on type "BigInt" */
export interface BigIntFilter {eq?: (Scalars['BigInt'] | null),gt?: (Scalars['BigInt'] | null),gte?: (Scalars['BigInt'] | null),in?: (Scalars['BigInt'][] | null),is?: (FilterIs | null),lt?: (Scalars['BigInt'] | null),lte?: (Scalars['BigInt'] | null),neq?: (Scalars['BigInt'] | null)}


/** Boolean expression comparing fields on type "Boolean" */
export interface BooleanFilter {eq?: (Scalars['Boolean'] | null),is?: (FilterIs | null)}


/** Boolean expression comparing fields on type "Date" */
export interface DateFilter {eq?: (Scalars['Date'] | null),gt?: (Scalars['Date'] | null),gte?: (Scalars['Date'] | null),in?: (Scalars['Date'][] | null),is?: (FilterIs | null),lt?: (Scalars['Date'] | null),lte?: (Scalars['Date'] | null),neq?: (Scalars['Date'] | null)}


/** Boolean expression comparing fields on type "Datetime" */
export interface DatetimeFilter {eq?: (Scalars['Datetime'] | null),gt?: (Scalars['Datetime'] | null),gte?: (Scalars['Datetime'] | null),in?: (Scalars['Datetime'][] | null),is?: (FilterIs | null),lt?: (Scalars['Datetime'] | null),lte?: (Scalars['Datetime'] | null),neq?: (Scalars['Datetime'] | null)}


/** Boolean expression comparing fields on type "Float" */
export interface FloatFilter {eq?: (Scalars['Float'] | null),gt?: (Scalars['Float'] | null),gte?: (Scalars['Float'] | null),in?: (Scalars['Float'][] | null),is?: (FilterIs | null),lt?: (Scalars['Float'] | null),lte?: (Scalars['Float'] | null),neq?: (Scalars['Float'] | null)}


/** Boolean expression comparing fields on type "ID" */
export interface IDFilter {eq?: (Scalars['ID'] | null)}


/** Boolean expression comparing fields on type "Int" */
export interface IntFilter {eq?: (Scalars['Int'] | null),gt?: (Scalars['Int'] | null),gte?: (Scalars['Int'] | null),in?: (Scalars['Int'][] | null),is?: (FilterIs | null),lt?: (Scalars['Int'] | null),lte?: (Scalars['Int'] | null),neq?: (Scalars['Int'] | null)}


/** The root type for creating and mutating data */
export interface MutationGenqlSelection{
    /** Deletes zero or more records from the `account` collection */
    deleteFromaccountCollection?: (accountDeleteResponseGenqlSelection & { __args?: {
    /** Restricts the mutation's impact to records matching the criteria */
    filter?: (accountFilter | null), 
    /** The maximum number of records in the collection permitted to be affected */
    atMost?: Scalars['Int']} })
    /** Adds one or more `account` records to the collection */
    insertIntoaccountCollection?: (accountInsertResponseGenqlSelection & { __args: {objects: accountInsertInput[]} })
    /** Updates zero or more records in the `account` collection */
    updateaccountCollection?: (accountUpdateResponseGenqlSelection & { __args: {
    /** Fields that are set will be updated for all records matching the `filter` */
    set: accountUpdateInput, 
    /** Restricts the mutation's impact to records matching the criteria */
    filter?: (accountFilter | null), 
    /** The maximum number of records in the collection permitted to be affected */
    atMost?: Scalars['Int']} })
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface NodeGenqlSelection{
    /** Retrieves a record by `ID` */
    nodeId?: boolean | number
    on_account?: accountGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression comparing fields on type "Opaque" */
export interface OpaqueFilter {eq?: (Scalars['Opaque'] | null),is?: (FilterIs | null)}

export interface PageInfoGenqlSelection{
    endCursor?: boolean | number
    hasNextPage?: boolean | number
    hasPreviousPage?: boolean | number
    startCursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The root type for querying data */
export interface QueryGenqlSelection{
    /** A pagable collection of type `account` */
    accountCollection?: (accountConnectionGenqlSelection & { __args?: {
    /** Query the first `n` records in the collection */
    first?: (Scalars['Int'] | null), 
    /** Query the last `n` records in the collection */
    last?: (Scalars['Int'] | null), 
    /** Query values in the collection before the provided cursor */
    before?: (Scalars['Cursor'] | null), 
    /** Query values in the collection after the provided cursor */
    after?: (Scalars['Cursor'] | null), 
    /** Skip n values from the after cursor. Alternative to cursor pagination. Backward pagination not supported. */
    offset?: (Scalars['Int'] | null), 
    /** Filters to apply to the results set when querying from the collection */
    filter?: (accountFilter | null), 
    /** Sort order to apply to the collection */
    orderBy?: (accountOrderBy[] | null)} })
    /** Retrieve a record by its `ID` */
    node?: (NodeGenqlSelection & { __args: {
    /** The record's `ID` */
    nodeId: Scalars['ID']} })
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression comparing fields on type "String" */
export interface StringFilter {eq?: (Scalars['String'] | null),gt?: (Scalars['String'] | null),gte?: (Scalars['String'] | null),ilike?: (Scalars['String'] | null),in?: (Scalars['String'][] | null),iregex?: (Scalars['String'] | null),is?: (FilterIs | null),like?: (Scalars['String'] | null),lt?: (Scalars['String'] | null),lte?: (Scalars['String'] | null),neq?: (Scalars['String'] | null),regex?: (Scalars['String'] | null),startsWith?: (Scalars['String'] | null)}


/** Boolean expression comparing fields on type "Time" */
export interface TimeFilter {eq?: (Scalars['Time'] | null),gt?: (Scalars['Time'] | null),gte?: (Scalars['Time'] | null),in?: (Scalars['Time'][] | null),is?: (FilterIs | null),lt?: (Scalars['Time'] | null),lte?: (Scalars['Time'] | null),neq?: (Scalars['Time'] | null)}


/** Boolean expression comparing fields on type "UUID" */
export interface UUIDFilter {eq?: (Scalars['UUID'] | null),in?: (Scalars['UUID'][] | null),is?: (FilterIs | null),neq?: (Scalars['UUID'] | null)}

export interface accountGenqlSelection{
    /** Globally Unique Record Identifier */
    nodeId?: boolean | number
    id?: boolean | number
    created_at?: boolean | number
    email?: boolean | number
    username?: boolean | number
    last_session?: boolean | number
    is_active?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface accountConnectionGenqlSelection{
    edges?: accountEdgeGenqlSelection
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface accountDeleteResponseGenqlSelection{
    /** Count of the records impacted by the mutation */
    affectedCount?: boolean | number
    /** Array of records impacted by the mutation */
    records?: accountGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface accountEdgeGenqlSelection{
    cursor?: boolean | number
    node?: accountGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface accountFilter {id?: (BigIntFilter | null),created_at?: (DatetimeFilter | null),email?: (StringFilter | null),username?: (StringFilter | null),last_session?: (DatetimeFilter | null),is_active?: (BooleanFilter | null),nodeId?: (IDFilter | null),
/** Returns true only if all its inner filters are true, otherwise returns false */
and?: (accountFilter[] | null),
/** Returns true if at least one of its inner filters is true, otherwise returns false */
or?: (accountFilter[] | null),
/** Negates a filter */
not?: (accountFilter | null)}

export interface accountInsertInput {created_at?: (Scalars['Datetime'] | null),email?: (Scalars['String'] | null),username?: (Scalars['String'] | null),last_session?: (Scalars['Datetime'] | null),is_active?: (Scalars['Boolean'] | null)}

export interface accountInsertResponseGenqlSelection{
    /** Count of the records impacted by the mutation */
    affectedCount?: boolean | number
    /** Array of records impacted by the mutation */
    records?: accountGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface accountOrderBy {id?: (OrderByDirection | null),created_at?: (OrderByDirection | null),email?: (OrderByDirection | null),username?: (OrderByDirection | null),last_session?: (OrderByDirection | null),is_active?: (OrderByDirection | null)}

export interface accountUpdateInput {created_at?: (Scalars['Datetime'] | null),email?: (Scalars['String'] | null),username?: (Scalars['String'] | null),last_session?: (Scalars['Datetime'] | null),is_active?: (Scalars['Boolean'] | null)}

export interface accountUpdateResponseGenqlSelection{
    /** Count of the records impacted by the mutation */
    affectedCount?: boolean | number
    /** Array of records impacted by the mutation */
    records?: accountGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


    const Mutation_possibleTypes: string[] = ['Mutation']
    export const isMutation = (obj?: { __typename?: any } | null): obj is Mutation => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMutation"')
      return Mutation_possibleTypes.includes(obj.__typename)
    }
    


    const Node_possibleTypes: string[] = ['account']
    export const isNode = (obj?: { __typename?: any } | null): obj is Node => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isNode"')
      return Node_possibleTypes.includes(obj.__typename)
    }
    


    const PageInfo_possibleTypes: string[] = ['PageInfo']
    export const isPageInfo = (obj?: { __typename?: any } | null): obj is PageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPageInfo"')
      return PageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const Query_possibleTypes: string[] = ['Query']
    export const isQuery = (obj?: { __typename?: any } | null): obj is Query => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isQuery"')
      return Query_possibleTypes.includes(obj.__typename)
    }
    


    const account_possibleTypes: string[] = ['account']
    export const isaccount = (obj?: { __typename?: any } | null): obj is account => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isaccount"')
      return account_possibleTypes.includes(obj.__typename)
    }
    


    const accountConnection_possibleTypes: string[] = ['accountConnection']
    export const isaccountConnection = (obj?: { __typename?: any } | null): obj is accountConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isaccountConnection"')
      return accountConnection_possibleTypes.includes(obj.__typename)
    }
    


    const accountDeleteResponse_possibleTypes: string[] = ['accountDeleteResponse']
    export const isaccountDeleteResponse = (obj?: { __typename?: any } | null): obj is accountDeleteResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isaccountDeleteResponse"')
      return accountDeleteResponse_possibleTypes.includes(obj.__typename)
    }
    


    const accountEdge_possibleTypes: string[] = ['accountEdge']
    export const isaccountEdge = (obj?: { __typename?: any } | null): obj is accountEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isaccountEdge"')
      return accountEdge_possibleTypes.includes(obj.__typename)
    }
    


    const accountInsertResponse_possibleTypes: string[] = ['accountInsertResponse']
    export const isaccountInsertResponse = (obj?: { __typename?: any } | null): obj is accountInsertResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isaccountInsertResponse"')
      return accountInsertResponse_possibleTypes.includes(obj.__typename)
    }
    


    const accountUpdateResponse_possibleTypes: string[] = ['accountUpdateResponse']
    export const isaccountUpdateResponse = (obj?: { __typename?: any } | null): obj is accountUpdateResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isaccountUpdateResponse"')
      return accountUpdateResponse_possibleTypes.includes(obj.__typename)
    }
    

export const enumFilterIs = {
   NULL: 'NULL' as const,
   NOT_NULL: 'NOT_NULL' as const
}

export const enumOrderByDirection = {
   AscNullsFirst: 'AscNullsFirst' as const,
   AscNullsLast: 'AscNullsLast' as const,
   DescNullsFirst: 'DescNullsFirst' as const,
   DescNullsLast: 'DescNullsLast' as const
}
