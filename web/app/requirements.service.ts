import { Injectable } 		from '@angular/core';
import { Headers, Http } 	from '@angular/http';

//import 'rxjs/add/operator/toPromise';

import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";

@Injectable()
export class RequirementsService {
	reqs: any[] = [];

	constructor(private http: Http) {
	}

	private handleError(error: any): Observable<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Observable.throw(error.message || error);
	}

	getRequirements() {
		if(this.reqs)
			return Observable.of(this.reqs);
		else {
			var url = 'http://143.107.231.248:5500/api/requirements';
			return this.http.get(url)
						.map(response => response.json())
						.do(data => this.reqs = data);
		}

	}

	getReqById(rq_stid: string, rq_id: string): Observable<any> {
		//var reqs;
		//this.getRequirements().subscribe(res => reqs = res);
		//var req = reqs.filter(req => req.rq_stid == rq_stid && req.rq_id == rq_id);
		//return 
		return this.getRequirements().map(res => {
			return res.filter((req:any) => req.rq_stid == rq_stid && req.rq_id == rq_id);
		});
	}
}
