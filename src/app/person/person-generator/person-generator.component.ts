import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { atLeastOneGenderCheckedValidator } from "../at-least-one-gender-checked.directive";
import { GenerationConfig } from "../generation-config";

@Component({
	selector: "app-person-generator",
	templateUrl: "./person-generator.component.html",
	styleUrls: ["./person-generator.component.scss"]
})
export class PersonGeneratorComponent implements OnInit {

	generator: FormGroup;

	@Output()
	private generateRequest = new EventEmitter<GenerationConfig>();

	constructor(private formBuilder: FormBuilder) {
	}

	ngOnInit() {
		this.generator = this.formBuilder.group({
			count: [
				1000, 
				[
					Validators.required,
					Validators.min(0), 
					Validators.max(1000)
				],
			],
			male: [true],
			female: [true]
		},{ validators: atLeastOneGenderCheckedValidator });
	}

	generate() {
		const value: GenerationConfig = this.generator.value;
		if (this.generator.valid)
			this.generateRequest.emit(value);
	}

}
