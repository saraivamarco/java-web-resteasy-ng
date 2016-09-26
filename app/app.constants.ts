import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    public Server: string = "http://127.0.0.1:8080/";
    public ApiUrl: string = "java-web-resteasy/";
    public ServerWithApiUrl = this.Server + this.ApiUrl;
}