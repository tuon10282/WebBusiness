export interface ICustomer {
    Id: string;
    Name: string;
    Email: string;
    Age: number;
    Image: string;
  }
  
  export interface ICustomerType {
    CustomerTypeId: number;
    CustomterTypeName: string;
    Customers: ICustomer[];
  }