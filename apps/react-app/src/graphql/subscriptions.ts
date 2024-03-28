/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateInfo = /* GraphQL */ `
  subscription OnCreateInfo($filter: ModelSubscriptionInfoFilterInput) {
    onCreateInfo(filter: $filter) {
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
export const onUpdateInfo = /* GraphQL */ `
  subscription OnUpdateInfo($filter: ModelSubscriptionInfoFilterInput) {
    onUpdateInfo(filter: $filter) {
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
export const onDeleteInfo = /* GraphQL */ `
  subscription OnDeleteInfo($filter: ModelSubscriptionInfoFilterInput) {
    onDeleteInfo(filter: $filter) {
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
export const onCreateVitals = /* GraphQL */ `
  subscription OnCreateVitals($filter: ModelSubscriptionVitalsFilterInput) {
    onCreateVitals(filter: $filter) {
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
export const onUpdateVitals = /* GraphQL */ `
  subscription OnUpdateVitals($filter: ModelSubscriptionVitalsFilterInput) {
    onUpdateVitals(filter: $filter) {
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
export const onDeleteVitals = /* GraphQL */ `
  subscription OnDeleteVitals($filter: ModelSubscriptionVitalsFilterInput) {
    onDeleteVitals(filter: $filter) {
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
export const onCreateEncounter = /* GraphQL */ `
  subscription OnCreateEncounter(
    $filter: ModelSubscriptionEncounterFilterInput
  ) {
    onCreateEncounter(filter: $filter) {
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
export const onUpdateEncounter = /* GraphQL */ `
  subscription OnUpdateEncounter(
    $filter: ModelSubscriptionEncounterFilterInput
  ) {
    onUpdateEncounter(filter: $filter) {
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
export const onDeleteEncounter = /* GraphQL */ `
  subscription OnDeleteEncounter(
    $filter: ModelSubscriptionEncounterFilterInput
  ) {
    onDeleteEncounter(filter: $filter) {
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
export const onCreateConversation = /* GraphQL */ `
  subscription OnCreateConversation(
    $filter: ModelSubscriptionConversationFilterInput
  ) {
    onCreateConversation(filter: $filter) {
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
export const onUpdateConversation = /* GraphQL */ `
  subscription OnUpdateConversation(
    $filter: ModelSubscriptionConversationFilterInput
  ) {
    onUpdateConversation(filter: $filter) {
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
export const onDeleteConversation = /* GraphQL */ `
  subscription OnDeleteConversation(
    $filter: ModelSubscriptionConversationFilterInput
  ) {
    onDeleteConversation(filter: $filter) {
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
