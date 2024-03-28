export type VisitTableRecord = {
  id: string;
  vistorName: string;
  encounterDate: string;
};

export type InfoForm = {
  id: string;
  name: string;
  dob: string;
  address1: string;
  address2?: string;
  city: string;
  state: string;
  zipcode: string;
  country: string;
};
