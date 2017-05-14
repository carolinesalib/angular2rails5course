10.times do |proposal|
	Proposal.create!(
		customer: "Customer #{proposal}",
		portifolio_url: 'http://github.com.br/carolinesalib',
		tools: 'Ruby on Rails, Angular 2 and Postgres',
		estimated_hours: (80 + proposal),
		hourly_rate: 120,
		weeks_to_complete: 12,
		client_email: 'carolinesalibc@gmail.com'
	)
end
