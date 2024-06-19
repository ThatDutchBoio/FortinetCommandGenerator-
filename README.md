# FortinetCommandGenerator 

## Getting the UsersJson

I didn't bother figuring out hwo to use fortigate's API so just use inspect element instead.
To find it:
1. Open inspect element
2. Open the Network tab.
3. Navigate to and log in to the fortigate
4. Navigate to User & Authentication
5. Click on User Definition
6. You should now see a bunch of GET requests being made in the network tab (URL you're looking for:
https://enter.fortigate.ip.here/api/v2/monitor/user/fortitoken?vdom=root
)
7. Once you have located this get request, simply click on it, on the right side of inspect element you should see "Headers, Cookies, Request, Response, etc.." Click on response
8. After clicking on response, click on raw and copy the json found in there and replace the json in the json file found in the project files with the json you just copied.


## Running:

Simply have node.js installed, and type "node ." while in the project directory to run.
It will prompt you for a command to run on each user profile.
Default is "set username-sensitivity disable"

