# fireart-interview
This is a project prepared by Jakub Lewandowski for the purpose of a technical interview with Fireart.
## installation & running
The author assumes basic familliarity with the React Native environment. In this project, NPM was used for installation of the packages, so to repeat that, you need to run 
```
npm install
```
inside the directory containing the source code (./fireartInterviewJaklew). For iOS, an additional step is needed,
```
pod install
```
needs to be called inside the ios directory in ./fireartInterviewJaklew. Project is run by execution of the
```
react-native run-ios
```
or
```
react-native run-android
```
commands in the aforementioned directory.

##
Assumptions made during development of the project:
1. A few functionalities (navigation, SVG loading, linear gradient on the buttons) were impossible to do from scratch in a reasonable amount of time. 3rd party libs were used to achieve these goals.
2. It was assumed that on the 3rd screen, the number of stars is constant (10).
3. iOS project was run on macOS Catalina with XCode 12.1 - it's assumed that this is the minimal requirement to run it.
