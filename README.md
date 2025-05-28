# J's Entry

## Specs
	2 Projects
	test-api
		RepositoryPattern
		GenericRepository
		FluentValidation
		IncomeDTOs
		SeedData
		MigrationImplementation
		Patch Implementation thru Toggling of IsActive,
			Different from Update
			Other possible implementations are listed / pre implemented and commented
	
	test-app
		Created using Angular @angular/animations": "^19.2.0"
		Uses Toastr for Output "ngx-toastr": "^19.0.0",
		Bootstrap for styling "bootstrap": "^5.3.6",
		rxjs for Realtime Messaging (Created, Updated, Activated) on multiple instance of app accross browsers
		AngularForms for form validation
		
		Bonus: Updating / Creating will update the list (even on other tabs)
		Updating will either update / notify user on Edit page (even on other tabs)
			Thru Notifications
	
	
## Setup
    git clone https://github.com/arvinjaysontamayocastro/test-api
	test-api
		1. dotnet restore
		2. cd api
		3. update appsettings.json and appsettings.Development.json "DefaultConnection"
			// Note: this is added on the push for easy demo, not recommended
		4. dotnet watch
		
    git clone https://github.com/arvinjaysontamayocastro/test-app
	test-app
		npm install
		ng serve
		
		Note: some links are hardcoded for now, just for demo purposes,
		Better setup environment variables

## Looking forward to working with you!
Jayson Castro

