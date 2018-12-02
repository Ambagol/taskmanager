import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class InterlinkService {
	noteArray: any;
	constructor(private _http: HttpClient) {
		this.noteArray = [];
	}
	register(user, cb) {
		console.log('registering from service'); //step 3
		// this._http.post('/registerUser', user) //step 4
		this._http.post('/registerUser', user).subscribe((res) => {
			cb(res);
		});
	}
	login(user, cb) {
		this._http.post('/loginUser', user).subscribe((res) => {
			cb(res);
		});
	}

	checkSession(cb) {
		this._http.get('/checkSession').subscribe((res) => {
			cb(res);
		});
	}

	// logout(cb){
	//   this._http.get('/logout').subscribe((res)=>{
	//     cb(res)
	//   })
	// }

	addNote(note, cb) {
		console.log('adding notes at the service');
		this._http.post('/addNote', note).subscribe((res) => {
			console.log('adding notes back in service');
			cb(res);
		});
	}

	findAll(cb) {
		this._http.get('/findAll').subscribe((res) => {
			console.log('found all from service');
			this.noteArray = res;
			cb();
		});
	}

	delete(id, cb) {
		console.log('deleting from service');
		console.log('my id:', id);
		this._http.delete('/delete/' + id).subscribe((res) => {
			console.log('deleting back in service');
			cb(res);
		});
	}
}
