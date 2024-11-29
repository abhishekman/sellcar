export interface car{
    CarID:number;
Make:	string;
Model:	string;
Year:	number;
Color	:string;
EngineType	:string;
TransmissionType	:string;
Mileage:	string;
}

// for fussion chart car count
export interface CarCount {
    color: string;
    numberofCars: number;
  }

  //for chat
  export interface ChatMessage {
    user: string;
    message: string;
    read: boolean;
  }