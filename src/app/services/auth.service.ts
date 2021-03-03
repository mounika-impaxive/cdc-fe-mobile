import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // private baseUrl: string = 'http://localhost:8080';
  private baseUrl: string = 'https://cdc-project.herokuapp.com';

  constructor(private http: HttpClient) { }

  /***** Login User *****/
  login(objUser: any): Observable<HttpResponse<any>> {
    let URL = this.baseUrl + '/user';
    console.log(URL);
    return this.http.post<any>(URL, objUser, { observe: 'response' });
  }

  createTherapy(objUser): Observable<HttpResponse<any>> {
    var headersForAPI = new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin':'*'});
    headersForAPI.append("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
    let url =  this.baseUrl + '/createTherapy';
    return this.http.post<any>(url,objUser, { headers: headersForAPI, observe: 'response' });
  }

  getallTherapies(){
    // this.getToken();
    // if(this.AccessToken) {
      var headersForAPI = new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin':'*'});
      headersForAPI.append("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
      let url =  this.baseUrl + '/getAllTherapy';
      console.log(url);
      return this.http.get<any>(url, { headers: headersForAPI, observe: 'response' });
    // }
  }

  getTheapy(id,cdcID): Observable<HttpResponse<any>>{
    // this.getToken();
    // if(this.AccessToken) {
      var headersForAPI = new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin':'*' });
      headersForAPI.append("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
      let url =  this.baseUrl + '/getTherapyId/{correl_id}/{cdc_id}';
      url = url.replace('{correl_id}',id);
      url = url.replace('{cdc_id}',cdcID);
      console.log(url);
      return this.http.get<any>(url, { headers: headersForAPI, observe: 'response' });
    // }
  }

  updateTherapy(id,cdcID,data){
    // this.getToken();
    // if(this.AccessToken) {
      var headersForAPI = new HttpHeaders({ 'Content-Type': 'application/json','Access-Control-Allow-Origin':'*' });
      headersForAPI.append("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
      let url =  this.baseUrl + '/updateTherapy/{correl_id}/{cdc_id}';
      url = url.replace('{correl_id}', id);
      url = url.replace('{cdc_id}',cdcID);
      console.log(url);
      return this.http.put<any>(url,data, { headers: headersForAPI, observe: 'response' });
    // }
  }


  deleteTherapy(id,cdcID){
    // this.getToken();
    // if(this.AccessToken) {
      var headersForAPI = new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin':'*'});
      headersForAPI.append("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
      let url =  this.baseUrl + '/deleteTherapy/{correl_id}/{cdc_id}';
      url = url.replace('{correl_id}', id);
      url = url.replace('{cdc_id}',cdcID);
      console.log(url);
      return this.http.delete<any>(url, { headers: headersForAPI, observe: 'response' });
    // }
  }


  createTherapist(objUser){
    var headersForAPI = new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin':'*'});
    headersForAPI.append("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
    let url =  this.baseUrl + '/createTherapist';
    return this.http.post<any>(url,objUser, { headers: headersForAPI, observe: 'response' });
  }

  getTheapist(cdcID): Observable<HttpResponse<any>>{
    // this.getToken();
    // if(this.AccessToken) {
      var headersForAPI = new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin':'*' });
      headersForAPI.append("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
      let url =  this.baseUrl + '/getTherapistBy/{cdc_id}';
      url = url.replace('{cdc_id}',cdcID);
      console.log(url);
      return this.http.get<any>(url, { headers: headersForAPI, observe: 'response' });
    // }
  }

  getTheapistBy(id,cdcID): Observable<HttpResponse<any>>{
    // this.getToken();
    // if(this.AccessToken) {
      var headersForAPI = new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin':'*' });
      headersForAPI.append("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
      let url =  this.baseUrl + '/getTherapist/{correl_id}/{cdc_id}';
      url = url.replace('{correl_id}',id);
      url = url.replace('{cdc_id}',cdcID);
      console.log(url);
      return this.http.get<any>(url, { headers: headersForAPI, observe: 'response' });
    // }
  }


  updateTherapist(id,cdcID,data){
    // this.getToken();
    // if(this.AccessToken) {
      var headersForAPI = new HttpHeaders({ 'Content-Type': 'application/json','Access-Control-Allow-Origin':'*' });
      headersForAPI.append("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
      let url =  this.baseUrl + '/updateTherapistId/{correl_id}/{cdc_id}';
      url = url.replace('{correl_id}', id);
      url = url.replace('{cdc_id}',cdcID);
      console.log(url);
      return this.http.put<any>(url,data, { headers: headersForAPI, observe: 'response' });
    // }
  }

  deleteTherapist(id,cdcID){
    // this.getToken();
    // if(this.AccessToken) {
      var headersForAPI = new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin':'*'});
      headersForAPI.append("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
      let url =  this.baseUrl + '/deleteTherapist/{correl_id}/{cdc_id}';
      url = url.replace('{correl_id}', id);
      url = url.replace('{cdc_id}',cdcID);
      console.log(url);
      return this.http.delete<any>(url, { headers: headersForAPI, observe: 'response' });
    // }
  }

  createChildren(objUser){
    var headersForAPI = new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin':'*'});
    headersForAPI.append("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
    let url =  this.baseUrl + '/createStudent';
    return this.http.post<any>(url,objUser, { headers: headersForAPI, observe: 'response' });
  }

  getstudent(cdcID): Observable<HttpResponse<any>>{
    // this.getToken();
    // if(this.AccessToken) {
      var headersForAPI = new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin':'*' });
      headersForAPI.append("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
      let url =  this.baseUrl + '/getStudentBy/{cdc_id}';
      url = url.replace('{cdc_id}',cdcID);
      console.log(url);
      return this.http.get<any>(url, { headers: headersForAPI, observe: 'response' });
    // }
  }

  getStudentBy(id,cdcID): Observable<HttpResponse<any>>{
    // this.getToken();
    // if(this.AccessToken) {
      var headersForAPI = new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin':'*' });
      headersForAPI.append("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
      let url =  this.baseUrl + '/getStudent/{correl_id}/{cdc_id}';
      url = url.replace('{correl_id}',id);
      url = url.replace('{cdc_id}',cdcID);
      console.log(url);
      return this.http.get<any>(url, { headers: headersForAPI, observe: 'response' });
    // }
  }

  updateStudent(id,cdcID,data){
    // this.getToken();
    // if(this.AccessToken) {
      var headersForAPI = new HttpHeaders({ 'Content-Type': 'application/json','Access-Control-Allow-Origin':'*' });
      headersForAPI.append("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
      let url =  this.baseUrl + '/updateStudentId/{correl_id}/{cdc_id}';
      url = url.replace('{correl_id}', id);
      url = url.replace('{cdc_id}',cdcID);
      console.log(url);
      return this.http.put<any>(url,data, { headers: headersForAPI, observe: 'response' });
    // }
  }


  deleteStudent(id,cdcID){
    // this.getToken();
    // if(this.AccessToken) {
      var headersForAPI = new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin':'*'});
      headersForAPI.append("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
      let url =  this.baseUrl + '/deleteStudent/{correl_id}/{cdc_id}';
      url = url.replace('{correl_id}', id);
      url = url.replace('{cdc_id}',cdcID);
      console.log(url);
      return this.http.delete<any>(url, { headers: headersForAPI, observe: 'response' });
    // }
  }
  createGoal(objUser): Observable<HttpResponse<any>> {
    var headersForAPI = new HttpHeaders({'Content-Type': 'application/json','Access-Control-Allow-Origin':'*'});
    headersForAPI.append("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
    let url =  this.baseUrl + '/createGoal';
    return this.http.post<any>(url,objUser, { headers: headersForAPI, observe: 'response' });
  }
}
