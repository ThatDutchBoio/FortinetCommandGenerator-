# FortinetCommandGenerator 
## Running:

### Requirement:
You need an API key to use this.
To get an API key, navigate to System -> Administrators
and create a new REST API admin or regenerate the API key for an existing REST API admin.

Clone the repository "git clone ThatDutchBoio/FortinetCommandGenerator-"
Have node.js installed, navigate into the cloned repository and type "node ."
It will prompt you for your api key and the command to run on each user profile.
Default is "set username-sensitivity disable", just press enter to use it.

The output which you need to paste in the fortitgate CLI will be printed out to the file "output.txt" simply run "cat output.txt" in the same directory to get it.

