/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getInfo = /* GraphQL */ `
  query GetInfo($id: ID!) {
    getInfo(id: $id) {
      id
      name
      date
      address1
      address2
      city
      state
      zipCode
      country
      loggedInUserEmail
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listInfos = /* GraphQL */ `
  query ListInfos(
    $filter: ModelInfoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        date
        address1
        address2
        city
        state
        zipCode
        country
        loggedInUserEmail
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getVitals = /* GraphQL */ `
  query GetVitals($id: ID!) {
    getVitals(id: $id) {
      id
      weightChange
      headache
      pain
      nippleDischarge
      highBloodPressure
      palpitation
      constipation
      diarrhea
      dysuria
      excessiveUrination
      unusualColor
      infertility
      recentPregnancy
      venerealDecease
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listVitals = /* GraphQL */ `
  query ListVitals(
    $filter: ModelVitalsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVitals(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        weightChange
        headache
        pain
        nippleDischarge
        highBloodPressure
        palpitation
        constipation
        diarrhea
        dysuria
        excessiveUrination
        unusualColor
        infertility
        recentPregnancy
        venerealDecease
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getEncounter = /* GraphQL */ `
  query GetEncounter($id: ID!) {
    getEncounter(id: $id) {
      id
      office
      visitType
      procedure
      cycle
      provider
      encounterDate
      encounterType
      name
      sex
      phoneNumber
      visitorId
      visitorDate
      address
      HPI
      ROS
      orders
      procedures
      plan
      diagnosisCode
      billingCode
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listEncounters = /* GraphQL */ `
  query ListEncounters(
    $filter: ModelEncounterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEncounters(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        office
        visitType
        procedure
        cycle
        provider
        encounterDate
        encounterType
        name
        sex
        phoneNumber
        visitorId
        visitorDate
        address
        HPI
        ROS
        orders
        procedures
        plan
        diagnosisCode
        billingCode
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getConversation = /* GraphQL */ `
  query GetConversation($id: ID!, $screen: String!) {
    getConversation(id: $id, screen: $screen) {
      id
      screen
      date
      conversation {
        id
        statements {
          completed_statement
          partial_statement
          speaker_id
          speaker_name
          __typename
        }
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listConversations = /* GraphQL */ `
  query ListConversations(
    $id: ID
    $screen: ModelStringKeyConditionInput
    $filter: ModelConversationFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listConversations(
      id: $id
      screen: $screen
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        screen
        date
        conversation {
          id
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
