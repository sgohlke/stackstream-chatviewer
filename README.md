# stackstream Chat Viewer
* You want to create a room on [stackstream](https://stack-stream.com/)?
* You want to keep track of the chat while streaming?
* You want to show the chat on the same window you are showing content on?
* You want to show the chat in the recording?

The strackstream Chat Viewer can help you with these tasks.

## Features
* Enter room-id to view only chat for the room.
* Display stackstream chat for running livestream.
* Muted audio so it does not interfere with your own audio.
* Window "always on top" so it stays on top of the content you are showing. 

## How to run

### Using Windows executable

#### Preparation

You can [download](https://github.com/sgohlke/stackstream-chatviewer/releases) the application as 7z archive containing the content of the application. Just extract the content to a folder of your choice.

#### Display livestream chat
1. Create and start or join a running room you want to display the chat. You need the room/case-id (the part in the url after https://stack-stream.com/case/)
2. Run the Electron app by executing **stackstream-chatviewer.exe** file.
3. In the input field enter the room-id and click on **Show Chat**.
4. If asked allow the app to establish an outgoing connecection (as it tries to open the website stack-stream.com)
5. You can move around and/or resize the window so it fits your needs

### Using npm project

#### Preparation
1. Checkout this project.
2. Run **npm install** in the root of this project (where package.json is located) to install necessary dependencies.
3. Run the Electron app with **npm start**. You might be asked to allow cookies for stackstream, do that.
4. You can close the app using the close-symbol on the app window.

#### Display livestream chat
1. Create and start or join a running room you want to display the chat. You need the room/case-id (the part in the url after https://stack-stream.com/case/)
2. Run the Electron app with **npm start**.
3. In the input field enter the room-id and click on **Show Chat**.
4. If asked allow Electon app to establish outgoing connecection (as it tries to open the website stack-stream.com)
5. You can move around and/or resize the window so it fits your needs

## How it looks like

### When you select the room
![](roomSelection.jpg)

### What you see on the screen you are sharing
![](contentOnDesktop.jpg)

### What is shown in the livestream
![](contentInLiveStream.jpg)
