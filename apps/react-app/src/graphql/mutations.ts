/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createInfo = /* GraphQL */ `
  mutation CreateInfo(
    $input: CreateInfoInput!
    $condition: ModelInfoConditionInput
  ) {
    createInfo(input: $input, condition: $condition) {
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
export const updateInfo = /* GraphQL */ `
  mutation UpdateInfo(
    $input: UpdateInfoInput!
    $condition: ModelInfoConditionInput
  ) {
    updateInfo(input: $input, condition: $condition) {
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
export const deleteInfo = /* GraphQL */ `
  mutation DeleteInfo(
    $input: DeleteInfoInput!
    $condition: ModelInfoConditionInput
  ) {
    deleteInfo(input: $input, condition: $condition) {
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
export const createVitals = /* GraphQL */ `
  mutation CreateVitals(
    $input: CreateVitalsInput!
    $condition: ModelVitalsConditionInput
  ) {
    createVitals(input: $input, condition: $condition) {
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
export const updateVitals = /* GraphQL */ `
  mutation UpdateVitals(
    $input: UpdateVitalsInput!
    $condition: ModelVitalsConditionInput
  ) {
    updateVitals(input: $input, condition: $condition) {
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
export const deleteVitals = /* GraphQL */ `
  mutation DeleteVitals(
    $input: DeleteVitalsInput!
    $condition: ModelVitalsConditionInput
  ) {
    deleteVitals(input: $input, condition: $condition) {
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
export const createEncounter = /* GraphQL */ `
  mutation CreateEncounter(
    $input: CreateEncounterInput!
    $condition: ModelEncounterConditionInput
  ) {
    createEncounter(input: $input, condition: $condition) {
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
export const updateEncounter = /* GraphQL */ `
  mutation UpdateEncounter(
    $input: UpdateEncounterInput!
    $condition: ModelEncounterConditionInput
  ) {
    updateEncounter(input: $input, condition: $condition) {
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
export const deleteEncounter = /* GraphQL */ `
  mutation DeleteEncounter(
    $input: DeleteEncounterInput!
    $condition: ModelEncounterConditionInput
  ) {
    deleteEncounter(input: $input, condition: $condition) {
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
export const createConversation = /* GraphQL */ `
  mutation CreateConversation(
    $input: CreateConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    createConversation(input: $input, condition: $condition) {
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
export const updateConversation = /* GraphQL */ `
  mutation UpdateConversation(
    $input: UpdateConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    updateConversation(input: $input, condition: $condition) {
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
export const deleteConversation = /* GraphQL */ `
  mutation DeleteConversation(
    $input: DeleteConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    deleteConversation(input: $input, condition: $condition) {
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
