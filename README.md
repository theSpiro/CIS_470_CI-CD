# CIS_470_CI-CD
A simple CI/CD project for CIS_470


This is a javascript calculator that is very simple in functionality. The main part of this project is to see the CI/CD pipeline. 
This happens whenver a push happens in the GitHub repo on the main branch. When this happens we run all of our test cases as written in compute.test.js.
Once these test cases past we then deploy to Lambda which can be see in the YAML file in workflows. 



We expect the application to run as a normal calculator would, whenver an operation is requested from the HTML page, we then send the operation and do the calculations in compute.js. 
This is then returned to the output of the calculator. 

index.js is where we create the post and get requests that will actually be used by the Lambda function. 

We also install packages that are needed inside the package.json file


