import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { filter, from, Observable, switchMap, take, toArray } from "rxjs";
import { GenerationConfig } from "./generation-config";
import { Person } from "./person";

@Injectable({
	providedIn: "root"
})
export class PersonService {

	constructor(private http: HttpClient) {
	}

	filterPerson(person: Person, config: GenerationConfig): boolean {
		return (
			(config.male && config.female) || 
			(config.male && person.gender === 'Male') || 
			(config.female && person.gender === 'Female')
		)
	}

	getPersons(config: GenerationConfig): Observable<Person[]> {
		return this.http.get<Person[]>("/assets/data/persons.json").pipe(
			switchMap(persons => from(persons)),
			filter(person => this.filterPerson(person, config)),
			take(config.count),
			toArray(),
		);
	}
}
