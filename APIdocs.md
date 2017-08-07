## Send Email
url: /mail
method POST
body:
  - from : string, email format, mandatory
  - to : string, email format, mandatory
  - subject : string, mandatory
  - content : string, mandatory

## Auth
url: /auth/login
method: POST
body: 
  - username : string, mandatory 
  - password : string, mandatory
