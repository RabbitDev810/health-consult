/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateInfoInput = {
  id?: string | null,
  name?: string | null,
  date?: string | null,
  address1?: string | null,
  address2?: string | null,
  city?: string | null,
  state?: string | null,
  zipCode?: string | null,
  country?: string | null,
  loggedInUserEmail?: string | null,
};

export type ModelInfoConditionInput = {
  name?: ModelStringInput | null,
  date?: ModelStringInput | null,
  address1?: ModelStringInput | null,
  address2?: ModelStringInput | null,
  city?: ModelStringInput | null,
  state?: ModelStringInput | null,
  zipCode?: ModelStringInput | null,
  country?: ModelStringInput | null,
  loggedInUserEmail?: ModelStringInput | null,
  and?: Array< ModelInfoConditionInput | null > | null,
  or?: Array< ModelInfoConditionInput | null > | null,
  not?: ModelInfoConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Info = {
  __typename: "Info",
  id: string,
  name?: string | null,
  date?: string | null,
  address1?: string | null,
  address2?: string | null,
  city?: string | null,
  state?: string | null,
  zipCode?: string | null,
  country?: string | null,
  loggedInUserEmail?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateInfoInput = {
  id: string,
  name?: string | null,
  date?: string | null,
  address1?: string | null,
  address2?: string | null,
  city?: string | null,
  state?: string | null,
  zipCode?: string | null,
  country?: string | null,
  loggedInUserEmail?: string | null,
};

export type DeleteInfoInput = {
  id: string,
};

export type CreateVitalsInput = {
  id?: string | null,
  weightChange?: boolean | null,
  headache?: boolean | null,
  pain?: boolean | null,
  nippleDischarge?: boolean | null,
  highBloodPressure?: boolean | null,
  palpitation?: boolean | null,
  constipation?: boolean | null,
  diarrhea?: boolean | null,
  dysuria?: boolean | null,
  excessiveUrination?: boolean | null,
  unusualColor?: boolean | null,
  infertility?: boolean | null,
  recentPregnancy?: boolean | null,
  venerealDecease?: boolean | null,
};

export type ModelVitalsConditionInput = {
  weightChange?: ModelBooleanInput | null,
  headache?: ModelBooleanInput | null,
  pain?: ModelBooleanInput | null,
  nippleDischarge?: ModelBooleanInput | null,
  highBloodPressure?: ModelBooleanInput | null,
  palpitation?: ModelBooleanInput | null,
  constipation?: ModelBooleanInput | null,
  diarrhea?: ModelBooleanInput | null,
  dysuria?: ModelBooleanInput | null,
  excessiveUrination?: ModelBooleanInput | null,
  unusualColor?: ModelBooleanInput | null,
  infertility?: ModelBooleanInput | null,
  recentPregnancy?: ModelBooleanInput | null,
  venerealDecease?: ModelBooleanInput | null,
  and?: Array< ModelVitalsConditionInput | null > | null,
  or?: Array< ModelVitalsConditionInput | null > | null,
  not?: ModelVitalsConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Vitals = {
  __typename: "Vitals",
  id: string,
  weightChange?: boolean | null,
  headache?: boolean | null,
  pain?: boolean | null,
  nippleDischarge?: boolean | null,
  highBloodPressure?: boolean | null,
  palpitation?: boolean | null,
  constipation?: boolean | null,
  diarrhea?: boolean | null,
  dysuria?: boolean | null,
  excessiveUrination?: boolean | null,
  unusualColor?: boolean | null,
  infertility?: boolean | null,
  recentPregnancy?: boolean | null,
  venerealDecease?: boolean | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateVitalsInput = {
  id: string,
  weightChange?: boolean | null,
  headache?: boolean | null,
  pain?: boolean | null,
  nippleDischarge?: boolean | null,
  highBloodPressure?: boolean | null,
  palpitation?: boolean | null,
  constipation?: boolean | null,
  diarrhea?: boolean | null,
  dysuria?: boolean | null,
  excessiveUrination?: boolean | null,
  unusualColor?: boolean | null,
  infertility?: boolean | null,
  recentPregnancy?: boolean | null,
  venerealDecease?: boolean | null,
};

export type DeleteVitalsInput = {
  id: string,
};

export type CreateEncounterInput = {
  id?: string | null,
  office?: string | null,
  visitType?: string | null,
  procedure?: string | null,
  cycle?: string | null,
  provider?: string | null,
  encounterDate?: string | null,
  encounterType?: string | null,
  name?: string | null,
  sex?: string | null,
  phoneNumber?: string | null,
  visitorId?: string | null,
  visitorDate?: string | null,
  address?: string | null,
  HPI?: string | null,
  ROS?: string | null,
  orders?: string | null,
  procedures?: string | null,
  plan?: string | null,
  diagnosisCode?: string | null,
  billingCode?: string | null,
};

export type ModelEncounterConditionInput = {
  office?: ModelStringInput | null,
  visitType?: ModelStringInput | null,
  procedure?: ModelStringInput | null,
  cycle?: ModelStringInput | null,
  provider?: ModelStringInput | null,
  encounterDate?: ModelStringInput | null,
  encounterType?: ModelStringInput | null,
  name?: ModelStringInput | null,
  sex?: ModelStringInput | null,
  phoneNumber?: ModelStringInput | null,
  visitorId?: ModelStringInput | null,
  visitorDate?: ModelStringInput | null,
  address?: ModelStringInput | null,
  HPI?: ModelStringInput | null,
  ROS?: ModelStringInput | null,
  orders?: ModelStringInput | null,
  procedures?: ModelStringInput | null,
  plan?: ModelStringInput | null,
  diagnosisCode?: ModelStringInput | null,
  billingCode?: ModelStringInput | null,
  and?: Array< ModelEncounterConditionInput | null > | null,
  or?: Array< ModelEncounterConditionInput | null > | null,
  not?: ModelEncounterConditionInput | null,
};

export type Encounter = {
  __typename: "Encounter",
  id: string,
  office?: string | null,
  visitType?: string | null,
  procedure?: string | null,
  cycle?: string | null,
  provider?: string | null,
  encounterDate?: string | null,
  encounterType?: string | null,
  name?: string | null,
  sex?: string | null,
  phoneNumber?: string | null,
  visitorId?: string | null,
  visitorDate?: string | null,
  address?: string | null,
  HPI?: string | null,
  ROS?: string | null,
  orders?: string | null,
  procedures?: string | null,
  plan?: string | null,
  diagnosisCode?: string | null,
  billingCode?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateEncounterInput = {
  id: string,
  office?: string | null,
  visitType?: string | null,
  procedure?: string | null,
  cycle?: string | null,
  provider?: string | null,
  encounterDate?: string | null,
  encounterType?: string | null,
  name?: string | null,
  sex?: string | null,
  phoneNumber?: string | null,
  visitorId?: string | null,
  visitorDate?: string | null,
  address?: string | null,
  HPI?: string | null,
  ROS?: string | null,
  orders?: string | null,
  procedures?: string | null,
  plan?: string | null,
  diagnosisCode?: string | null,
  billingCode?: string | null,
};

export type DeleteEncounterInput = {
  id: string,
};

export type CreateConversationInput = {
  id?: string | null,
  screen: string,
  date?: string | null,
  conversation?: ConversationTypeInput | null,
};

export type ConversationTypeInput = {
  id?: string | null,
  statements?: Array< StatementInputInput | null > | null,
};

export type StatementInputInput = {
  completed_statement?: string | null,
  partial_statement?: string | null,
  speaker_id?: string | null,
  speaker_name?: string | null,
};

export type ModelConversationConditionInput = {
  date?: ModelStringInput | null,
  and?: Array< ModelConversationConditionInput | null > | null,
  or?: Array< ModelConversationConditionInput | null > | null,
  not?: ModelConversationConditionInput | null,
};

export type Conversation = {
  __typename: "Conversation",
  id: string,
  screen: string,
  date?: string | null,
  conversation?: ConversationType | null,
  createdAt: string,
  updatedAt: string,
};

export type ConversationType = {
  __typename: "ConversationType",
  id?: string | null,
  statements?:  Array<StatementInput | null > | null,
};

export type StatementInput = {
  __typename: "StatementInput",
  completed_statement?: string | null,
  partial_statement?: string | null,
  speaker_id?: string | null,
  speaker_name?: string | null,
};

export type UpdateConversationInput = {
  id: string,
  screen: string,
  date?: string | null,
  conversation?: ConversationTypeInput | null,
};

export type DeleteConversationInput = {
  id: string,
  screen: string,
};

export type ModelInfoFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  date?: ModelStringInput | null,
  address1?: ModelStringInput | null,
  address2?: ModelStringInput | null,
  city?: ModelStringInput | null,
  state?: ModelStringInput | null,
  zipCode?: ModelStringInput | null,
  country?: ModelStringInput | null,
  loggedInUserEmail?: ModelStringInput | null,
  and?: Array< ModelInfoFilterInput | null > | null,
  or?: Array< ModelInfoFilterInput | null > | null,
  not?: ModelInfoFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelInfoConnection = {
  __typename: "ModelInfoConnection",
  items:  Array<Info | null >,
  nextToken?: string | null,
};

export type ModelVitalsFilterInput = {
  id?: ModelIDInput | null,
  weightChange?: ModelBooleanInput | null,
  headache?: ModelBooleanInput | null,
  pain?: ModelBooleanInput | null,
  nippleDischarge?: ModelBooleanInput | null,
  highBloodPressure?: ModelBooleanInput | null,
  palpitation?: ModelBooleanInput | null,
  constipation?: ModelBooleanInput | null,
  diarrhea?: ModelBooleanInput | null,
  dysuria?: ModelBooleanInput | null,
  excessiveUrination?: ModelBooleanInput | null,
  unusualColor?: ModelBooleanInput | null,
  infertility?: ModelBooleanInput | null,
  recentPregnancy?: ModelBooleanInput | null,
  venerealDecease?: ModelBooleanInput | null,
  and?: Array< ModelVitalsFilterInput | null > | null,
  or?: Array< ModelVitalsFilterInput | null > | null,
  not?: ModelVitalsFilterInput | null,
};

export type ModelVitalsConnection = {
  __typename: "ModelVitalsConnection",
  items:  Array<Vitals | null >,
  nextToken?: string | null,
};

export type ModelEncounterFilterInput = {
  id?: ModelIDInput | null,
  office?: ModelStringInput | null,
  visitType?: ModelStringInput | null,
  procedure?: ModelStringInput | null,
  cycle?: ModelStringInput | null,
  provider?: ModelStringInput | null,
  encounterDate?: ModelStringInput | null,
  encounterType?: ModelStringInput | null,
  name?: ModelStringInput | null,
  sex?: ModelStringInput | null,
  phoneNumber?: ModelStringInput | null,
  visitorId?: ModelStringInput | null,
  visitorDate?: ModelStringInput | null,
  address?: ModelStringInput | null,
  HPI?: ModelStringInput | null,
  ROS?: ModelStringInput | null,
  orders?: ModelStringInput | null,
  procedures?: ModelStringInput | null,
  plan?: ModelStringInput | null,
  diagnosisCode?: ModelStringInput | null,
  billingCode?: ModelStringInput | null,
  and?: Array< ModelEncounterFilterInput | null > | null,
  or?: Array< ModelEncounterFilterInput | null > | null,
  not?: ModelEncounterFilterInput | null,
};

export type ModelEncounterConnection = {
  __typename: "ModelEncounterConnection",
  items:  Array<Encounter | null >,
  nextToken?: string | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelConversationFilterInput = {
  id?: ModelIDInput | null,
  screen?: ModelStringInput | null,
  date?: ModelStringInput | null,
  and?: Array< ModelConversationFilterInput | null > | null,
  or?: Array< ModelConversationFilterInput | null > | null,
  not?: ModelConversationFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelConversationConnection = {
  __typename: "ModelConversationConnection",
  items:  Array<Conversation | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionInfoFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  date?: ModelSubscriptionStringInput | null,
  address1?: ModelSubscriptionStringInput | null,
  address2?: ModelSubscriptionStringInput | null,
  city?: ModelSubscriptionStringInput | null,
  state?: ModelSubscriptionStringInput | null,
  zipCode?: ModelSubscriptionStringInput | null,
  country?: ModelSubscriptionStringInput | null,
  loggedInUserEmail?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionInfoFilterInput | null > | null,
  or?: Array< ModelSubscriptionInfoFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionVitalsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  weightChange?: ModelSubscriptionBooleanInput | null,
  headache?: ModelSubscriptionBooleanInput | null,
  pain?: ModelSubscriptionBooleanInput | null,
  nippleDischarge?: ModelSubscriptionBooleanInput | null,
  highBloodPressure?: ModelSubscriptionBooleanInput | null,
  palpitation?: ModelSubscriptionBooleanInput | null,
  constipation?: ModelSubscriptionBooleanInput | null,
  diarrhea?: ModelSubscriptionBooleanInput | null,
  dysuria?: ModelSubscriptionBooleanInput | null,
  excessiveUrination?: ModelSubscriptionBooleanInput | null,
  unusualColor?: ModelSubscriptionBooleanInput | null,
  infertility?: ModelSubscriptionBooleanInput | null,
  recentPregnancy?: ModelSubscriptionBooleanInput | null,
  venerealDecease?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionVitalsFilterInput | null > | null,
  or?: Array< ModelSubscriptionVitalsFilterInput | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionEncounterFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  office?: ModelSubscriptionStringInput | null,
  visitType?: ModelSubscriptionStringInput | null,
  procedure?: ModelSubscriptionStringInput | null,
  cycle?: ModelSubscriptionStringInput | null,
  provider?: ModelSubscriptionStringInput | null,
  encounterDate?: ModelSubscriptionStringInput | null,
  encounterType?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  sex?: ModelSubscriptionStringInput | null,
  phoneNumber?: ModelSubscriptionStringInput | null,
  visitorId?: ModelSubscriptionStringInput | null,
  visitorDate?: ModelSubscriptionStringInput | null,
  address?: ModelSubscriptionStringInput | null,
  HPI?: ModelSubscriptionStringInput | null,
  ROS?: ModelSubscriptionStringInput | null,
  orders?: ModelSubscriptionStringInput | null,
  procedures?: ModelSubscriptionStringInput | null,
  plan?: ModelSubscriptionStringInput | null,
  diagnosisCode?: ModelSubscriptionStringInput | null,
  billingCode?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionEncounterFilterInput | null > | null,
  or?: Array< ModelSubscriptionEncounterFilterInput | null > | null,
};

export type ModelSubscriptionConversationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  screen?: ModelSubscriptionStringInput | null,
  date?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionConversationFilterInput | null > | null,
  or?: Array< ModelSubscriptionConversationFilterInput | null > | null,
};

export type CreateInfoMutationVariables = {
  input: CreateInfoInput,
  condition?: ModelInfoConditionInput | null,
};

export type CreateInfoMutation = {
  createInfo?:  {
    __typename: "Info",
    id: string,
    name?: string | null,
    date?: string | null,
    address1?: string | null,
    address2?: string | null,
    city?: string | null,
    state?: string | null,
    zipCode?: string | null,
    country?: string | null,
    loggedInUserEmail?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateInfoMutationVariables = {
  input: UpdateInfoInput,
  condition?: ModelInfoConditionInput | null,
};

export type UpdateInfoMutation = {
  updateInfo?:  {
    __typename: "Info",
    id: string,
    name?: string | null,
    date?: string | null,
    address1?: string | null,
    address2?: string | null,
    city?: string | null,
    state?: string | null,
    zipCode?: string | null,
    country?: string | null,
    loggedInUserEmail?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteInfoMutationVariables = {
  input: DeleteInfoInput,
  condition?: ModelInfoConditionInput | null,
};

export type DeleteInfoMutation = {
  deleteInfo?:  {
    __typename: "Info",
    id: string,
    name?: string | null,
    date?: string | null,
    address1?: string | null,
    address2?: string | null,
    city?: string | null,
    state?: string | null,
    zipCode?: string | null,
    country?: string | null,
    loggedInUserEmail?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateVitalsMutationVariables = {
  input: CreateVitalsInput,
  condition?: ModelVitalsConditionInput | null,
};

export type CreateVitalsMutation = {
  createVitals?:  {
    __typename: "Vitals",
    id: string,
    weightChange?: boolean | null,
    headache?: boolean | null,
    pain?: boolean | null,
    nippleDischarge?: boolean | null,
    highBloodPressure?: boolean | null,
    palpitation?: boolean | null,
    constipation?: boolean | null,
    diarrhea?: boolean | null,
    dysuria?: boolean | null,
    excessiveUrination?: boolean | null,
    unusualColor?: boolean | null,
    infertility?: boolean | null,
    recentPregnancy?: boolean | null,
    venerealDecease?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateVitalsMutationVariables = {
  input: UpdateVitalsInput,
  condition?: ModelVitalsConditionInput | null,
};

export type UpdateVitalsMutation = {
  updateVitals?:  {
    __typename: "Vitals",
    id: string,
    weightChange?: boolean | null,
    headache?: boolean | null,
    pain?: boolean | null,
    nippleDischarge?: boolean | null,
    highBloodPressure?: boolean | null,
    palpitation?: boolean | null,
    constipation?: boolean | null,
    diarrhea?: boolean | null,
    dysuria?: boolean | null,
    excessiveUrination?: boolean | null,
    unusualColor?: boolean | null,
    infertility?: boolean | null,
    recentPregnancy?: boolean | null,
    venerealDecease?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteVitalsMutationVariables = {
  input: DeleteVitalsInput,
  condition?: ModelVitalsConditionInput | null,
};

export type DeleteVitalsMutation = {
  deleteVitals?:  {
    __typename: "Vitals",
    id: string,
    weightChange?: boolean | null,
    headache?: boolean | null,
    pain?: boolean | null,
    nippleDischarge?: boolean | null,
    highBloodPressure?: boolean | null,
    palpitation?: boolean | null,
    constipation?: boolean | null,
    diarrhea?: boolean | null,
    dysuria?: boolean | null,
    excessiveUrination?: boolean | null,
    unusualColor?: boolean | null,
    infertility?: boolean | null,
    recentPregnancy?: boolean | null,
    venerealDecease?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateEncounterMutationVariables = {
  input: CreateEncounterInput,
  condition?: ModelEncounterConditionInput | null,
};

export type CreateEncounterMutation = {
  createEncounter?:  {
    __typename: "Encounter",
    id: string,
    office?: string | null,
    visitType?: string | null,
    procedure?: string | null,
    cycle?: string | null,
    provider?: string | null,
    encounterDate?: string | null,
    encounterType?: string | null,
    name?: string | null,
    sex?: string | null,
    phoneNumber?: string | null,
    visitorId?: string | null,
    visitorDate?: string | null,
    address?: string | null,
    HPI?: string | null,
    ROS?: string | null,
    orders?: string | null,
    procedures?: string | null,
    plan?: string | null,
    diagnosisCode?: string | null,
    billingCode?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateEncounterMutationVariables = {
  input: UpdateEncounterInput,
  condition?: ModelEncounterConditionInput | null,
};

export type UpdateEncounterMutation = {
  updateEncounter?:  {
    __typename: "Encounter",
    id: string,
    office?: string | null,
    visitType?: string | null,
    procedure?: string | null,
    cycle?: string | null,
    provider?: string | null,
    encounterDate?: string | null,
    encounterType?: string | null,
    name?: string | null,
    sex?: string | null,
    phoneNumber?: string | null,
    visitorId?: string | null,
    visitorDate?: string | null,
    address?: string | null,
    HPI?: string | null,
    ROS?: string | null,
    orders?: string | null,
    procedures?: string | null,
    plan?: string | null,
    diagnosisCode?: string | null,
    billingCode?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteEncounterMutationVariables = {
  input: DeleteEncounterInput,
  condition?: ModelEncounterConditionInput | null,
};

export type DeleteEncounterMutation = {
  deleteEncounter?:  {
    __typename: "Encounter",
    id: string,
    office?: string | null,
    visitType?: string | null,
    procedure?: string | null,
    cycle?: string | null,
    provider?: string | null,
    encounterDate?: string | null,
    encounterType?: string | null,
    name?: string | null,
    sex?: string | null,
    phoneNumber?: string | null,
    visitorId?: string | null,
    visitorDate?: string | null,
    address?: string | null,
    HPI?: string | null,
    ROS?: string | null,
    orders?: string | null,
    procedures?: string | null,
    plan?: string | null,
    diagnosisCode?: string | null,
    billingCode?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateConversationMutationVariables = {
  input: CreateConversationInput,
  condition?: ModelConversationConditionInput | null,
};

export type CreateConversationMutation = {
  createConversation?:  {
    __typename: "Conversation",
    id: string,
    screen: string,
    date?: string | null,
    conversation?:  {
      __typename: "ConversationType",
      id?: string | null,
      statements?:  Array< {
        __typename: "StatementInput",
        completed_statement?: string | null,
        partial_statement?: string | null,
        speaker_id?: string | null,
        speaker_name?: string | null,
      } | null > | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateConversationMutationVariables = {
  input: UpdateConversationInput,
  condition?: ModelConversationConditionInput | null,
};

export type UpdateConversationMutation = {
  updateConversation?:  {
    __typename: "Conversation",
    id: string,
    screen: string,
    date?: string | null,
    conversation?:  {
      __typename: "ConversationType",
      id?: string | null,
      statements?:  Array< {
        __typename: "StatementInput",
        completed_statement?: string | null,
        partial_statement?: string | null,
        speaker_id?: string | null,
        speaker_name?: string | null,
      } | null > | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteConversationMutationVariables = {
  input: DeleteConversationInput,
  condition?: ModelConversationConditionInput | null,
};

export type DeleteConversationMutation = {
  deleteConversation?:  {
    __typename: "Conversation",
    id: string,
    screen: string,
    date?: string | null,
    conversation?:  {
      __typename: "ConversationType",
      id?: string | null,
      statements?:  Array< {
        __typename: "StatementInput",
        completed_statement?: string | null,
        partial_statement?: string | null,
        speaker_id?: string | null,
        speaker_name?: string | null,
      } | null > | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetInfoQueryVariables = {
  id: string,
};

export type GetInfoQuery = {
  getInfo?:  {
    __typename: "Info",
    id: string,
    name?: string | null,
    date?: string | null,
    address1?: string | null,
    address2?: string | null,
    city?: string | null,
    state?: string | null,
    zipCode?: string | null,
    country?: string | null,
    loggedInUserEmail?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListInfosQueryVariables = {
  filter?: ModelInfoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListInfosQuery = {
  listInfos?:  {
    __typename: "ModelInfoConnection",
    items:  Array< {
      __typename: "Info",
      id: string,
      name?: string | null,
      date?: string | null,
      address1?: string | null,
      address2?: string | null,
      city?: string | null,
      state?: string | null,
      zipCode?: string | null,
      country?: string | null,
      loggedInUserEmail?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetVitalsQueryVariables = {
  id: string,
};

export type GetVitalsQuery = {
  getVitals?:  {
    __typename: "Vitals",
    id: string,
    weightChange?: boolean | null,
    headache?: boolean | null,
    pain?: boolean | null,
    nippleDischarge?: boolean | null,
    highBloodPressure?: boolean | null,
    palpitation?: boolean | null,
    constipation?: boolean | null,
    diarrhea?: boolean | null,
    dysuria?: boolean | null,
    excessiveUrination?: boolean | null,
    unusualColor?: boolean | null,
    infertility?: boolean | null,
    recentPregnancy?: boolean | null,
    venerealDecease?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListVitalsQueryVariables = {
  filter?: ModelVitalsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListVitalsQuery = {
  listVitals?:  {
    __typename: "ModelVitalsConnection",
    items:  Array< {
      __typename: "Vitals",
      id: string,
      weightChange?: boolean | null,
      headache?: boolean | null,
      pain?: boolean | null,
      nippleDischarge?: boolean | null,
      highBloodPressure?: boolean | null,
      palpitation?: boolean | null,
      constipation?: boolean | null,
      diarrhea?: boolean | null,
      dysuria?: boolean | null,
      excessiveUrination?: boolean | null,
      unusualColor?: boolean | null,
      infertility?: boolean | null,
      recentPregnancy?: boolean | null,
      venerealDecease?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetEncounterQueryVariables = {
  id: string,
};

export type GetEncounterQuery = {
  getEncounter?:  {
    __typename: "Encounter",
    id: string,
    office?: string | null,
    visitType?: string | null,
    procedure?: string | null,
    cycle?: string | null,
    provider?: string | null,
    encounterDate?: string | null,
    encounterType?: string | null,
    name?: string | null,
    sex?: string | null,
    phoneNumber?: string | null,
    visitorId?: string | null,
    visitorDate?: string | null,
    address?: string | null,
    HPI?: string | null,
    ROS?: string | null,
    orders?: string | null,
    procedures?: string | null,
    plan?: string | null,
    diagnosisCode?: string | null,
    billingCode?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListEncountersQueryVariables = {
  filter?: ModelEncounterFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEncountersQuery = {
  listEncounters?:  {
    __typename: "ModelEncounterConnection",
    items:  Array< {
      __typename: "Encounter",
      id: string,
      office?: string | null,
      visitType?: string | null,
      procedure?: string | null,
      cycle?: string | null,
      provider?: string | null,
      encounterDate?: string | null,
      encounterType?: string | null,
      name?: string | null,
      sex?: string | null,
      phoneNumber?: string | null,
      visitorId?: string | null,
      visitorDate?: string | null,
      address?: string | null,
      HPI?: string | null,
      ROS?: string | null,
      orders?: string | null,
      procedures?: string | null,
      plan?: string | null,
      diagnosisCode?: string | null,
      billingCode?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetConversationQueryVariables = {
  id: string,
  screen: string,
};

export type GetConversationQuery = {
  getConversation?:  {
    __typename: "Conversation",
    id: string,
    screen: string,
    date?: string | null,
    conversation?:  {
      __typename: "ConversationType",
      id?: string | null,
      statements?:  Array< {
        __typename: "StatementInput",
        completed_statement?: string | null,
        partial_statement?: string | null,
        speaker_id?: string | null,
        speaker_name?: string | null,
      } | null > | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListConversationsQueryVariables = {
  id?: string | null,
  screen?: ModelStringKeyConditionInput | null,
  filter?: ModelConversationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListConversationsQuery = {
  listConversations?:  {
    __typename: "ModelConversationConnection",
    items:  Array< {
      __typename: "Conversation",
      id: string,
      screen: string,
      date?: string | null,
      conversation?:  {
        __typename: "ConversationType",
        id?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateInfoSubscriptionVariables = {
  filter?: ModelSubscriptionInfoFilterInput | null,
};

export type OnCreateInfoSubscription = {
  onCreateInfo?:  {
    __typename: "Info",
    id: string,
    name?: string | null,
    date?: string | null,
    address1?: string | null,
    address2?: string | null,
    city?: string | null,
    state?: string | null,
    zipCode?: string | null,
    country?: string | null,
    loggedInUserEmail?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateInfoSubscriptionVariables = {
  filter?: ModelSubscriptionInfoFilterInput | null,
};

export type OnUpdateInfoSubscription = {
  onUpdateInfo?:  {
    __typename: "Info",
    id: string,
    name?: string | null,
    date?: string | null,
    address1?: string | null,
    address2?: string | null,
    city?: string | null,
    state?: string | null,
    zipCode?: string | null,
    country?: string | null,
    loggedInUserEmail?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteInfoSubscriptionVariables = {
  filter?: ModelSubscriptionInfoFilterInput | null,
};

export type OnDeleteInfoSubscription = {
  onDeleteInfo?:  {
    __typename: "Info",
    id: string,
    name?: string | null,
    date?: string | null,
    address1?: string | null,
    address2?: string | null,
    city?: string | null,
    state?: string | null,
    zipCode?: string | null,
    country?: string | null,
    loggedInUserEmail?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateVitalsSubscriptionVariables = {
  filter?: ModelSubscriptionVitalsFilterInput | null,
};

export type OnCreateVitalsSubscription = {
  onCreateVitals?:  {
    __typename: "Vitals",
    id: string,
    weightChange?: boolean | null,
    headache?: boolean | null,
    pain?: boolean | null,
    nippleDischarge?: boolean | null,
    highBloodPressure?: boolean | null,
    palpitation?: boolean | null,
    constipation?: boolean | null,
    diarrhea?: boolean | null,
    dysuria?: boolean | null,
    excessiveUrination?: boolean | null,
    unusualColor?: boolean | null,
    infertility?: boolean | null,
    recentPregnancy?: boolean | null,
    venerealDecease?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateVitalsSubscriptionVariables = {
  filter?: ModelSubscriptionVitalsFilterInput | null,
};

export type OnUpdateVitalsSubscription = {
  onUpdateVitals?:  {
    __typename: "Vitals",
    id: string,
    weightChange?: boolean | null,
    headache?: boolean | null,
    pain?: boolean | null,
    nippleDischarge?: boolean | null,
    highBloodPressure?: boolean | null,
    palpitation?: boolean | null,
    constipation?: boolean | null,
    diarrhea?: boolean | null,
    dysuria?: boolean | null,
    excessiveUrination?: boolean | null,
    unusualColor?: boolean | null,
    infertility?: boolean | null,
    recentPregnancy?: boolean | null,
    venerealDecease?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteVitalsSubscriptionVariables = {
  filter?: ModelSubscriptionVitalsFilterInput | null,
};

export type OnDeleteVitalsSubscription = {
  onDeleteVitals?:  {
    __typename: "Vitals",
    id: string,
    weightChange?: boolean | null,
    headache?: boolean | null,
    pain?: boolean | null,
    nippleDischarge?: boolean | null,
    highBloodPressure?: boolean | null,
    palpitation?: boolean | null,
    constipation?: boolean | null,
    diarrhea?: boolean | null,
    dysuria?: boolean | null,
    excessiveUrination?: boolean | null,
    unusualColor?: boolean | null,
    infertility?: boolean | null,
    recentPregnancy?: boolean | null,
    venerealDecease?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateEncounterSubscriptionVariables = {
  filter?: ModelSubscriptionEncounterFilterInput | null,
};

export type OnCreateEncounterSubscription = {
  onCreateEncounter?:  {
    __typename: "Encounter",
    id: string,
    office?: string | null,
    visitType?: string | null,
    procedure?: string | null,
    cycle?: string | null,
    provider?: string | null,
    encounterDate?: string | null,
    encounterType?: string | null,
    name?: string | null,
    sex?: string | null,
    phoneNumber?: string | null,
    visitorId?: string | null,
    visitorDate?: string | null,
    address?: string | null,
    HPI?: string | null,
    ROS?: string | null,
    orders?: string | null,
    procedures?: string | null,
    plan?: string | null,
    diagnosisCode?: string | null,
    billingCode?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateEncounterSubscriptionVariables = {
  filter?: ModelSubscriptionEncounterFilterInput | null,
};

export type OnUpdateEncounterSubscription = {
  onUpdateEncounter?:  {
    __typename: "Encounter",
    id: string,
    office?: string | null,
    visitType?: string | null,
    procedure?: string | null,
    cycle?: string | null,
    provider?: string | null,
    encounterDate?: string | null,
    encounterType?: string | null,
    name?: string | null,
    sex?: string | null,
    phoneNumber?: string | null,
    visitorId?: string | null,
    visitorDate?: string | null,
    address?: string | null,
    HPI?: string | null,
    ROS?: string | null,
    orders?: string | null,
    procedures?: string | null,
    plan?: string | null,
    diagnosisCode?: string | null,
    billingCode?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteEncounterSubscriptionVariables = {
  filter?: ModelSubscriptionEncounterFilterInput | null,
};

export type OnDeleteEncounterSubscription = {
  onDeleteEncounter?:  {
    __typename: "Encounter",
    id: string,
    office?: string | null,
    visitType?: string | null,
    procedure?: string | null,
    cycle?: string | null,
    provider?: string | null,
    encounterDate?: string | null,
    encounterType?: string | null,
    name?: string | null,
    sex?: string | null,
    phoneNumber?: string | null,
    visitorId?: string | null,
    visitorDate?: string | null,
    address?: string | null,
    HPI?: string | null,
    ROS?: string | null,
    orders?: string | null,
    procedures?: string | null,
    plan?: string | null,
    diagnosisCode?: string | null,
    billingCode?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateConversationSubscriptionVariables = {
  filter?: ModelSubscriptionConversationFilterInput | null,
};

export type OnCreateConversationSubscription = {
  onCreateConversation?:  {
    __typename: "Conversation",
    id: string,
    screen: string,
    date?: string | null,
    conversation?:  {
      __typename: "ConversationType",
      id?: string | null,
      statements?:  Array< {
        __typename: "StatementInput",
        completed_statement?: string | null,
        partial_statement?: string | null,
        speaker_id?: string | null,
        speaker_name?: string | null,
      } | null > | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateConversationSubscriptionVariables = {
  filter?: ModelSubscriptionConversationFilterInput | null,
};

export type OnUpdateConversationSubscription = {
  onUpdateConversation?:  {
    __typename: "Conversation",
    id: string,
    screen: string,
    date?: string | null,
    conversation?:  {
      __typename: "ConversationType",
      id?: string | null,
      statements?:  Array< {
        __typename: "StatementInput",
        completed_statement?: string | null,
        partial_statement?: string | null,
        speaker_id?: string | null,
        speaker_name?: string | null,
      } | null > | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteConversationSubscriptionVariables = {
  filter?: ModelSubscriptionConversationFilterInput | null,
};

export type OnDeleteConversationSubscription = {
  onDeleteConversation?:  {
    __typename: "Conversation",
    id: string,
    screen: string,
    date?: string | null,
    conversation?:  {
      __typename: "ConversationType",
      id?: string | null,
      statements?:  Array< {
        __typename: "StatementInput",
        completed_statement?: string | null,
        partial_statement?: string | null,
        speaker_id?: string | null,
        speaker_name?: string | null,
      } | null > | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
