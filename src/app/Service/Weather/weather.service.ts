import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  
  apiUrl = 'http://localhost:5131';

  constructor(private http: HttpClient) { }

  // Function to authenticate user login
  login(formreqt: { username: any; password: string; captchaToken: any; }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/Userlogin`, formreqt);
  }

  //function to authencticate admin login
  adminlogin(formreqt: { username: any; password: string; captchaToken: any;}): Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/adminlogin`,formreqt);
  }

  // Function to fetch weather forecast data
  Get(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/WeatherForecast`);
  }

  // Function to fetch all data
  getAll(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/Car`);
  }
  //finction to add country
  addlocateData(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/locate`, data);
  }
  // Function to add data
  addData(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/api/CarImg`, data);
  }
  //function to user register 
  userregister(userData:{
    username:string,password:string}): Observable<any> {
      return this.http.post<any>(`${this.apiUrl}/userregister`,userData)
    }
  

  // Function to admin register a user
  register(userData: { username: string, password: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/adminregister`, userData);
  }

  // login to data
  logni(data:any):Observable<string>{
    return this.http.post<string>(`${this.apiUrl}/userlogin`,  data );
  }

  //car grid system
  carlist(requestData: {pageIndex: number , pageSize : number , searchText: string}): Observable<any[]>{
    return this.http.post<any[]>(`${this.apiUrl}/Carlist/all`,requestData,{
      headers: new HttpHeaders({'Content-Type':'application/json'})
    }); // Corrected string interpolation
  }

  //delete car list
  deleteCar(carId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/Carlist/${carId}`); // Corrected string interpolation
  }

  //for fusion graph
  cardash(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/dashboard/graph`);
  } 

   // Function to upload user profile image
   uploadUserProfileImage(username: string, imgPath: string): Observable<any> {
    const formData = new FormData();
    formData.append('username', username);
    formData.append('img_path', imgPath);

    return this.http.post<any>(`${this.apiUrl}/User/uplodeProfileImage`, formData);
  }

  getUserProfileImagePaths(username: string): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/profile-image/${username}`);
  }



  //get the car by its carID
   getCarById(id: number): Observable<any> {
    const url = `${this.apiUrl}/api/Car/${id}`; // Corrected endpoint to fetch car by ID
    return this.http.get<any>(url);
  }
  //for image only use this
  buyerinfo(userData: { name: string, contactInfo: string,address:string ,model:string}): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/addBuyer`, userData);
  }
  //for adding a seller data
 

}




