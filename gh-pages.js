import { publish } from 'gh-pages';

publish(
	'build',
	{
		branch: 'gh-pages',
		repo: 'https://github.com/willmcvay/frog-and-wolf.git',
		user: {
			name: 'Will McVay',
			email: 'willmcvay@pm.me'
		},
		dotfiles: true
	},
	() => {
		console.log('Published successfully');
	}
);
