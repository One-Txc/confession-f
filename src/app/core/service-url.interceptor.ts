import {InterceptedRequest, InterceptedResponse, Interceptor} from 'ng2-interceptors';
import {Injectable} from '@angular/core';
import {Headers, RequestOptions, RequestOptionsArgs} from '@angular/http';

/**
 * Created by jackphang on 2017/10/21 15:48
 * http 拦截器
 */

@Injectable()
export class ServiceURLInterceptor implements Interceptor {

    public interceptBefore(request: InterceptedRequest): InterceptedRequest {
        //console.log("intercept url:" + request.url);
        this.initDefaultRequestOptions(request.options);
        return request;
    }

    public interceptAfter(response: InterceptedResponse): InterceptedResponse {
        return response;
    }

    private initDefaultRequestOptions(options: RequestOptionsArgs): void {
        if (!options) {
            options = new RequestOptions({});
        }
        let headers = options.headers;
        if (!headers) {
            headers = new Headers();
        }
        headers.append('content-type', 'application/json;charset=utf-8');
        //headers.append('token', BaseUtil.getToken());
        options.headers = headers;
        //options.url
        //options.body
    }

}
