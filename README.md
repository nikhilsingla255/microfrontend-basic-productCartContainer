"# microfrontend-basic-productCartContainer" 

This repo is a very basic setup of microfront end architecute. MFEs .

We are using two child MFEs i.e. 
1. Product to show products using a faker library .
2. Cart to show the number of products in a cart again using a faker library.

We have configured the webpack.config.js file for both products and cart MFEs so that the container can use them.

We have created a Container/Shell/Host app to host the MFEs into them by configuring the webpack.config.js of the container folder.