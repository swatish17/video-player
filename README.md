# Video Dock Player

This is a desktop application built to view online or offline videos in resizable window while working on other tabs. So this way we can work and watch the video side by side. The video player window __(Video Dock)__ is resizable and movable within the display area.

* Install
* Paste the _URL_ or _path_ location
* Enjoy !

#### For Windows OS:
Click [here](https://github.com/swatish17/video-dock/raw/master/dist/VideoDock%20Setup%201.0.0.exe) to download the setup file. Install the setup file to run the application.

## Steps to start


### Prerequisites
To start with this application, we need to install the Node JS and Node Package Manager (npm) which can be downloaded from this [link](https://nodejs.org). 

For Linux or Ubuntu Node JS and npm can be installed through command. Open the Terminal and type the commands:
(Make sure you have updated the apt-get)
```
sudo apt-get install nodejs
```
and 
```
sudo apt-get install npm
```

After installing NodeJS try excecting the command in Terminal or Command Prompt:
```
node -v
```
and  / or
```
npm -v
```
If the above command returns any version number then it has been installed successfully.

### Setting up repository
1. Clone or download and extract this repository.
1. Open Command Prompt (for Windows) or Terminal (for Linux, Ubuntu, MacOS).
1. Navigate to the folder location for the cloned or downloaded repository.
1. Type the following command:
    ``` 
    npm install  
    ```
    This will install all the required libraries from _npm_ on to the **_node_module_** folder.
    ```
    npm run dist
    ```
    This will create a folder in the **_dist_** in the local repository. Inside the folder you can find an application file like: **_video-dock Setup 1.0.0.exe_** for _Windows OS_.


## How To Use

When you open the application a main window opens. 

### Place the **URL** link or local **video location**.

![](/screenshots/screenshot_main.jpg)

You can also place any [Youtube](https://www.youtube.com) links like: _https://www.youtube.com/watch?v=kN1Czs0m1SU_ on the text box.

### Click on the **Play** button.

The main window will  be automatically minimized and the dock window will show up on the bottom right corner of the display.

![](/screenshots/screenshot_dock.jpg)

### Use the **Close** and **Drag** button to close the dock window or move the dock window respectively. The dock window can also be __resized__ maintaining an aspect ratio 9 : 16.

