export class DistributorOrder {
  list: {
    time: string;
    content: string;
    receiver: string;
    receiveTel: string;
    address: string;
    supplier: string;
    fee: string;
    payType: string;
    status: string;
  };
}

export class DistributorOrderRearch {
  public time: string;
  public payType: string;
  public status: string;
  public content: string;
  public receiver: string;
  public supplier: string;
}
