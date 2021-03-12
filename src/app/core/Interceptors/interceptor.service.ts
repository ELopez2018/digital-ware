import { MessageService } from "./../services/message.service";
import {
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpHeaders,
    HttpInterceptor,
    HttpRequest,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";

@Injectable({
    providedIn: "root",
})
export class InterceptorService implements HttpInterceptor {
    token =
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjQwZTk0MjY4NTVkODVmOWI4MzllNDUzZTZlMjY2YzA2YTA1YTA5MTc4YTBlMWRiMzJkYzJkZDRkMDc4MmJiMGQ0YzRhYjBkNThlZTgyMzdkIn0.eyJhdWQiOiIyIiwianRpIjoiNDBlOTQyNjg1NWQ4NWY5YjgzOWU0NTNlNmUyNjZjMDZhMDVhMDkxNzhhMGUxZGIzMmRjMmRkNGQwNzgyYmIwZDRjNGFiMGQ1OGVlODIzN2QiLCJpYXQiOjE2MTUwNDMzMTksIm5iZiI6MTYxNTA0MzMxOSwiZXhwIjoxNjE2MzM5MzE5LCJzdWIiOiIxMjIiLCJzY29wZXMiOltdfQ.iHdKsxmP70x86d2q7BErNDiRJCfnVjeew44kW6nHB7Y3zd8jFLQNcTDqj16WjzKM0DJKsPRqsXt1Kowky1TqYzO-QSnteqA_gHYQ-AGgLDAvsIDypdoOJL19rI21kHFgzJGa8owEVo52NFFzL8_0PBrx0RAEjT9NeRLfB0eom97k0cKqXSS2vlBFEmSp59G34LWyDFCY-xfIVpDZmauEzrDyGgHKF5cA1voi9nB-ygxT514wTK1H9EEEnuZhrmt5-9lF9E1HL_C0l9QCKTXgOmr2DMvl-9q6_PiWw9TE5dgeI_SLgaqf0GbEX-pOfLQn3-9Nhl_OrqPWe_8ug4NXWyJSt-p8_ThFVNqncLhipYbbZE8f4E9IIQx4DY6CsXFXuFl-Ohdr3moH4p8C1VcSK00LSnvB_76Wf3f-jeBVo0CoS2aDsexdinz85rzRMRy4VENxH07Dj0SAvCvMiKHkcO04yi_5UVGd1eE2o4X5Wk2-4hzFbO6bvYD3NIow-HbPZydwVWquRQrtIpPZRCGSJjCkTnwTjKpTK-X-1x0sIZB9moPP4qOJ3zZe86YWLuoQipDGB6pFTARoFVkIrfNltlaxtACtqLKs0yNq2nNaUNUuob8uAgS2GZfQKAQmTGAeI57YopsIpfQDWWRMsBNKayYOz_Av9fhXZD0BPfH9ClE";
    constructor() {}
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        let headers;
        if (req.url !== "https://dev.miasesorvial.com/api/v1/login") {
            console.log('InterceptorService: entro');
            headers = new HttpHeaders({
                "Content-Type": "application/json",
                Authorization: "Bearer " + this.token,
            });
        }
        const REQ_CLONE = req.clone({
            headers,
        });
        return next.handle(REQ_CLONE).pipe(catchError(this.manejarError));

        // console.log(req);
        // return next.handle(req).pipe(
        //   catchError( this.manejarError )
        //   );;
    }

    manejarError(error: HttpErrorResponse) {
        // console.error("ERRORES PRESENTADOS", error.message);
        // this.mensajeService.showCustom(error.message, null, "error");
        return throwError(error);
    }

    private httpOptions = {
        headers: new HttpHeaders({
            "Content-Type": "application/json",
            Authorization: "Bearer " + this.token,
        }),
    };

    public setHttpOption() {
        this.httpOptions = {
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                Authorization: "Bearer " + this.token,
            }),
        };
    }
}
