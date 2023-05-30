# Cat Shelter API Testing

This project tests some endpoint of the cat shelter backend. Tested enpoint include: 
* getting cat list
* update user role

start running the test: **npm jest**

The result is displayed as follows:

![image](https://github.com/jasonkitfan/api_test/assets/65491363/32eb79bd-27fa-49ab-9e79-d70aadb31c60)

The first test is designed to verify that the endpoint returns an array with properties "name" and "breed". This test does not require an authentication token and can be called with a GET method to retrieve the result.

The second to the fourth tests are designed to test the same endpoint with different scenarios:

1. passing a invalid token
2. passing a valid token but invalid identify code (the code does not exist in the datebase)
3. passing the valid token and valid identify code
