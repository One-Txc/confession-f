import { Injectable } from '@angular/core';
import {InterceptorService} from "ng2-interceptors";
import {Observable} from "rxjs/Observable";
import {environment} from "../../environments/environment";
import {ErrorObservable} from "rxjs/observable/ErrorObservable";

@Injectable()
export class ConfigService {

  constructor(public http: InterceptorService) {
  }

  save(data: any): Observable<any> {
    return this.http.post(environment.confessionUrlPrefix+"mc/save",data).map((resp) => {
      return resp.json();
    }).catch(this.handleError);
  }

  get(id: any): Observable<any> {
    return this.http.get(environment.confessionUrlPrefix+"mc/"+id).map((resp) => {
      return resp.json();
    }).catch(this.handleError);
  }



  //处理相应异常
  public handleError(error: Response):ErrorObservable {
    //BaseUtil.authRedirect(error.json());
    return Observable.throw(error.json() || 'server error');
  }
}
