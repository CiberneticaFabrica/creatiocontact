// Tipos para la API de Creatio CRM

export interface CreatioContactResponse {
  success: boolean;
  contact_id: string;
  data: CreatioContact;
  photo: string | null;
  fetched_at: string;
}

export interface CreatioContact {
  "@odata.context": string;
  Id: string;
  Name: string;
  OwnerId: string;
  CreatedOn: string;
  CreatedById: string;
  ModifiedOn: string;
  ModifiedById: string;
  SalutationTypeId: string;
  GenderId: string;
  AccountId: string;
  DecisionRoleId: string;
  JobId: string;
  JobTitle: string;
  DepartmentId: string;
  BirthDate: string;
  Phone: string;
  MobilePhone: string;
  HomePhone: string;
  Skype: string;
  Email: string;
  Address: string;
  CityId: string;
  RegionId: string;
  Zip: string;
  CountryId: string;
  DoNotUseEmail: boolean;
  DoNotUseCall: boolean;
  DoNotUseSms: boolean;
  DoNotUseMail: boolean;
  Facebook: string;
  LinkedIn: string;
  Twitter: string;
  PhotoId: string;
  Surname: string;
  GivenName: string;
  MiddleName: string;
  Confirmed: boolean;
  Completeness: number;
  Age: number;
  IsEmailConfirmed: boolean;
  labConversionRate: number;
  labSegmentId: string;
  labWA: boolean;
  labIG: boolean;
  labFB: boolean;
  labKeepRecord: boolean;
  labVencimientoCedula: string;
  labNumCedula: string;
  labVenciminetoDateTime: string;
}

export interface CreatioContactRequest {
  contact_id: string;
  include_photo: boolean;
}
