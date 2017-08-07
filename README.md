# Node MailService

Worker based mail sender using node js and react. MailService automatically switch mail provider when the worker fail to complete mail sending task while using one mail service API.


## Installation
after cloning this repository, create copy configSample folder to configs, then add your own configuration keys to each json file

Run 
```
	$npm install
```

to install dependencies

Be noticed that MailService need redis in your local, so kue as the queue worker can run.

to run MailService in your local run
```
	$npm run start-dev
```

to run MailService API in your local run
```
	$node bin/www
```

to run test for this project, run
```
	$npm run test
```

for MongoDB, you can host your own free server in mlab.

This project also utilize new-relic server monitoring to log server activity and errors by using official newrelic nodejs module.

You can setup your own monitoring by replacing new relic config file in `./configs/monitoring.json`, config file sample provided also in sampleConfigs folder


## Mail Provider
Currently, MailService supports only two mail service, sendgrid and 
mailgun.

## Special Thanks
	- Express JS team, for providing awesome basic routing and middleware functions
	- Automattic, for providing kue as the main module behind the worker
	- Facebook, react is awesome
	- bryantheastronaut for awesome MERN stack tutorial ( https://github.com/bryantheastronaut/mernCommentBox )


NOTE: Please refer to APIdocs.md for API documentation
